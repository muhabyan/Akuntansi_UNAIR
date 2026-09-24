// =============================================================
// api/report.js — Vercel Serverless Function proxy to Telegram Bot
// Pure JavaScript ES Module for 100% reliable Vercel Node runtime
// =============================================================

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 requests per minute per IP

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

const URGENCY_EMOJI = {
  biasa: '🟢',
  penting: '🟡',
  mendesak: '🔴',
};

const REPORT_TYPE_LABEL = {
  'request-materi': '📚 Minta Materi Tambahan',
  'laporkan-kesalahan': '🐛 Laporkan Kesalahan',
  'saran-perbaikan': '💡 Saran Perbaikan',
};

function escapeHtml(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const forwarded = req.headers['x-forwarded-for'];
  const ip =
    (typeof forwarded === 'string' ? forwarded.split(',')[0]?.trim() : Array.isArray(forwarded) ? forwarded[0] : null) ??
    req.socket?.remoteAddress ??
    'unknown';

  if (isRateLimited(ip)) {
    return res
      .status(429)
      .json({ error: 'Terlalu banyak request. Silakan tunggu 1 menit sebelum mengirim lagi.' });
  }

  // Parse body
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { courseCode, courseName, tm, reportType, description, urgency, screenshot } = body ?? {};

  // Validate required fields
  if (!courseCode || !description || !urgency || !reportType) {
    return res.status(400).json({ error: 'Mata kuliah, jenis laporan, deskripsi, dan tingkat urgensi wajib diisi.' });
  }
  if (typeof description !== 'string' || description.trim().length < 10) {
    return res.status(400).json({ error: 'Deskripsi minimal 10 karakter.' });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    // eslint-disable-next-line no-console
    console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
    return res.status(500).json({ error: 'Server belum dikonfigurasi dengan TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID.' });
  }

  const urgencyEmoji = URGENCY_EMOJI[urgency] ?? '⚪';
  const urgencyLabel =
    urgency === 'mendesak' ? '⚡ UTS/UAS Minggu Depan!' : urgency === 'penting' ? 'Penting' : 'Biasa';
  const typeLabel = REPORT_TYPE_LABEL[reportType] ?? reportType;
  const now = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

  const htmlMessage = [
    `<b>📋 LAPORAN / REQUEST MATERI</b>`,
    ``,
    `📌 <b>Jenis:</b> ${escapeHtml(typeLabel)}`,
    `📚 <b>Mata Kuliah:</b> ${escapeHtml(courseName ? `${courseName} (${courseCode})` : courseCode)}`,
    tm ? `📖 <b>Pertemuan:</b> TM ${escapeHtml(String(tm))}` : null,
    `${urgencyEmoji} <b>Urgensi:</b> ${escapeHtml(urgencyLabel)}`,
    ``,
    `📝 <b>Deskripsi:</b>`,
    escapeHtml(description.trim()),
    ``,
    `🕐 <i>${now} WIB</i>`,
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const msgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlMessage,
        parse_mode: 'HTML',
      }),
    });

    if (!msgRes.ok) {
      const errText = await msgRes.text();
      // eslint-disable-next-line no-console
      console.error('Telegram sendMessage error:', errText);
      // Fallback: send as plain text
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: `[AkuntansiHub Laporan]\n${typeLabel}\nMK: ${courseCode} TM ${tm || '-'}\nUrgensi: ${urgencyLabel}\n\nDeskripsi:\n${description.trim()}`,
        }),
      });
    }

    // Optional screenshot upload
    if (screenshot && typeof screenshot === 'string' && screenshot.startsWith('data:image/')) {
      const parts = screenshot.split(',');
      const meta = parts[0];
      const base64Data = parts[1];
      if (base64Data) {
        const mimeMatch = meta.match(/data:([^;]+);/);
        const mimeType = mimeMatch ? mimeMatch[1] : 'image/png';
        const buffer = Buffer.from(base64Data, 'base64');
        const blob = new Blob([buffer], { type: mimeType });
        const form = new FormData();
        form.append('chat_id', chatId);
        form.append('photo', blob, 'screenshot.png');
        form.append('caption', `📎 Lampiran: ${courseCode}${tm ? ` TM ${tm}` : ''}`);

        await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
          method: 'POST',
          body: form,
        });
      }
    }

    return res.status(200).json({ success: true, message: 'Laporan berhasil dikirim ke Telegram!' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('API report error:', err);
    return res.status(500).json({ error: 'Gagal mengirim laporan. Silakan coba beberapa saat lagi.' });
  }
}
