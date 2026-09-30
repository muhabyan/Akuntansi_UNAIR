import type { QuizQuestion } from '../../types';

// Kasus orisinal mengikuti keterampilan latihan akhir bab Richardson et al., bab 1, 2, 4–8.
const tm1: QuizQuestion[] = [
  {
    id: 'sia-uts-tm1-06', tm: 1, topic: 'Accounting Information Systems and Firm Value', difficulty: 'advanced',
    q: "Three branches stock the same SKU. A dashboard reports average inventory of 120 units, but branch C has only 2 units against a reorder point of 15. Which information supports the most useful inventory decision?",
    options: ["Reorder for branch C using its own balance and reorder point", "Delay purchasing because the three-branch average is still 120 units", "Raise every branch's stock to 120 units without checking demand", "Delete branch C's record because it differs from the average"],
    answer: 0,
    explanation: 'Data per cabang yang diberi konteks reorder point membuat informasi relevan untuk keputusan: cabang C perlu ditangani. Rata-rata menutup risiko stockout lokal. Menyamakan semua stok mengabaikan permintaan dan biaya, sedangkan menghapus outlier membuang sinyal yang justru perlu diperiksa.',
  },
  {
    id: 'sia-uts-tm1-07', tm: 1, topic: 'Accounting Information Systems and Firm Value', difficulty: 'medium',
    q: "A manufacturer receives components, assembles bicycles, ships finished bicycles, and handles warranty claims. Which step is an operations activity in the value chain?",
    options: ["Receiving components from suppliers", "Assembling components into bicycles", "Shipping bicycles to dealers", "Handling customer warranty claims"],
    answer: 1,
    explanation: 'Operations mengubah input menjadi produk, yaitu perakitan. Penerimaan komponen ialah inbound logistics, pengiriman ialah outbound logistics, dan klaim garansi termasuk service. Keempatnya aktivitas utama, tetapi hanya perakitan yang merupakan operations.',
  },
  {
    id: 'sia-uts-tm1-08', tm: 1, topic: 'Accounting Information Systems and Firm Value', difficulty: 'advanced', kind: 'multi-select',
    q: "An SKU report identifies items that frequently stock out, but two days of sales are missing and one branch still uses old SKU codes. Which actions would make the report more useful before a purchasing decision? Select all that apply.",
    options: ["Sync the latest transactions so the report is timely", "Map old SKU codes to the correct master records", "Place every raw log entry on the first page for completeness", "Show the update date and identify branches that have not synced"],
    answers: [0, 1, 3],
    explanation: 'Sinkronisasi memperbaiki timeliness; pemetaan kode memperbaiki ketepatan representasi; penanda keterbatasan data membuat pembaca tidak salah menafsirkan cakupan. Menumpuk log mentah di muka justru meningkatkan information overload dan tidak membetulkan data yang hilang.',
  },
  {
    id: 'sia-uts-tm1-09', tm: 1, topic: 'Accounting Information Systems and Firm Value', difficulty: 'advanced', kind: 'multi-select',
    q: "A CRM system flags customers who repeatedly abandon purchases because items are out of stock. Which statements about the value of this AIS information are defensible? Select all that apply.",
    options: ["Combine CRM and inventory data to prioritize replenishment", "Assume that collecting more data always improves decisions", "Compare decision benefits with system costs for a discretionary investment", "Recognize that fewer stockouts may affect revenue"],
    answers: [0, 2, 3],
    explanation: 'Menghubungkan keluhan pelanggan dengan stok memberi dasar tindakan dan dapat menekan penjualan yang hilang. Investasi discretionary dinilai dari manfaat relatif terhadap biaya. Volume data saja tidak menjamin relevansi atau akurasi; data yang salah bisa membuat keputusan lebih buruk.',
  },
  {
    id: 'sia-uts-tm1-10', tm: 1, topic: 'Accounting Information Systems and Firm Value', difficulty: 'medium', kind: 'short-answer',
    q: "A store records thousands of transactions, but its system displays only SKUs with stock below the reorder point. What is the reporting technique that highlights only these unusual conditions? Give the short term.",
    answers: ['exception reporting', 'laporan pengecualian', 'pelaporan pengecualian', 'exception report'],
    explanation: 'Exception reporting menyaring kondisi yang membutuhkan perhatian, misalnya stok di bawah reorder point. Dashboard seluruh transaksi tetap mungkin berguna untuk penelusuran, tetapi bukan nama teknik penyaringan pengecualian ini.',
  },
];

