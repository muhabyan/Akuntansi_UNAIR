import type { Reading } from '../../../types';
import { CASE_EXTINGUISHMENT_BONDS } from '../akm2PracticeCases';

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Pelunasan Dini Obligasi & Wesel Bayar Jangka Panjang',
  ref: 'Kieso IFRS 5e Ch. 14 | PSAK 71',
  intro: 'Modul Pembelajaran Mendalam AKM II TM 10: Menguasai akuntansi penghentian liabilitas keuangan sebelum jatuh tempo (Extinguishment of Debt), penentuan laba/rugi pelunasan, akuntansi Wesel Bayar Jangka Panjang (Notes Payable) atas kas vs barang/jasa, serta Opsi Nilai Wajar (Fair Value Option).',
  objectives: [
    'Menghitung dan menjurnal Pelunasan Dini Obligasi sebelum tanggal jatuh tempo.',
    'Membandingkan Harga Perolehan Kembali (Reacquisition Price) dengan Nilai Tercatat Bersih (Net Carrying Amount) untuk menentukan Gain/Loss on Extinguishment.',
    'Mencatat Wesel Bayar Jangka Panjang yang diterbitkan dengan pertukaran barang, properti, atau jasa.',
    'Menentukan Suku Bunga Wajar Tersirat (Imputed Interest Rate) bila wesel tidak berbunga wajar.',
    'Memahami penyajian Opsi Nilai Wajar (Fair Value Option) dan perlakuan perubahan risiko kredit sendiri di OCI.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Pelunasan Dini Liabilitas Keuangan (Extinguishment of Debt)' },
    {
      kind: 'p',
      text: 'Entitas dapat melunasi atau menarik kembali obligasinya sebelum tanggal jatuh tempo untuk memanfaatkan penurunan suku bunga pasar atau merestrukturisasi neraca.'
    },
    {
      kind: 'table',
      headers: ['Komponen Analisis', 'Rumus & Komponen Pembentuk', 'Dampak Akuntansi'],
      rows: [
        ['1. Harga Perolehan Kembali (Reacquisition Price)', 'Kas yang dibayarkan untuk menebus obligasi + biaya transaksi penarikan.', 'Mengkredit akun Kas / Bank.'],
        ['2. Nilai Tercatat Bersih (Net Carrying Amount)', 'Nilai Nominal Obligasi ± Sisa Diskonto/Premium yang belum diamortisasi.', 'Mendebit akun Utang Obligasi (menutup saldo tercatat).'],
        ['3. Keuntungan / Kerugian Pelunasan', 'Net Carrying Amount - Reacquisition Price', 'Jika Net Carrying > Reacquisition = **GAIN (Kredit)**;\nJika Net Carrying < Reacquisition = **LOSS (Debit)** di Laba Rugi!']
      ],
      caption: 'Tabel 10.1: Tiga tahapan kalkulasi laba/rugi pelunasan dini obligasi.'
    },

    CASE_EXTINGUISHMENT_BONDS,

    { kind: 'h2', text: '2. Wesel Bayar Jangka Panjang untuk Properti/Barang/Jasa' },
    {
      kind: 'p',
      text: 'Jika wesel jangka panjang diterbitkan untuk membeli aset dan tidak mencantumkan suku bunga atau suku bunga tidak wajar, aset dan wesel dicatat sebesar **Nilai Wajar Aset** atau **Present Value Wesel** yang didiskontokan pada **Suku Bunga Wajar Tersirat (Imputed Interest Rate)**.'
    },

    { kind: 'h2', text: '3. Opsi Nilai Wajar (Fair Value Option - PSAK 71)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Pemisahan Risiko Kredit Sendiri (Own Credit Risk)',
      text: 'Jika entitas memilih mengukur liabilitas keuangan pada Nilai Wajar:\n• Seluruh perubahan nilai wajar diakui di **Laba Rugi (Profit or Loss)**.\n• **KECUALIAN KHUSUS**: Bagian perubahan nilai wajar yang disebabkan oleh perubahan **Risiko Kredit Entitas Sendiri (Own Credit Risk)** WAJIB disajikan di **Penghasilan Komprehensif Lain (OCI)** untuk mencegah entitas mencetak laba saat kondisi keuangannya memburuk!'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 10' },
    {
      kind: 'ul',
      items: [
        '**Update Amortisasi**: Sebelum mencatat pelunasan dini, selalu perbarui amortisasi diskonto/premium hingga tanggal pelunasan.',
        '**Laba/Rugi Pelunasan**: Diakui segera di Laba Rugi periode berjalan.',
        '**Own Credit Risk**: Masuk ke OCI jika menggunakan Fair Value Option.'
      ]
    }
  ]
};