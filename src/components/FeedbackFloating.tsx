import { useState, useEffect, useRef, useCallback, useMemo, ChangeEvent, FormEvent } from 'react';
import {
  MessageSquarePlus,
  Send,
  X,
  AlertCircle,
  CheckCircle2,
  Image as ImageIcon,
  Trash2,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { useDraggableWidget } from '../hooks/useDraggableWidget';
import { ALL_COURSES } from '../data/courseData';
import type { Course } from '../types';

type ReportType = 'request-materi' | 'laporkan-kesalahan' | 'saran-perbaikan';
type UrgencyLevel = 'biasa' | 'penting' | 'mendesak';

interface FeedbackFloatingProps {
  currentCourse?: Course | null;
  currentTm?: number | null;
}

export default function FeedbackFloating({ currentCourse, currentTm }: FeedbackFloatingProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [reportType, setReportType] = useState<ReportType>('request-materi');
  const [selectedCourseCode, setSelectedCourseCode] = useState<string>(() => currentCourse?.code || 'MNK201');
  const [tmInput, setTmInput] = useState<string>(() => (currentTm ? String(currentTm) : ''));
  const [urgency, setUrgency] = useState<UrgencyLevel>('biasa');
  const [description, setDescription] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [screenshotName, setScreenshotName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const draggable = useDraggableWidget({
    id: 'material-feedback',
    defaultPosition: {
      x: typeof window !== 'undefined' ? window.innerWidth - 72 : 952,
      y: typeof window !== 'undefined' ? window.innerHeight / 2 + 80 : 480,
    },
  });

  // Open panel and notify others
  const openPanel = useCallback(() => {
    window.dispatchEvent(new CustomEvent('akuntansihub:utility-open', { detail: { id: 'material-feedback' } }));
    setIsOpen(true);
    setErrorMessage(null);
  }, []);

  // Close when other utility panels open
  useEffect(() => {
    const handleUtilityOpen = (event: Event) => {
      if ((event as CustomEvent<{ id?: string }>).detail?.id !== 'material-feedback') {
        setIsOpen(false);
      }
    };
    window.addEventListener('akuntansihub:utility-open', handleUtilityOpen);
    return () => window.removeEventListener('akuntansihub:utility-open', handleUtilityOpen);
  }, []);

  // Listen to custom trigger event
  useEffect(() => {
    const handleTrigger = (event: Event) => {
      const detail = (event as CustomEvent<{ courseCode?: string; tm?: number; type?: ReportType }>).detail;
      if (detail?.courseCode) setSelectedCourseCode(detail.courseCode);
      if (detail?.tm) setTmInput(String(detail.tm));
      if (detail?.type) setReportType(detail.type);
      openPanel();
    };
    window.addEventListener('open-material-request', handleTrigger);
    return () => window.removeEventListener('open-material-request', handleTrigger);
  }, [openPanel]);

  // Sync with current course/tm
  useEffect(() => {
    if (currentCourse?.code) {
      setSelectedCourseCode(currentCourse.code);
    }
  }, [currentCourse?.code]);

  useEffect(() => {
    if (typeof currentTm === 'number') {
      setTmInput(String(currentTm));
    }
  }, [currentTm]);

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  // ESC key listener to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Unique course list for dropdown
  const courseOptions = useMemo(() => {
    const map = new Map<string, string>();
    for (const item of ALL_COURSES) {
      if (!map.has(item.course.code)) {
        map.set(item.course.code, `${item.course.code} — ${item.course.name}`);
      }
    }
    return Array.from(map.entries()).map(([code, label]) => ({ code, label }));
  }, []);

  const selectedCourseName = useMemo(() => {
    const found = ALL_COURSES.find((c) => c.course.code === selectedCourseCode);
    return found ? found.course.name : selectedCourseCode;
  }, [selectedCourseCode]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('Ukuran file maksimal 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setScreenshot(reader.result);
        setScreenshotName(file.name);
        setErrorMessage(null);
      }
    };
    reader.onerror = () => {
      setErrorMessage('Gagal membaca gambar.');
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setScreenshot(null);
    setScreenshotName(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (cooldown > 0) return;

    if (!description.trim() || description.trim().length < 10) {
      setErrorMessage('Deskripsi minimal 10 karakter agar admin paham materi apa yang kamu butuhkan.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const payload = {
        courseCode: selectedCourseCode,
        courseName: selectedCourseName,
        tm: tmInput.trim() ? tmInput.trim() : null,
        reportType,
        description: description.trim(),
        urgency,
        screenshot,
      };

      const res = await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Terjadi kesalahan saat mengirim laporan.');
      }

      setSubmitSuccess(true);
      setDescription('');
      handleRemoveImage();
      setCooldown(60); // 60s cooldown to prevent accidental duplicate submission
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Gagal mengirim laporan. Periksa koneksi internetmu.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitSuccess(false);
    setErrorMessage(null);
  };

  const isLeftHalf =
    typeof window !== 'undefined'
      ? draggable.position.x < (document.documentElement.clientWidth || window.innerWidth) / 2
      : false;
  const isTopHalf = typeof window !== 'undefined' ? draggable.position.y < window.innerHeight / 2 : false;

  return (
    <>
      {/* Expanded Panel */}
      <div
        id="material-feedback-panel"
        data-utility-panel="material-feedback"
        aria-hidden={!isOpen}
        className={`mobile-utility-panel zen-hideable fixed z-[100] transition-[transform,opacity] duration-200 ease-out ${
          isTopHalf ? 'origin-top' : 'origin-bottom'
        }-${isLeftHalf ? 'left' : 'right'} ${
          !isOpen ? 'scale-90 opacity-0 pointer-events-none' : 'scale-100 opacity-100 pointer-events-auto'
        }`}
        style={draggable.isDesktop ? draggable.getPanelStyle(410, 580) : undefined}
      >
        <div className="mobile-utility-card mobile-utility-card--feedback w-[340px] sm:w-[390px] md:w-[410px] h-[580px] max-h-full flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white shrink-0 select-none">
            <div className="flex items-center gap-2 font-bold text-sm tracking-wide">
              <Sparkles size={18} className="text-amber-200" />
              <span>Request Materi & Feedback</span>
            </div>
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onPointerUp={(e) => e.stopPropagation()}
              onClick={() => setIsOpen(false)}
              aria-label="Tutup form feedback"
              className="text-amber-100 hover:text-white hover:bg-white/20 p-1.5 rounded-full transition cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Subheader info */}
          <div className="bg-amber-50/80 dark:bg-amber-950/30 px-4 py-2 border-b border-amber-200/50 dark:border-amber-900/40 text-[11px] text-amber-900 dark:text-amber-200/90 leading-tight">
            ⚡ Laporan diteruskan langsung ke bot Telegram pemilik web untuk segera ditinjau dan ditambahkan.
          </div>

          {/* Body */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900/50">
            {submitSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">
                  Laporan Berhasil Terkirim!
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-5 max-w-[260px] leading-relaxed">
                  Terima kasih banyak atas feedback-mu! Permintaanmu sudah masuk ke Telegram admin dan akan segera diperbarui.
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition"
                  >
                    Kirim Laporan Lain
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition shadow-sm"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300 text-xs flex gap-2 items-start">
                    <AlertCircle size={15} className="shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Report Type Selector */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                    Jenis Laporan
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-gray-200/70 dark:bg-gray-800 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setReportType('request-materi')}
                      className={`py-1.5 px-2 text-[11px] font-semibold rounded-lg transition text-center ${
                        reportType === 'request-materi'
                          ? 'bg-white dark:bg-gray-700 text-amber-600 dark:text-amber-400 shadow-sm'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                    >
                      📚 Request
                    </button>
                    <button
                      type="button"
                      onClick={() => setReportType('laporkan-kesalahan')}
                      className={`py-1.5 px-2 text-[11px] font-semibold rounded-lg transition text-center ${
                        reportType === 'laporkan-kesalahan'
                          ? 'bg-white dark:bg-gray-700 text-amber-600 dark:text-amber-400 shadow-sm'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                    >
                      🐛 Typo/Salah
                    </button>
                    <button
                      type="button"
                      onClick={() => setReportType('saran-perbaikan')}
                      className={`py-1.5 px-2 text-[11px] font-semibold rounded-lg transition text-center ${
                        reportType === 'saran-perbaikan'
                          ? 'bg-white dark:bg-gray-700 text-amber-600 dark:text-amber-400 shadow-sm'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                    >
                      💡 Saran
                    </button>
                  </div>
                </div>

                {/* Course & TM Fields */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="feedback-course"
                      className="block text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1"
                    >
                      Mata Kuliah
                    </label>
                    <select
                      id="feedback-course"
                      value={selectedCourseCode}
                      onChange={(e) => setSelectedCourseCode(e.target.value)}
                      className="w-full text-xs px-2.5 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                    >
                      {courseOptions.map((opt) => (
                        <option key={opt.code} value={opt.code}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="feedback-tm"
                      className="block text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1"
                    >
                      TM Ke-
                    </label>
                    <input
                      id="feedback-tm"
                      type="text"
                      placeholder="Mis: 2"
                      value={tmInput}
                      onChange={(e) => setTmInput(e.target.value)}
                      className="w-full text-xs px-2.5 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-center"
                    />
                  </div>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1">
                    Tingkat Urgensi
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setUrgency('biasa')}
                      className={`py-1.5 px-2 text-[10px] font-bold rounded-lg border transition ${
                        urgency === 'biasa'
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300'
                      }`}
                    >
                      🟢 Biasa
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgency('penting')}
                      className={`py-1.5 px-2 text-[10px] font-bold rounded-lg border transition ${
                        urgency === 'penting'
                          ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-700 dark:text-amber-300'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300'
                      }`}
                    >
                      🟡 Penting
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgency('mendesak')}
                      className={`py-1.5 px-2 text-[10px] font-bold rounded-lg border transition ${
                        urgency === 'mendesak'
                          ? 'bg-red-50 dark:bg-red-950/40 border-red-500 text-red-700 dark:text-red-300 shadow-sm animate-pulse'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300'
                      }`}
                    >
                      ⚡ Mau UTS!
                    </button>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label
                      htmlFor="feedback-desc"
                      className="block text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Deskripsi Kebutuhan
                    </label>
                    <span
                      className={`text-[10px] ${
                        description.length < 10 ? 'text-gray-400' : 'text-emerald-600 dark:text-emerald-400 font-semibold'
                      }`}
                    >
                      {description.length}/10 min
                    </span>
                  </div>
                  <textarea
                    id="feedback-desc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    placeholder={
                      reportType === 'request-materi'
                        ? 'Contoh: Tolong tambahkan penjelasan rumus DuPont 5-step dan contoh latihan soalnya di TM 2, materi sekarang belum ada cara hitungnya...'
                        : reportType === 'laporkan-kesalahan'
                        ? 'Contoh: Pada tabel perbandingan TM 1 baris ke-3 ada kesalahan angka debit kredit...'
                        : 'Contoh: Tampilan tabel di HP akan lebih nyaman jika...'
                    }
                    className="w-full text-xs p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 leading-relaxed resize-none"
                  />
                </div>

                {/* Screenshot Attachment */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1">
                    Lampiran Gambar (Opsional)
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png, image/jpeg, image/webp"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                  {screenshot ? (
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <img
                          src={screenshot}
                          alt="Pratinjau lampiran"
                          className="w-8 h-8 rounded-lg object-cover shrink-0 border border-gray-200 dark:border-gray-700"
                        />
                        <span className="text-[11px] text-gray-700 dark:text-gray-300 truncate font-medium">
                          {screenshotName || 'screenshot.png'}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="p-1 text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        title="Hapus gambar"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 hover:border-amber-400 dark:hover:border-amber-500 text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 text-xs transition bg-white/50 dark:bg-gray-800/40"
                    >
                      <ImageIcon size={15} />
                      <span>Upload Screenshot / Catatan Dosen</span>
                    </button>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting || cooldown > 0 || description.trim().length < 10}
                  className="w-full mt-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition transform active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Meneruskan ke Telegram...</span>
                    </>
                  ) : cooldown > 0 ? (
                    <span>Tunggu {cooldown}s sebelum kirim lagi</span>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Kirim ke Telegram Admin</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        ref={draggable.ref}
        {...(draggable.isDesktop ? draggable.handlers : {})}
        type="button"
        aria-label={isOpen ? 'Tutup Request Materi' : 'Buka Request Materi & Feedback'}
        aria-controls="material-feedback-panel"
        aria-expanded={isOpen}
        title={isOpen ? 'Tutup Request Materi' : 'Minta Tambahan Materi / Laporkan'}
        onClick={(e) => {
          if (draggable.isMoved) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          if (isOpen) setIsOpen(false);
          else openPanel();
        }}
        style={
          draggable.isDesktop
            ? {
                ...draggable.handlers.style,
                position: 'fixed',
                left: draggable.position.x,
                top: draggable.position.y,
                zIndex: 100,
              }
            : undefined
        }
        className={`zen-hideable group flex items-center justify-center shadow-md ${
          !isOpen ? 'mobile-utility-launcher mobile-utility-launcher--feedback' : ''
        } ${
          draggable.isDragging ? 'transition-none cursor-grabbing scale-105' : 'transition-[all] duration-300'
        } touch-none ${
          draggable.isLongPressing ? 'shadow-xl ring-4 ring-amber-400/50' : 'cursor-pointer active:scale-95'
        } ${
          isOpen
            ? 'w-0 h-0 opacity-0 overflow-hidden'
            : (() => {
                if (!draggable.isDesktop) {
                  if (draggable.edgeState === 'left')
                    return draggable.isLongPressing
                      ? 'w-12 h-12 rounded-r-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                      : 'w-1.5 h-10 rounded-r-md bg-amber-500/60 active:w-12 active:h-12 active:rounded-r-2xl active:bg-amber-500 text-white';
                  if (draggable.edgeState === 'right')
                    return draggable.isLongPressing
                      ? 'w-12 h-12 rounded-l-2xl bg-gradient-to-l from-amber-500 to-orange-500 text-white'
                      : 'w-1.5 h-10 rounded-l-md bg-amber-500/60 active:w-12 active:h-12 active:rounded-r-2xl active:bg-amber-500 text-white';
                  return 'w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white opacity-80';
                } else {
                  if (draggable.edgeState === 'left') return 'w-10 h-12 rounded-r-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg';
                  if (draggable.edgeState === 'right') return 'w-10 h-12 rounded-l-xl bg-gradient-to-l from-amber-500 to-orange-500 text-white shadow-lg';
                  return 'w-11 h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white opacity-90 hover:opacity-100 hover:scale-105 transition-all shadow-lg shadow-orange-500/30';
                }
              })()
        }`}
      >
        {!isOpen && (
          <div className="relative flex items-center justify-center">
            <MessageSquarePlus
              size={20}
              className={
                !draggable.isDesktop && draggable.edgeState && !draggable.isLongPressing
                  ? 'opacity-0 group-active:opacity-100 transition-opacity duration-200'
                  : ''
              }
            />
          </div>
        )}
      </button>
    </>
  );
}