const tm2: QuizQuestion[] = [
  {
    id: 'sia-uts-tm2-06', tm: 2, topic: 'Data Analytics: Addressing Accounting Questions with Data', difficulty: 'advanced',
    q: "Sales fell 12% this month. An analyst first summarizes the decline by branch, then finds that branches with stockouts account for most of it. Which type of analysis is the second step?",
    options: ["Descriptive, because it only totals the decline", "Diagnostic, because it investigates the cause of the decline", "Predictive, because it forecasts next month", "Prescriptive, because it has already selected order quantities"],
    answer: 1,
    explanation: 'Langkah kedua menjawab mengapa penjualan turun dengan menghubungkan penurunan dan stockout, sehingga diagnostic. Ringkasan per cabang sebelumnya descriptive. Belum ada ramalan masa depan untuk predictive atau keputusan jumlah pesanan untuk prescriptive.',
  },
  {
    id: 'sia-uts-tm2-07', tm: 2, topic: 'Data Analytics: Addressing Accounting Questions with Data', difficulty: 'advanced',
    q: "An audit dataset contains Invoice_ID, Vendor_ID, Amount, and Paid_Date. Invoice 81 appears twice with the same vendor and amount but different Paid_Date values. What is the best next audit step?",
    options: ["Delete one row without obtaining more evidence", "Inspect payment evidence and invoice status to distinguish a duplicate from separate legitimate payments", "Conclude that the vendor is fictitious because the dates differ", "Treat both rows as two unquestionably valid purchases"],
    answer: 1,
    explanation: 'Pola invoice sama merupakan exception yang perlu diuji dengan bukti, bukan putusan final. Menghapus baris dapat menyembunyikan pembayaran ganda; dua tanggal tidak membuktikan vendor fiktif; menjumlahkan sebagai pembelian sah mengabaikan risiko duplikasi.',
  },
  {
    id: 'sia-uts-tm2-08', tm: 2, topic: 'Data Analytics: Addressing Accounting Questions with Data', difficulty: 'advanced', kind: 'multi-select',
    q: "Before calculating margin by SKU, an analyst finds mixed date formats, SKUs missing from the master file, and customer names in the sales extract. Which Master the Data actions are justified? Select all that apply.",
    options: ["Standardize date formats and test the transformed values", "Match SKUs to the master file and investigate unknown codes", "Publish full customer names on a public dashboard for transparency", "Restrict access to, or remove, customer identities that the analysis does not need"],
    answers: [0, 1, 3],
    explanation: 'Format tanggal dan kode master harus dibersihkan serta divalidasi sebelum agregasi. Data pelanggan perlu perlindungan sesuai tujuan analisis. Menampilkan identitas lengkap pada dashboard publik tidak menambah perhitungan margin dan memperbesar risiko privasi.',
  },
  {
    id: 'sia-uts-tm2-09', tm: 2, topic: 'Data Analytics: Addressing Accounting Questions with Data', difficulty: 'advanced', kind: 'multi-select',
    q: "A model predicts whether customers will pay late. The credit team wants to use its scores to set credit limits. Which checks should precede that decision? Select all that apply.",
    options: ["Test the model on data that were not used to train it", "Check whether historical data represent current customers", "Treat each predicted probability as certainty that the customer will pay late", "Assess the cost of prediction errors and the credit decision rule"],
    answers: [0, 1, 3],
    explanation: 'Data uji dan keterwakilan mengukur apakah prediksi dapat dipakai di luar data latih. Dampak false positive dan false negative perlu dipertimbangkan sebelum tindakan prescriptive. Probabilitas bukan kepastian, sehingga opsi yang menganggapnya fakta mengabaikan ketidakpastian model.',
  },
  {
    id: 'sia-uts-tm2-10', tm: 2, topic: 'Data Analytics: Addressing Accounting Questions with Data', difficulty: 'medium', kind: 'short-answer',
    q: "An analyst uses Goal Seek to find the minimum units needed for profit to equal zero. Which type of analytics selects an action target under that constraint? Give the short term.",
    answers: ['prescriptive', 'prescriptive analytics', 'analitika preskriptif', 'analisis preskriptif'],
    explanation: 'Prescriptive analytics membantu memilih tindakan atau nilai input untuk mencapai sasaran. Descriptive merangkum apa yang terjadi, diagnostic menjelaskan sebab, dan predictive memperkirakan hasil yang mungkin terjadi.',
  },
];

