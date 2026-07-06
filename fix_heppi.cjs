const fs = require('fs');
const file = 'src/data/quizzes/mas122.ts';
let content = fs.readFileSync(file, 'utf8');

const badText = 'Berikut adalah jumlah pengunjung (ribu orang) yang ditampilkan dengan (Tahun;Musim;Jumlah Pengunjung). Secara berturut-turut adalah (2006;Dingin;117), (2007;Dingin;118,6), (2008;Dingin;114), (2009;Dingin;120,7), (2010;Dingin;125,2), (2006;Semi;80,7), (2007;Semi;82,5), (2008;Semi;84,3), (2009;Semi;79,6), (2010;Semi;80,2), (2006;Panas;129,6), (2007;Panas;121,4), (2008;Panas;119,9), (2009;Panas;130,7), (2010;Panas;127,6), (2006;Gugur;76,1), (2007;Gugur;77,0), (2008;Gugur;75), (2009;Gugur;69,6), (2010;Gugur;72).';

const goodText = 'Berikut adalah jumlah pengunjung (ribu orang) per musim:\\n\\n| Tahun | Dingin | Semi | Panas | Gugur |\\n|:---:|:---:|:---:|:---:|:---:|\\n| 2006 | 117.0 | 80.7 | 129.6 | 76.1 |\\n| 2007 | 118.6 | 82.5 | 121.4 | 77.0 |\\n| 2008 | 114.0 | 84.3 | 119.9 | 75.0 |\\n| 2009 | 120.7 | 79.6 | 130.7 | 69.6 |\\n| 2010 | 125.2 | 80.2 | 127.6 | 72.0 |\\n\\n';

content = content.split(badText).join(goodText);

const badText2 = 'Taman Bermain "HEPPI" (Data Pengunjung).';
const goodText2 = 'Berdasarkan tabel pengunjung Taman Bermain "HEPPI" sebelumnya,';

content = content.split(badText2).join(goodText2);

fs.writeFileSync(file, content);
console.log("Done replacing HEPPI data with escaped newlines");
