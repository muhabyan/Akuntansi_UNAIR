// =============================================================
// src/components/PengbisView.tsx
// Renderer premium khusus materi Pengantar Bisnis (MNU101)
// Dilengkapi dengan search, checklist progress (localStorage),
// markdown parser, tabs, dan custom accordion untuk materi panjang.
// =============================================================
import { useState, useMemo, useEffect } from 'react';
import {
  ArrowLeft, Search, Check, ChevronDown, ChevronUp,
  BookOpen, BookMarked, HelpCircle, FileQuestion, Sparkles,
  Layers, Award, ArrowUpDown
} from 'lucide-react';
import { pengbisData } from '../data/pengbis/pengbis_module_data';
import type { Course } from '../types';

interface PengbisViewProps {
  course: Course;
  onBack: () => void;
}

type TabType = 'meta' | 'pra_uts' | 'pra_uas' | 'latihan' | 'referensi';

// Tipe data untuk block dari pengbisData
interface BlockData {
  id: string;
  file: string;
  title: string;
  category: string;
  order: number;
  priority: string;
  body_markdown: string;
  body_text: string;
  word_count_estimate: number;
}

// ----------------- PARSER MARKDOWN SEDERHANA & KUAT -----------------
function parseMarkdownToJSX(markdown: string) {
  const lines = markdown.split('\n');
  const jsxElements: React.ReactNode[] = [];
  
  let inList = false;
  let listItems: string[] = [];
  let isOrdered = false;

  let inTable = false;
  let tableHeaders: string[] = [];
  let tableRows: string[][] = [];

  const flushList = (key: string | number) => {
    if (listItems.length > 0) {
      if (isOrdered) {
        jsxElements.push(
          <ol key={`ol-${key}`} className="list-decimal pl-6 space-y-2 mb-4 text-slate-300">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{parseInlineMarkdown(item)}</li>
            ))}
          </ol>
        );
      } else {
        jsxElements.push(
          <ul key={`ul-${key}`} className="space-y-2 mb-4">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-slate-300 leading-relaxed">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span>{parseInlineMarkdown(item)}</span>
              </li>
            ))}
          </ul>
        );
      }
      listItems = [];
      inList = false;
    }
  };

  const flushTable = (key: string | number) => {
    if (inTable) {
      jsxElements.push(
        <div 
          key={`table-wrapper-${key}`} 
          className="mb-5 overflow-x-auto rounded-xl border border-navy-600 bg-navy-900/50 shadow-inner"
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
        >
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy-950/80">
                {tableHeaders.map((header, idx) => (
                  <th key={idx} className="text-left font-semibold text-gold border-b border-navy-600 px-4 py-3 uppercase tracking-wider text-xs">
                    {parseInlineMarkdown(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, rIdx) => (
                <tr key={rIdx} className={rIdx % 2 ? 'bg-navy-800/20' : 'bg-transparent hover:bg-navy-800/10'}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="text-slate-300 border-t border-navy-700/50 px-4 py-3 align-top leading-relaxed">
                      {parseInlineMarkdown(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableHeaders = [];
      tableRows = [];
      inTable = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // 1. Lewati pembatas baris kosong atau baris tabel pemisah |---|---|
    if (line.startsWith('|') && (line.includes('---') || line.includes(':-'))) {
      continue;
    }

    // 2. Deteksi Tabel
    if (line.startsWith('|') && line.endsWith('|')) {
      flushList(i);
      
      const cells = line.split('|').map(c => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
      } else {
        tableRows.push(cells);
      }
      continue;
    } else {
      flushTable(i);
    }

    // 3. Deteksi List Item Unordered (- atau *)
    if (line.startsWith('- ') || line.startsWith('* ')) {
      flushTable(i);
      const text = line.substring(2);
      if (!inList || isOrdered) {
        flushList(i);
        inList = true;
        isOrdered = false;
      }
      listItems.push(text);
      continue;
    }

    // 4. Deteksi List Item Ordered (1. 2. dst)
    if (/^\d+\.\s/.test(line)) {
      flushTable(i);
      const text = line.replace(/^\d+\.\s/, '');
      if (!inList || !isOrdered) {
        flushList(i);
        inList = true;
        isOrdered = true;
      }
      listItems.push(text);
      continue;
    }

    // Jika bukan list item, kosongkan list yang sedang berjalan
    flushList(i);

    // 5. Headings (##, ###, ####)
    if (line.startsWith('#### ')) {
      jsxElements.push(<h4 key={i} className="text-base font-display font-bold text-slate-200 mt-6 mb-2">{parseInlineMarkdown(line.substring(5))}</h4>);
    } else if (line.startsWith('### ')) {
      jsxElements.push(<h3 key={i} className="text-lg font-display font-semibold text-gold mt-8 mb-3 flex items-center gap-2 border-b border-navy-700 pb-1">{parseInlineMarkdown(line.substring(4))}</h3>);
    } else if (line.startsWith('## ')) {
      jsxElements.push(<h2 key={i} className="text-xl md:text-2xl font-display font-extrabold text-slate-100 mt-10 mb-4 tracking-tight">{parseInlineMarkdown(line.substring(3))}</h2>);
    } else if (line.startsWith('# ')) {
      jsxElements.push(<h1 key={i} className="text-2xl md:text-3xl font-display font-black text-slate-50 mt-12 mb-6 border-l-4 border-gold pl-3">{parseInlineMarkdown(line.substring(2))}</h1>);
    } 
    // 6. Paragraf biasa / Teks Kosong
    else if (line !== '') {
      jsxElements.push(<p key={i} className="text-slate-300 leading-relaxed mb-4 text-justify">{parseInlineMarkdown(line)}</p>);
    }
  }

  // Bersihkan sisa list atau tabel jika ada di akhir file
  flushList('end');
  flushTable('end');

  return jsxElements;
}

// Render format bold **tebal** atau inline code `code`
function parseInlineMarkdown(text: string): React.ReactNode {
  // Regex untuk memecah **tebal** dan `code`
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-slate-100 font-bold">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="bg-navy-950 border border-navy-700 text-gold px-1.5 py-0.5 rounded font-mono text-xs">{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

// ----------------- ACCORDION WRAPPER UNTUK MATERI PANJANG -----------------
function AccordionBlock({ block, children, isDone, onToggle }: {
  block: BlockData;
  children: React.ReactNode;
  isDone: boolean;
  onToggle: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Deteksi jika materi tergolong panjang (estimasi kata > 150 atau karakter > 800)
  const isLong = block.body_markdown.length > 800 || block.word_count_estimate > 150;

  if (!isLong) {
    return (
      <div className="bg-navy-800 border border-navy-600 rounded-2xl p-5 md:p-6 mb-6 shadow-md hover:border-navy-500 transition-colors relative group">
        <div className="flex items-center justify-between border-b border-navy-700/60 pb-3 mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onToggle}
              className={`w-6 h-6 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                isDone ? 'bg-gold border-gold text-navy-900 shadow-sm shadow-gold/20' : 'border-navy-500 text-transparent hover:border-gold/50'
              }`}
            >
              <Check size={14} strokeWidth={3} />
            </button>
            <div>
              <span className="text-[10px] tracking-widest uppercase text-gold/70 font-bold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded">
                Order {block.order} · {block.priority.replace(/_/g, ' ')}
              </span>
              <h3 className="text-lg font-display font-bold text-slate-100 mt-1">{block.title}</h3>
            </div>
          </div>
        </div>
        <div className="prose prose-invert max-w-none text-slate-300">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-navy-800 border border-navy-600 rounded-2xl mb-6 shadow-md hover:border-navy-500 transition-all overflow-hidden">
      {/* Header Accordion */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-5 md:p-6 flex items-center justify-between cursor-pointer bg-navy-800 hover:bg-navy-700/30 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className={`w-6 h-6 rounded-md border flex items-center justify-center shrink-0 transition-all ${
              isDone ? 'bg-gold border-gold text-navy-900 shadow-sm shadow-gold/20' : 'border-navy-500 text-transparent hover:border-gold/50'
            }`}
          >
            <Check size={14} strokeWidth={3} />
          </button>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] tracking-widest uppercase text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded font-bold">
                Order {block.order} · {block.priority.replace(/_/g, ' ')}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {block.word_count_estimate} kata · ±{(block.word_count_estimate / 150).toFixed(0)} mnt baca
              </span>
            </div>
            <h3 className="text-lg font-display font-bold text-slate-100 mt-1.5 truncate">{block.title}</h3>
          </div>
        </div>
        
        <div className="flex items-center gap-3 ml-4">
          <button className="text-xs text-gold/80 hover:text-gold font-medium bg-gold/5 hover:bg-gold/10 border border-gold/20 px-3 py-1.5 rounded-lg transition-all hidden sm:inline-block">
            {isOpen ? 'Tutup Materi' : 'Buka Materi'}
          </button>
          <div className="w-8 h-8 rounded-full bg-navy-700 flex items-center justify-center text-slate-300">
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>
      </div>

      {/* Konten Accordion */}
      {/* Menggunakan layout transisi CSS dengan overflow tersembunyi agar material dimuat penuh */}
      <div 
        className={`transition-all duration-300 ease-in-out border-t border-navy-700/50 ${
          isOpen ? 'max-h-[5000px] opacity-100 p-5 md:p-6 bg-navy-800/40' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="prose prose-invert max-w-none text-slate-300">
          {children}
        </div>
        <div className="mt-6 pt-4 border-t border-navy-700/60 flex justify-end">
          <button 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-400 bg-navy-700 hover:bg-navy-600 rounded-lg transition-all"
          >
            <ChevronUp size={14} /> Tutup Materi
          </button>
        </div>
      </div>
    </div>
  );
}

// ----------------- SHELL UTAMA PENGANTAR BISNIS -----------------
export default function PengbisView({ course, onBack }: PengbisViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('pra_uas');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSortedAsc, setIsSortedAsc] = useState(true);

  // Load progress dari localStorage
  const [progress, setProgress] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem('akuntansi-feb-unair:pengbis-progress');
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  // Simpan progress ke localStorage ketika berubah
  useEffect(() => {
    try {
      localStorage.setItem('akuntansi-feb-unair:pengbis-progress', JSON.stringify(progress));
    } catch {
      // Abaikan jika quota error
    }
  }, [progress]);

  // Toggle status penyelesaian block
  const toggleBlock = (blockId: string) => {
    setProgress(prev => {
      const next = { ...prev };
      if (next[blockId]) {
        delete next[blockId];
      } else {
        next[blockId] = true;
      }
      return next;
    });
  };

  // Semua block dari pengbisData
  const allBlocks = useMemo(() => {
    return (pengbisData.blocks || []) as BlockData[];
  }, []);

  // Filter & Search Blocks
  const filteredBlocks = useMemo(() => {
    let result = allBlocks;

    // Filter Kategori/Tab (kecuali jika sedang mencari sesuatu, agar pencarian bersifat global dan mempermudah user)
    if (!searchQuery.trim()) {
      result = result.filter(block => block.category === activeTab);
    }

    // Pencarian berdasarkan title dan body
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(block => 
        block.title.toLowerCase().includes(q) || 
        block.body_text.toLowerCase().includes(q) ||
        block.body_markdown.toLowerCase().includes(q)
      );
    }

    // Sorting berdasarkan 'order'
    result = [...result].sort((a, b) => {
      return isSortedAsc ? a.order - b.order : b.order - a.order;
    });

    return result;
  }, [allBlocks, activeTab, searchQuery, isSortedAsc]);

  // Hitung persentase progres total
  const stats = useMemo(() => {
    const total = allBlocks.length;
    const completed = allBlocks.filter(b => progress[b.id]).length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    // Per kategori
    const uasBlocks = allBlocks.filter(b => b.category === 'pra_uas');
    const uasDone = uasBlocks.filter(b => progress[b.id]).length;
    const uasPercent = uasBlocks.length > 0 ? Math.round((uasDone / uasBlocks.length) * 100) : 0;

    return { total, completed, percent, uasDone, uasTotal: uasBlocks.length, uasPercent };
  }, [allBlocks, progress]);

  // Tab configurations
  const TABS: { id: TabType; label: string; icon: React.ReactNode; count: number }[] = [
    { 
      id: 'pra_uas', 
      label: 'Pra-UAS TM8–14', 
      icon: <Award size={16} />, 
      count: allBlocks.filter(b => b.category === 'pra_uas').length 
    },
    { 
      id: 'pra_uts', 
      label: 'Pra-UTS TM1–7', 
      icon: <Layers size={16} />, 
      count: allBlocks.filter(b => b.category === 'pra_uts').length 
    },
    { 
      id: 'latihan', 
      label: 'Case Bank & Latihan', 
      icon: <FileQuestion size={16} />, 
      count: allBlocks.filter(b => b.category === 'latihan').length 
    },
    { 
      id: 'referensi', 
      label: 'Glossary & Cheat Sheet', 
      icon: <BookMarked size={16} />, 
      count: allBlocks.filter(b => b.category === 'referensi').length 
    },
    { 
      id: 'meta', 
      label: 'Pendahuluan & Audit', 
      icon: <BookOpen size={16} />, 
      count: allBlocks.filter(b => b.category === 'meta').length 
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 animate-fade-in-up">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 min-h-[calc(100vh-160px)]">
        
        {/* SIDEBAR */}
        <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-4">
          
          {/* Card Info Mata Kuliah */}
          <div className="bg-navy-700 border border-navy-500 rounded-2xl p-5 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-colors pointer-events-none" />
            <button 
              onClick={onBack} 
              className="flex items-center gap-2 text-slate-400 hover:text-gold transition-colors mb-4 font-medium text-sm"
            >
              <ArrowLeft size={16} /> Kembali
            </button>
            
            <div className="flex items-center gap-2 text-gold mb-1.5 text-xs font-bold tracking-widest uppercase">
              <Sparkles size={13} /> Modul Premium
            </div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-slate-100 leading-tight mb-2">
              {course.name}
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 bg-navy-900 px-2 py-1 rounded-md border border-navy-600">
                {course.code}
              </span>
              <span className="text-xs text-gold font-semibold bg-gold/10 border border-gold/30 px-2 py-0.5 rounded-md">
                {course.sks} SKS
              </span>
            </div>
            
            {/* Input Pencarian */}
            <div className="mt-5 relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                type="text"
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari kata kunci materi..."
                className="w-full bg-navy-900 border border-navy-600 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-200 outline-none focus:border-gold/50 placeholder-slate-500 focus:ring-1 focus:ring-gold/30 transition-all" 
              />
            </div>
          </div>

          {/* Progress Tracker Card */}
          <div className="bg-navy-700 border border-navy-500 rounded-2xl p-5 shadow-lg">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
              <span>Progres Belajar</span>
              <span className="text-gold font-display font-black text-sm">{stats.percent}%</span>
            </h4>
            
            <div className="h-2 rounded-full bg-navy-900 overflow-hidden mb-4">
              <div 
                className="h-full bg-gradient-to-r from-gold/70 to-gold transition-all duration-500 rounded-full" 
                style={{ width: `${stats.percent}%` }} 
              />
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Total Modul</span>
                <span className="font-semibold text-slate-200">{stats.completed} / {stats.total}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Prioritas Pra-UAS</span>
                <span className="font-semibold text-slate-200">{stats.uasDone} / {stats.uasTotal} ({stats.uasPercent}%)</span>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation Tabs */}
          <div className="bg-navy-700 border border-navy-500 rounded-2xl overflow-hidden shadow-lg lg:sticky lg:top-24">
            <div className="p-3 border-b border-navy-600 bg-navy-750/50 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Kategori Materi</span>
              <button 
                onClick={() => setIsSortedAsc(!isSortedAsc)}
                title="Ubah Urutan"
                className="text-slate-400 hover:text-gold transition-colors p-1"
              >
                <ArrowUpDown size={14} />
              </button>
            </div>
            
            <div className="flex lg:flex-col overflow-x-auto hide-scrollbar p-2 lg:p-3 gap-1 md:gap-1.5">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSearchQuery(''); // Reset search jika pindah tab agar user-friendly
                  }}
                  className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap lg:whitespace-normal text-left text-sm font-medium ${
                    activeTab === tab.id && !searchQuery
                      ? 'bg-gold/10 text-gold border border-gold/20 shadow-sm'
                      : 'text-slate-400 hover:bg-navy-600 hover:text-slate-200 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={activeTab === tab.id && !searchQuery ? 'text-gold' : 'text-slate-500'}>
                      {tab.icon}
                    </span>
                    <span>{tab.label}</span>
                  </div>
                  <span className="text-[10px] font-bold bg-navy-900 text-slate-400 border border-navy-600 px-1.5 py-0.5 rounded">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* AREA KONTEN UTAMA */}
        <main className="flex-1 bg-navy-850 border border-navy-600 rounded-3xl p-5 md:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Header Konten Aktif */}
          <div className="mb-6 pb-5 border-b border-navy-700/60">
            {searchQuery ? (
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-wider">Hasil Pencarian Global</span>
                <h1 className="text-2xl md:text-3xl font-display font-black text-slate-100 mt-1">
                  Mencari: "{searchQuery}"
                </h1>
                <p className="text-slate-400 text-xs mt-1">
                  Menemukan {filteredBlocks.length} blok yang cocok di seluruh kategori materi.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-wider">Materi Pengantar Bisnis</span>
                <h1 className="text-2xl md:text-3xl font-display font-black text-slate-100 mt-1">
                  {TABS.find(t => t.id === activeTab)?.label}
                </h1>
                <p className="text-slate-400 text-xs mt-1">
                  Menampilkan {filteredBlocks.length} materi terurut berdasarkan prioritas silabus.
                </p>
              </div>
            )}
          </div>

          {/* List Materi */}
          {filteredBlocks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-navy-800 border border-navy-700 flex items-center justify-center text-slate-500 mb-4">
                <HelpCircle size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-300 mb-1">Materi Tidak Ditemukan</h3>
              <p className="text-sm text-slate-500 max-w-sm">
                Coba sesuaikan kata kunci pencarian Anda atau periksa tab kategori lainnya.
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              {filteredBlocks.map((block) => (
                <AccordionBlock 
                  key={block.id} 
                  block={block}
                  isDone={Boolean(progress[block.id])}
                  onToggle={() => toggleBlock(block.id)}
                >
                  {parseMarkdownToJSX(block.body_markdown)}
                </AccordionBlock>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