const tm3: QuizQuestion[] = [
  {
    id: 'sia-uts-tm3-06', tm: 3, topic: 'Accountants as Business Analysts', difficulty: 'advanced',
    q: "After receiving an order, Sales checks credit. If approved, the warehouse picks goods; if rejected, Sales sends a notice. Which BPMN gateway splits these paths?",
    options: ["A parallel gateway, because both activities must occur", "An exclusive gateway, because the decision selects exactly one path", "An inclusive gateway, because several paths always occur", "A message flow, because the warehouse is another lane"],
    answer: 1,
    explanation: 'Keputusan kredit memilih satu dari dua hasil yang saling meniadakan, sehingga exclusive gateway. Parallel akan menjalankan kedua jalur; inclusive memungkinkan lebih dari satu; perpindahan antar-lane dalam satu pool tetap menggunakan sequence flow, bukan message flow.',
  },
  {
    id: 'sia-uts-tm3-07', tm: 3, topic: 'Accountants as Business Analysts', difficulty: 'advanced',
    q: "A BPMN model puts the company and supplier in separate pools. Purchasing sends a purchase order to the supplier. Which connector should cross the pool boundary?",
    options: ["Sequence flow", "Message flow", "Association to a data object", "Parallel gateway"],
    answer: 1,
    explanation: 'Message flow menggambarkan pertukaran pesan antar-pool, seperti PO dari perusahaan ke supplier. Sequence flow mengatur urutan aktivitas hanya di dalam pool; association mengaitkan data, bukan komunikasi; gateway membagi atau menggabungkan jalur proses.',
  },
  {
    id: 'sia-uts-tm3-08', tm: 3, topic: 'Accountants as Business Analysts', difficulty: 'advanced', kind: 'multi-select',
    q: "A payment-process swimlane shows employee A creating vendors, approving invoices, and preparing transfers, while employee B only files documents. Which changes address the control weakness shown? Select all that apply.",
    options: ["Separate vendor approval from payment preparation", "Have an independent employee match invoices to purchase orders and receiving evidence", "Remove approval records to speed the process", "Let employee A approve their own transfers to reduce the queue"],
    answers: [0, 1],
    explanation: 'Konsentrasi pembuatan vendor, persetujuan invoice, dan pembayaran memungkinkan transaksi fiktif. Pemisahan tugas serta pemeriksaan dokumen oleh pihak independen menurunkan risiko. Menghapus jejak audit atau memberi persetujuan sendiri justru melemahkan kontrol.',
  },
  {
    id: 'sia-uts-tm3-09', tm: 3, topic: 'Accountants as Business Analysts', difficulty: 'advanced', kind: 'multi-select',
    q: "A process map shows a supplier invoice arriving, Accounts Payable verifying it, and a payment being sent. Which revisions would make the map more useful for a walkthrough? Select all that apply.",
    options: ["Show who approves payment and what evidence they review", "Add a path for an invoice that does not match the receiving report", "End the process immediately after the invoice arrives even though payment is still shown", "Label activities with clear verbs and objects"],
    answers: [0, 1, 3],
    explanation: 'Walkthrough memerlukan pelaku, bukti, titik keputusan, serta jalur pengecualian. Nama aktivitas yang jelas membantu pembaca menelusuri proses. Mengakhiri token sebelum aktivitas pembayaran membuat model tidak konsisten dan menghilangkan langkah penting.',
  },
  {
    id: 'sia-uts-tm3-10', tm: 3, topic: 'Accountants as Business Analysts', difficulty: 'medium', kind: 'short-answer',
    q: "In a BPMN diagram, a company sends a purchase order to a supplier shown in a separate pool. What is the connector between the pools called? Give the short term.",
    answers: ['message flow', 'alur pesan', 'arus pesan'],
    explanation: 'Message flow menghubungkan dua partisipan/pool berbeda. Sequence flow menunjukkan urutan kerja di dalam satu pool dan boleh melintasi lane, tetapi tidak boleh melintasi batas pool.',
  },
];

