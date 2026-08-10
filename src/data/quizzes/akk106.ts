import type { QuizQuestion } from '../../types';

export const AKK106_QUIZ: QuizQuestion[] = [
  {
    kind: 'mcq',
    topic: 'TM 1 - Persamaan Akuntansi',
    difficulty: 'medium',
    q: 'Jika perusahaan membeli peralatan secara tunai seharga Rp10.000.000, bagaimana dampaknya pada persamaan akuntansi dasar?',
    options: [
      'Aset bertambah Rp10.000.000, Ekuitas bertambah Rp10.000.000',
      'Aset bertambah Rp10.000.000, Liabilitas bertambah Rp10.000.000',
      'Satu aset bertambah Rp10.000.000 (Peralatan) dan aset lain berkurang Rp10.000.000 (Kas)',
      'Aset berkurang Rp10.000.000, Ekuitas berkurang Rp10.000.000'
    ],
    answer: 2,
    explanation: 'Pembelian aset secara tunai hanya mengubah komposisi aset. Total aset tetap sama (kas berkurang, peralatan bertambah).'
  },
  {
    kind: 'multi-select',
    topic: 'TM 2 - Aturan Debit Kredit',
    difficulty: 'basic',
    q: 'Manakah dari akun berikut yang memiliki saldo normal DEBIT?',
    options: [
      'Kas (Cash)',
      'Utang Usaha (Accounts Payable)',
      'Beban Gaji (Salaries Expense)',
      'Pendapatan Jasa (Service Revenue)',
      'Peralatan (Equipment)'
    ],
    answers: [0, 2, 4],
    explanation: 'Aset (Kas, Peralatan) dan Beban (Beban Gaji) bersaldo normal debit. Liabilitas, Ekuitas, dan Pendapatan bersaldo normal kredit.'
  },
  {
    kind: 'account-match',
    topic: 'TM 3 - Adjusting Entries',
    difficulty: 'medium',
    q: 'Pasangkan jenis jurnal penyesuaian dengan deskripsinya.',
    choices: ['Prepaid Expense', 'Unearned Revenue', 'Accrued Revenue', 'Accrued Expense'],
    pairs: [
      { prompt: 'Beban sudah dibayar tunai tetapi belum diakui sebagai beban', answer: 'Prepaid Expense' },
      { prompt: 'Kas sudah diterima tetapi jasa belum diberikan', answer: 'Unearned Revenue' },
      { prompt: 'Jasa sudah diberikan tetapi kas belum diterima/dicatat', answer: 'Accrued Revenue' },
      { prompt: 'Beban sudah terjadi tetapi belum dibayar/dicatat', answer: 'Accrued Expense' }
    ]
  },
  {
    kind: 'mcq',
    topic: 'TM 5 - Perusahaan Dagang',
    difficulty: 'medium',
    q: 'Dalam sistem persediaan perpetual, saat barang dijual, jurnal yang dicatat adalah...',
    options: [
      'Hanya menjurnal pengakuan Piutang dan Pendapatan Penjualan',
      'Hanya menjurnal Harga Pokok Penjualan (COGS) dan Persediaan',
      'Menjurnal (1) Piutang/Kas dan Penjualan, (2) COGS dan Persediaan',
      'Mencatat pembelian saja'
    ],
    answer: 2,
    explanation: 'Sistem perpetual mengharuskan pencatatan cost setiap kali terjadi penjualan, sehingga ada 2 jurnal: untuk revenue dan untuk cost.'
  },
  {
    kind: 'mcq',
    topic: 'TM 6 - Persediaan',
    difficulty: 'advanced',
    q: 'Data persediaan: Beginning Inventory 100 unit @ Rp10. Pembelian 200 unit @ Rp12. Ending Inventory fisik menunjukkan sisa 50 unit. Berapa nilai COGS menggunakan metode FIFO?',
    options: [
      '2400',
      '2800',
      '3000',
      '3400'
    ],
    answer: 1,
    explanation: 'Total Cost of Goods Available = (100 * 10) + (200 * 12) = 1000 + 2400 = 3400. Ending inv 50 unit (berasal dari harga terakhir @12) = 50 * 12 = 600. COGS = 3400 - 600 = 2800. (Atau: terjual 250 unit -> 100*10 + 150*12 = 1000 + 1800 = 2800).'
  }
];
