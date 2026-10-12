import type { ContentBlock } from '../../types';

// Supplement to the syllabus requirement; distinct from the assigned Lind chapter.
export const ARIMA_AUDIT_BLOCKS: ContentBlock[] = [
  { kind: 'h2', text: 'ARIMA: urutan model dan batas penggunaannya' },
  { kind: 'callout', variant: 'note', title: 'Sumber pelengkap', text: 'RPP Statistik PDF 4 meminta ARIMA. Penjelasan ini memakai Hyndman dan Athanasopoulos, Forecasting: Principles and Practice 3e, bagian 9.1 dan 9.5-9.8 sebagai pelengkap terbuka. [Baca bab ARIMA](https://otexts.com/fpp3/arima.html).' },
  { kind: 'p', text: 'ARIMA(p,d,q) memodelkan hubungan antarnilai dalam waktu. p adalah jumlah lag autoregresif, d jumlah pembedaan, dan q jumlah lag galat moving average. Komponen MA pada ARIMA berbeda dari rata-rata beberapa observasi untuk pemulusan.' },
  { kind: 'formula', text: 'y_t^{\\prime}=y_t-y_{t-1}', note: 'Pembedaan pertama mengurangi perubahan tingkat. Data hasil beda perlu diperiksa kestasionerannya; pembedaan tidak otomatis menjamin model sesuai. Rujukan: FPP3 bagian 9.1.' },
  { kind: 'ol', items: [
    'Plot seri menurut waktu dan periksa pola musiman.',
    'Tentukan pembedaan, lalu periksa ACF/PACF.',
    'Estimasi dan bandingkan model dengan kriteria informasi.',
    'Periksa residual dan akurasi pada periode uji.',
    'Sajikan forecast beserta interval prediksi.',
  ] },
  { kind: 'example', title: 'Ilustrasi pembedaan buatan', blocks: [
    { kind: 'p', text: 'Seri 100, 110, 120, 130 unit menjadi 10, 10, 10 unit setelah pembedaan pertama. Empat observasi ini hanya menjelaskan mekanisme; jumlahnya tidak memadai untuk menyimpulkan model ARIMA yang sesuai. Rujukan konsep: FPP3 bagian 9.1.' },
  ] },
];