const tm4: QuizQuestion[] = [
  {
    id: 'sia-uts-tm4-06', tm: 4, topic: 'Data Modeling', difficulty: 'advanced',
    q: "A UML diagram allows one Customer to have 0..* Orders, while every Order must belong to exactly 1 Customer. What must the system permit?",
    options: ["A new customer with no order, and an order only with one valid Customer_ID", "An order with no customer, but every customer must have an order", "Multiple customers for one order because the diagram shows 0..*", "No second order for a customer who already has one"],
    answer: 0,
    explanation: '0..* di sisi Orders berarti seorang customer boleh belum memesan atau memesan berkali-kali. 1..1 di sisi Customer berarti setiap order wajib menunjuk satu customer. Opsi lain membalik atau mengabaikan batas minimum dan maksimum itu.',
  },
  {
    id: 'sia-uts-tm4-07', tm: 4, topic: 'Data Modeling', difficulty: 'advanced',
    q: "A bookstore lets one order contain many book titles, and one title appear on many orders. The line records quantity and agreed unit price. Where should those two attributes be stored?",
    options: ["In the Book master, because price and quantity are always the same", "In the Customer master, because the buyer determines the order", "In an Order_Line linking table that connects Order and Book", "As a text list in one Order cell to avoid creating another table"],
    answer: 2,
    explanation: 'Quantity dan agreed unit price bergantung pada pasangan Order–Book, sehingga berada di Order_Line. Master Book mungkin memiliki harga daftar, tetapi harga transaksi bisa berbeda. Customer bukan pemilik atribut baris, dan daftar dalam satu sel menyulitkan relasi serta melanggar atomicity.',
  },
  {
    id: 'sia-uts-tm4-08', tm: 4, topic: 'Data Modeling', difficulty: 'advanced', kind: 'multi-select',
    q: "In a store's REA diagram, Sales decreases Inventory and Cash_Receipt increases Cash. Which classifications are consistent with REA? Select all that apply.",
    options: ["Inventory and Cash are resources", "Sales and Cash_Receipt are events", "Customer is an external agent", "Accounts Receivable must always be a physical resource in an REA diagram"],
    answers: [0, 1, 2],
    explanation: 'REA membedakan resource bernilai ekonomi, event yang mengubahnya, dan agent pelaku. Piutang dapat diturunkan dari event penjualan serta pembayaran; memasukkannya sebagai resource fisik wajib justru mencampur saldo turunan dengan resource yang dimodelkan.',
  },
  {
    id: 'sia-uts-tm4-09', tm: 4, topic: 'Data Modeling', difficulty: 'advanced', kind: 'multi-select',
    q: "A design states that one Department has many Employees and every Employee must belong to exactly one Department. Which relational constraints follow? Select all that apply.",
    options: ["Employee stores Department_ID as a foreign key", "Employee.Department_ID cannot be null when the participation rule is mandatory", "Each Department must store a list of Employee_ID values in one cell", "Employee.Department_ID must reference an existing Department"],
    answers: [0, 1, 3],
    explanation: 'Relasi 1:N dipetakan dengan foreign key di sisi many; aturan wajib membuat foreign key tidak null dan referential integrity menuntut induk yang ada. Daftar banyak Employee_ID dalam satu sel bukan implementasi relasional yang baik.',
  },
  {
    id: 'sia-uts-tm4-10', tm: 4, topic: 'Data Modeling', difficulty: 'medium', kind: 'short-answer',
    q: "Each Order can include many Products, and each Product can appear on many Orders. What is the general name for the table that resolves this M:N relationship into two 1:N relationships? Give the short term.",
    answers: ['linking table', 'tabel penghubung', 'junction table', 'associative table', 'tabel asosiasi'],
    explanation: 'Linking table menyimpan foreign key kedua sisi dan atribut relasi seperti kuantitas. Satu foreign key langsung di Order atau Product tidak cukup untuk merekam banyak pasangan tanpa pengulangan atau kehilangan data.',
  },
];

const tm5: QuizQuestion[] = [
  {
    id: 'sia-uts-tm5-06', tm: 5, topic: 'Relational Databases and Enterprise Systems', difficulty: 'advanced',
    q: "Order_Line stores (Order_ID, Product_ID, Qty). Row (O9, P2, 3) already exists. A user enters (O9, P2, 5), but the composite key is (Order_ID, Product_ID). What should the system do?",
    options: ["Insert a new row because Qty differs", "Reject the duplicate key or update Qty in the existing row when supported by transaction evidence", "Remove Product_ID to make the two rows unique", "Replace Order_ID with the customer number"],
    answer: 1,
    explanation: 'Kunci gabungan mengidentifikasi satu pasangan order dan produk, jadi dua baris dengan pasangan sama melanggar entity integrity. Bila memang ada tambahan unit untuk baris sama, Qty dapat diperbarui sesuai bukti. Qty bukan bagian kunci; menghapus Product_ID atau mengganti Order_ID merusak relasi.',
  },
  {
    id: 'sia-uts-tm5-07', tm: 5, topic: 'Relational Databases and Enterprise Systems', difficulty: 'advanced',
    q: "A query joins Invoice to Customer on Customer_ID. An invoice contains Customer_ID = C88, but Customer has no C88. What is the immediate data-quality issue?",
    options: ["Atomicity, because one cell contains multiple values", "Referential integrity, because the foreign key has no matching parent", "Order independence, because invoice rows are unsorted", "Primary-key uniqueness, because two invoices have the same identifier"],
    answer: 1,
    explanation: 'Invoice menunjuk customer yang tidak ada, yaitu orphan foreign key dan pelanggaran referential integrity. Atomicity berkaitan dengan satu nilai per sel, order independence dengan urutan baris, dan duplikasi primary key tidak ditunjukkan oleh kasus.',
  },
  {
    id: 'sia-uts-tm5-08', tm: 5, topic: 'Relational Databases and Enterprise Systems', difficulty: 'advanced', kind: 'multi-select',
    q: "Customer A has receipts of 40, 70, and 90; Customer B has receipts of 110 and 130. A query groups by Customer_ID and uses HAVING SUM(Amount) > 200. Which results or interpretations are correct? Select all that apply.",
    options: ["Customer B qualifies with a total of 240", "Customer A does not qualify because its total is exactly 200", "WHERE Amount > 200 produces the same aggregate result", "HAVING filters groups after SUM is calculated"],
    answers: [0, 1, 3],
    explanation: 'A berjumlah 200 sehingga gagal syarat lebih besar dari 200; B berjumlah 240 sehingga lolos. HAVING bekerja pada agregat per customer. WHERE Amount > 200 memfilter baris sebelum pengelompokan dan di sini membuang semua receipt.',
  },
  {
    id: 'sia-uts-tm5-09', tm: 5, topic: 'Relational Databases and Enterprise Systems', difficulty: 'advanced', kind: 'multi-select',
    q: "When goods arrive, an ERP warehouse module records a receipt linked to a PO. The supplier invoice arrives the next day. Which statements are sound? Select all that apply.",
    options: ["The receipt may update inventory and the temporary GR/IR account", "The invoice still must be matched with the PO and receiving evidence before payment", "Recording a receipt proves that an invoice not yet received is correct", "A shared PO reference connects warehouse and Accounts Payable transaction data"],
    answers: [0, 1, 3],
    explanation: 'ERP menghubungkan dokumen lintas fungsi dan dapat mencatat persediaan serta GR/IR saat penerimaan. Saat invoice tiba, harga dan kuantitas tetap perlu diperiksa. Receipt saja tidak membuktikan isi invoice yang bahkan belum ada.',
  },
  {
    id: 'sia-uts-tm5-10', tm: 5, topic: 'Relational Databases and Enterprise Systems', difficulty: 'medium', kind: 'short-answer',
    q: "In an Invoice table, Customer_ID must refer to an existing Customer_ID in the Customer table. What is this relational integrity rule called? Give the short term.",
    answers: ['referential integrity', 'integritas referensial', 'integritas rujukan'],
    explanation: 'Referential integrity mencegah foreign key yatim. Entity integrity mengatur primary key unik dan tidak null; atomicity mengatur isi sel, sehingga keduanya bukan aturan yang ditanyakan.',
  },
];

const tm6: QuizQuestion[] = [
  {
    id: 'sia-uts-tm6-06', tm: 6, topic: 'Sales and Collections Business Process', difficulty: 'advanced',
    q: "A credit order for Rp8 million is approved, but the warehouse ships only half the goods, worth Rp4 million, and the customer obtains control of those goods. Under the control-transfer criterion, how much revenue is recognized now?",
    options: ["Rp0, because no cash has arrived", "Rp4 million for the goods delivered", "Rp8 million because the order was approved", "Rp12 million, the order value plus the shipment"],
    answer: 1,
    explanation: 'Untuk barang yang telah diserahkan, kewajiban kinerja sebesar Rp4 juta telah dipenuhi dan dapat diakui sesuai syarat kasus. Persetujuan order tidak sama dengan penyerahan; penerimaan kas bukan syarat pengakuan penjualan kredit. Rp12 juta menghitung ganda.',
  },
  {
    id: 'sia-uts-tm6-07', tm: 6, topic: 'Sales and Collections Business Process', difficulty: 'advanced',
    q: "One cash receipt of Rp6 million settles Rp2 million of Sale S1 and Rp4 million of Sale S2. How should a relational design record the application of cash?",
    options: ["Store only one Sale_ID in Cash_Receipt", "Create two Sale_Cash_Receipt linking rows, each with its own Amount_Applied", "Duplicate the Rp6 million receipt in two rows so each sale appears paid", "Store S1,S2 as a list in one Sale_ID cell"],
    answer: 1,
    explanation: 'Satu receipt dapat melunasi beberapa sale; tabel penghubung mencatat alokasi 2 dan 4 juta tanpa menggandakan kas. Satu Sale_ID kehilangan alokasi kedua, penggandaan receipt melebihkan kas, dan daftar dalam satu sel menyulitkan integritas serta query.',
  },
  {
    id: 'sia-uts-tm6-08', tm: 6, topic: 'Sales and Collections Business Process', difficulty: 'advanced', kind: 'multi-select',
    q: "A new credit order arrives. Before sending a picking ticket to the warehouse, which controls help prevent shipment to an uncollectible account or the wrong address? Select all that apply.",
    options: ["Validate Customer_ID against the customer master", "Check the credit limit and open balance under company policy", "Match the shipping address to master data or an approved address change", "Recognize full revenue when the order is entered so receivables appear sooner"],
    answers: [0, 1, 2],
    explanation: 'Validasi customer, penilaian kredit, dan pemeriksaan alamat membantu sebelum fulfillment. Pengakuan pendapatan saat order dibuat tidak mencegah risiko, dan pada kasus barang belum diserahkan akan mengakui pendapatan terlalu dini.',
  },
  {
    id: 'sia-uts-tm6-09', tm: 6, topic: 'Sales and Collections Business Process', difficulty: 'advanced', kind: 'multi-select',
    q: "A customer returns two invoiced units, and no cash has been received for that invoice. Which effects or controls are appropriate? Select all that apply.",
    options: ["Issue a credit memo linked to the original invoice after checking the return", "Reduce the customer's receivable by the approved return amount", "Record a new cash receipt even though no cash arrived", "Inspect the goods before adding them to saleable inventory"],
    answers: [0, 1, 3],
    explanation: 'Credit memo dan pengurangan piutang menelusuri koreksi atas penjualan kredit; stok layak jual bergantung pada pemeriksaan kondisi barang. Mencatat cash receipt tanpa kas akan melebihkan kas dan menyamarkan bahwa transaksi adalah retur.',
  },
  {
    id: 'sia-uts-tm6-10', tm: 6, topic: 'Sales and Collections Business Process', difficulty: 'medium', kind: 'short-answer',
    q: "One customer payment settles two invoices. What is the usual data-attribute name on the linking table for the amount of that payment assigned to each invoice? Give the short term.",
    answers: ['amount applied', 'amount_applied', 'jumlah yang dialokasikan', 'nilai yang dialokasikan'],
    explanation: 'Amount_Applied menunjukkan bagian receipt yang diterapkan pada tiap invoice. Nilai total receipt saja tidak menjelaskan pembagiannya, sedangkan Credit_Limit adalah batas kredit pelanggan.',
  },
];

const tm7: QuizQuestion[] = [
  {
    id: 'sia-uts-tm7-06', tm: 7, topic: 'Purchases and Payments Business Process', difficulty: 'advanced',
    q: "A PO orders 100 units at Rp50,000 each. The receiving report confirms 90 acceptable units, but the invoice bills 100. What should Accounts Payable do before paying?",
    options: ["Pay for 100 units because the supplier invoice is an external document", "Automatically pay for 90 units without notifying the supplier", "Hold the discrepancy and resolve the invoice, PO, and receipt difference under policy", "Change the receiving report to 100 so the three documents agree"],
    answer: 2,
    explanation: 'Three-way match menemukan selisih 10 unit; AP perlu menyelidiki dan menyelesaikannya sebelum menyetujui jumlah yang dibayar. Invoice saja tidak membuktikan penerimaan, pembayaran 90 tanpa prosedur bisa melanggar syarat, dan mengubah bukti terima memalsukan kejadian fisik.',
  },
  {
    id: 'sia-uts-tm7-07', tm: 7, topic: 'Purchases and Payments Business Process', difficulty: 'advanced',
    q: "A vendor sends two invoices with the same invoice number and amount against one PO. Both pass a simple three-way comparison with that PO and receipt. Which added control best targets duplicate payment?",
    options: ["Check the Vendor_ID and Invoice_Number combination against invoices already recorded or paid", "Skip the receiving-report check to speed processing", "Let one employee create vendors and release payments", "Pay the second invoice because the PO still exists"],
    answer: 0,
    explanation: 'Three-way match yang hanya melihat kecocokan dokumen dapat melewatkan invoice yang diajukan dua kali. Pemeriksaan nomor invoice per vendor dan status pembayaran menangkap duplikasi. Opsi lain melemahkan kontrol atau justru membayar dua kali.',
  },
  {
    id: 'sia-uts-tm7-08', tm: 7, topic: 'Purchases and Payments Business Process', difficulty: 'advanced', kind: 'multi-select',
    q: "A warehouse receives 18 of 20 units ordered on a PO; the supplier invoices 20 units. Which records and actions preserve an audit trail? Select all that apply.",
    options: ["Record 18 units on the receiving report based on the physical count", "Keep the PO for 20 units as evidence of the original authorization", "Change the receiving report to 20 units to pass the invoice check", "Flag the two-unit difference for resolution before payment"],
    answers: [0, 1, 3],
    explanation: 'PO menunjukkan yang diotorisasi, receiving report menunjukkan yang sungguh diterima, dan exception selisih perlu ditindaklanjuti. Mengubah receipt menjadi 20 menghapus bukti short shipment dan dapat menyebabkan kelebihan pembayaran.',
  },
  {
    id: 'sia-uts-tm7-09', tm: 7, topic: 'Purchases and Payments Business Process', difficulty: 'advanced', kind: 'multi-select',
    q: "In an REA model of a credit purchase, the PO is issued Monday, goods arrive Wednesday, and cash is paid Friday. Which classifications or timing statements are correct? Select all that apply.",
    options: ["The PO is a purchase commitment, not evidence that goods were received", "The goods receipt is an event that increases inventory", "The cash disbursement is an event that decreases cash", "Approving the PO immediately decreases cash"],
    answers: [0, 1, 2],
    explanation: 'PO menyatakan niat/komitmen; penerimaan barang dan pembayaran adalah kejadian ekonomi pada waktu berbeda. PO saja belum memindahkan barang ataupun kas, sehingga tidak boleh diperlakukan sebagai cash disbursement.',
  },
  {
    id: 'sia-uts-tm7-10', tm: 7, topic: 'Purchases and Payments Business Process', difficulty: 'medium', kind: 'short-answer',
    q: "Accounts Payable compares the purchase order, receiving report, and vendor invoice before approving payment. What is this three-document control called? Give the short term.",
    answers: ['three way match', 'three-way match', 'pencocokan tiga dokumen', 'pencocokan tiga arah'],
    explanation: 'Three-way match menguji otorisasi pembelian, penerimaan fisik, dan tagihan pemasok. Dua dokumen saja tidak cukup untuk memastikan baik pemesanan maupun penerimaan benar; selisih harus diselesaikan sebelum pembayaran.',
  },
];

export const SIA_UTS_SUPPLEMENT: QuizQuestion[] = [
  ...tm1, ...tm2, ...tm3, ...tm4, ...tm5, ...tm6, ...tm7,
];
