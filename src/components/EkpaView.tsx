// =============================================================
// src/components/EkpaView.tsx
// Renderer premium khusus materi Etika & Keterampilan Profesional Akuntan (AKA103)
// Dilengkapi dengan search, checklist progress (localStorage),
// kuis interaktif, case bank, dan custom accordion untuk materi panjang.
// =============================================================
import { useState, useMemo, useEffect } from 'react';
import {
  ArrowLeft, Search, Check, ChevronDown, ChevronUp,
  BookMarked, FileQuestion, Sparkles,
  Layers, Award, ArrowUpDown, Target, GraduationCap, X
} from 'lucide-react';
import { ekpaPraUasTm8_14 } from '../data/ekpa/ekpaData';
import type { Course } from '../types';

interface EkpaViewProps {
  course: Course;
  onBack: () => void;
}

type TabType = 'pra_uts' | 'pra_uas' | 'cases' | 'latihan' | 'referensi';

// Tipe data dari ekpaData
interface ModuleData {
  tm: number;
  id: string;
  title: string;
  markdown: string;
  html: string;
}

interface CaseData {
  t: string;
  m: string;
  a: string;
}

interface QuestionData {
  topic: string;
  question: string;
  options: string[];
  answerIndex: number;
  answer: string;
  explanation: string;
}

const UTS_MATERIAL = [
  { tm: 1, title: 'Hakikat Akuntansi & Kesulitan Etis Utama (True Disclosure)', ref: 'Duska Ch. 1', desc: 'Membahas pentingnya penyajian laporan keuangan yang jujur (true disclosure) serta kesulitan etis utama yang sering dihadapi akuntan dalam menjaga integritas informasi.' },
  { tm: 2, title: 'Pengukuran & Pelaporan: Laporan Keuangan, Nilai Aset, COGS', ref: 'Duska Ch. 1–2', desc: 'Mengkaji aspek etis di balik penetapan nilai aset, perhitungan Harga Pokok Penjualan (COGS), dan dampaknya pada profitabilitas serta persepsi investor.' },
  { tm: 3, title: 'Pengantar Etika: Definisi, Dimensi & Tingkatan', ref: 'Duska Ch. 2', desc: 'Menjelaskan konsep dasar etika, perbedaan antara etika pribadi, profesional, dan sosial, serta dimensi-dimensi pengambilan keputusan moral.' },
  { tm: 4, title: 'Kode Etik Profesi & Prinsip AICPA', ref: 'AICPA · Duska Ch. 3', desc: 'Menelaah aturan etika resmi AICPA/Ikatan Akuntan Indonesia, tanggung jawab akuntan kepada publik, integritas, objektivitas, serta perilaku profesional.' },
  { tm: 5, title: 'Teori Moral untuk Akuntan (Egoisme, Utilitarianisme, Deontologi)', ref: 'Duska Ch. 3', desc: 'Mempelajari kerangka filosofis dasar untuk memecahkan dilema etis akuntansi, termasuk pemikiran egoisme etis, kemanfaatan publik (utilitarianisme), dan kewajiban moral (deontologi).' },
  { tm: 6, title: 'Etika Pengungkapan & Penerapan pada Profesi Akuntan', ref: 'Duska Ch. 4', desc: 'Mendalami dilema whistleblowing, batas kerahasiaan klien vs transparansi publik, serta penerapan pertimbangan etis dalam asuransi dan kepatuhan.' },
  { tm: 7, title: 'Review & Studi Kasus UTS', ref: 'RPS Resmi', desc: 'Latihan penyelesaian kasus-kasus riil UTS UNAIR terdahulu dengan menggunakan model penalaran moral yang terstruktur.' }
];

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

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
        <div key={`table-wrapper-${key}`} className="mb-5 overflow-x-auto rounded-xl border border-navy-600 bg-navy-900/50 shadow-inner">
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

    if (line.startsWith('|') && (line.includes('---') || line.includes(':-'))) {
      continue;
    }

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

    flushList(i);

    if (line.startsWith('#### ')) {
      jsxElements.push(<h4 key={i} className="text-base font-display font-bold text-slate-200 mt-6 mb-2">{parseInlineMarkdown(line.substring(5))}</h4>);
    } else if (line.startsWith('### ')) {
      jsxElements.push(<h3 key={i} className="text-lg font-display font-semibold text-gold mt-8 mb-3 flex items-center gap-2 border-b border-navy-700 pb-1">{parseInlineMarkdown(line.substring(4))}</h3>);
    } else if (line.startsWith('## ')) {
      jsxElements.push(<h2 key={i} className="text-xl md:text-2xl font-display font-extrabold text-slate-100 mt-10 mb-4 tracking-tight">{parseInlineMarkdown(line.substring(3))}</h2>);
    } else if (line.startsWith('# ')) {
      jsxElements.push(<h1 key={i} className="text-2xl md:text-3xl font-display font-black text-slate-50 mt-12 mb-6 border-l-4 border-gold pl-3">{parseInlineMarkdown(line.substring(2))}</h1>);
    } 
    else if (line !== '') {
      jsxElements.push(<p key={i} className="text-slate-300 leading-relaxed mb-4 text-justify">{parseInlineMarkdown(line)}</p>);
    }
  }

  flushList('end');
  flushTable('end');

  return jsxElements;
}

function parseInlineMarkdown(text: string): React.ReactNode {
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
  block: ModuleData;
  children: React.ReactNode;
  isDone: boolean;
  onToggle: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wordCount = block.markdown.split(/\s+/).length;
  const isLong = block.markdown.length > 800 || wordCount > 150;

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
                TM {block.tm} · Prioritas UAS
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
                TM {block.tm} · Prioritas UAS
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {wordCount} kata · ±{(wordCount / 150).toFixed(0)} mnt baca
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

// ----------------- SHELL UTAMA EKPA -----------------
export default function EkpaView({ course, onBack }: EkpaViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('pra_uas');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSortedAsc, setIsSortedAsc] = useState(true);

  // Kuis Interaktif State
  const [activeQuizIndex, setActiveQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [completedQuizzes, setCompletedQuizzes] = useState(0);

  // Load progress dari localStorage
  const [progress, setProgress] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem('akuntansi-feb-unair:ekpa-progress');
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('akuntansi-feb-unair:ekpa-progress', JSON.stringify(progress));
    } catch {
      // Abaikan jika quota error
    }
  }, [progress]);

  const toggleBlock = (blockId: string) => {
    setProgress(prev => {
      const next = { ...prev };
      if (next[blockId]) delete next[blockId];
      else next[blockId] = true;
      return next;
    });
  };

  // Seluruh modules uas
  const allModules = useMemo(() => {
    return (ekpaPraUasTm8_14.modules || []) as ModuleData[];
  }, []);

  // Kasus
  const allCases = useMemo(() => {
    return (ekpaPraUasTm8_14.cases || []) as CaseData[];
  }, []);

  // Soal kuis
  const allQuestions = useMemo(() => {
    return (ekpaPraUasTm8_14.quiz || []) as QuestionData[];
  }, []);

  // Filter Modules untuk Pra-UAS
  const filteredModules = useMemo(() => {
    let result = allModules;

    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(block => 
        block.title.toLowerCase().includes(q) || 
        block.markdown.toLowerCase().includes(q)
      );
    }

    result = [...result].sort((a, b) => {
      return isSortedAsc ? a.tm - b.tm : b.tm - a.tm;
    });

    return result;
  }, [allModules, searchQuery, isSortedAsc]);

  // Filter Kasus
  const filteredCases = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return allCases;
    return allCases.filter(c => 
      c.t.toLowerCase().includes(q) || 
      c.m.toLowerCase().includes(q) || 
      c.a.toLowerCase().includes(q)
    );
  }, [allCases, searchQuery]);

  // Progres total
  const stats = useMemo(() => {
    const total = allModules.length + allCases.length;
    const completed = allModules.filter(m => progress[m.id]).length + allCases.filter(c => progress[`case:${c.t}`]).length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, percent };
  }, [allModules, allCases, progress]);

  // Kuis handlers
  const handleQuizAnswer = (idx: number) => {
    if (showAnswerFeedback) return;
    setSelectedAnswer(idx);
    setShowAnswerFeedback(true);
    setCompletedQuizzes(prev => prev + 1);
    if (idx === allQuestions[activeQuizIndex].answerIndex) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    setSelectedAnswer(null);
    setShowAnswerFeedback(false);
    if (activeQuizIndex < allQuestions.length - 1) {
      setActiveQuizIndex(prev => prev + 1);
    } else {
      // Loop kembali ke awal
      setActiveQuizIndex(0);
      setQuizScore(0);
      setCompletedQuizzes(0);
    }
  };

  const TABS: { id: TabType; label: string; icon: React.ReactNode; count?: number }[] = [
    { id: 'pra_uas', label: 'Pra-UAS TM8–14', icon: <Award size={16} />, count: allModules.length },
    { id: 'pra_uts', label: 'Pra-UTS TM1–7', icon: <Layers size={16} />, count: UTS_MATERIAL.length },
    { id: 'cases', label: 'Case Bank', icon: <GraduationCap size={16} />, count: allCases.length },
    { id: 'latihan', label: 'Latihan & Kuis', icon: <FileQuestion size={16} />, count: allQuestions.length },
    { id: 'referensi', label: 'Glossary & Referensi', icon: <BookMarked size={16} /> }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 animate-fade-in-up">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 min-h-[calc(100vh-160px)]">
        
        {/* SIDEBAR */}
        <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-4">
          
          {/* Card Info */}
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
            
            {/* Search Input */}
            <div className="mt-5 relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                type="text"
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari materi / kasus..."
                className="w-full bg-navy-900 border border-navy-600 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-200 outline-none focus:border-gold/50 placeholder-slate-500 focus:ring-1 focus:ring-gold/30 transition-all" 
              />
            </div>
          </div>

          {/* Progress Card */}
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
                <span>Total Modul & Kasus</span>
                <span className="font-semibold text-slate-200">{stats.completed} / {stats.total}</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-navy-700 border border-navy-500 rounded-2xl overflow-hidden shadow-lg lg:sticky lg:top-24">
            <div className="p-3 border-b border-navy-600 bg-navy-750/50 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Kategori Materi</span>
              {activeTab === 'pra_uas' && (
                <button 
                  onClick={() => setIsSortedAsc(!isSortedAsc)}
                  title="Ubah Urutan"
                  className="text-slate-400 hover:text-gold transition-colors p-1"
                >
                  <ArrowUpDown size={14} />
                </button>
              )}
            </div>
            
            <div className="flex lg:flex-col overflow-x-auto hide-scrollbar p-2 lg:p-3 gap-1 md:gap-1.5">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSearchQuery('');
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
                  {tab.count !== undefined && (
                    <span className="text-[10px] font-bold bg-navy-900 text-slate-400 border border-navy-600 px-1.5 py-0.5 rounded">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* AREA KONTEN UTAMA */}
        <main className="flex-1 bg-navy-850 border border-navy-600 rounded-3xl p-5 md:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Active Header */}
          <div className="mb-6 pb-5 border-b border-navy-700/60">
            {searchQuery ? (
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-wider">Hasil Pencarian Global</span>
                <h1 className="text-2xl md:text-3xl font-display font-black text-slate-100 mt-1">
                  Mencari: "{searchQuery}"
                </h1>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-wider">Etika &amp; Keterampilan Profesional Akuntan</span>
                <h1 className="text-2xl md:text-3xl font-display font-black text-slate-100 mt-1">
                  {TABS.find(t => t.id === activeTab)?.label}
                </h1>
              </div>
            )}
          </div>

          {/* TAB 1: PRA-UTS */}
          {activeTab === 'pra_uts' && !searchQuery && (
            <div className="space-y-4">
              <div className="p-4 bg-gold/5 border border-gold/20 rounded-2xl mb-6">
                <p className="text-sm text-gold/90 leading-relaxed font-medium">
                  <strong>Silabus Pra-UTS:</strong> Merupakan fondasi teoritis awal mencakup pengantar etika, kode etik resmi IAI/AICPA, dan teori-teori moral universal (egoisme, utilitarianisme, deontologi).
                </p>
              </div>
              
              <div className="space-y-4">
                {UTS_MATERIAL.map((uts) => (
                  <div key={uts.tm} className="bg-navy-800 border border-navy-600 rounded-2xl p-5 hover:border-gold/30 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded">
                        TM {uts.tm}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        Ref: {uts.ref}
                      </span>
                    </div>
                    <h3 className="text-base font-display font-bold text-slate-200 mb-2">
                      {uts.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed text-justify">
                      {uts.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PRA-UAS */}
          {activeTab === 'pra_uas' && (
            <div className="space-y-1">
              {filteredModules.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-sm">Tidak ada materi yang cocok dengan "{searchQuery}".</div>
              ) : (
                filteredModules.map((block) => (
                  <AccordionBlock 
                    key={block.id} 
                    block={block}
                    isDone={Boolean(progress[block.id])}
                    onToggle={() => toggleBlock(block.id)}
                  >
                    {parseMarkdownToJSX(block.markdown)}
                  </AccordionBlock>
                ))
              )}
            </div>
          )}

          {/* TAB 3: CASE BANK */}
          {activeTab === 'cases' && (
            <div className="space-y-6">
              <div className="p-4 bg-gold/5 border border-gold/20 rounded-2xl mb-4">
                <p className="text-sm text-gold/90 leading-relaxed">
                  <strong>Studi Kasus Riil:</strong> Bagian penting dalam ujian EKPA UNAIR adalah kemampuan menganalisis kasus secara etis menggunakan kerangka tata kelola, kepemimpinan, dan hak asasi.
                </p>
              </div>
              
              {filteredCases.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-sm">Tidak ada kasus yang cocok dengan pencarian.</div>
              ) : (
                filteredCases.map((c, idx) => {
                  const isDone = Boolean(progress[`case:${c.t}`]);
                  return (
                    <div key={idx} className="bg-navy-800 border border-navy-600 rounded-2xl p-5 md:p-6 shadow-md">
                      <div className="flex items-center justify-between border-b border-navy-700/60 pb-3 mb-4 flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => toggleBlock(`case:${c.t}`)}
                            className={`w-6 h-6 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                              isDone ? 'bg-gold border-gold text-navy-900' : 'border-navy-500 text-transparent hover:border-gold/50'
                            }`}
                          >
                            <Check size={14} strokeWidth={3} />
                          </button>
                          <h3 className="text-lg font-display font-bold text-slate-100">
                            {c.t}
                          </h3>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gold/80 bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
                          Kasus {idx + 1}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Topik Utama</h4>
                        <p className="text-sm text-slate-300 leading-relaxed text-justify">{c.m}</p>
                      </div>
                      
                      <div className="bg-navy-900/50 border border-navy-700 rounded-xl p-4">
                        <h4 className="text-xs font-bold text-gold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <Target size={12} /> Panduan Jawaban Ujian Ideal
                        </h4>
                        <p className="text-sm text-slate-300 leading-relaxed text-justify">{c.a}</p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* TAB 4: LATIHAN & KUIS */}
          {activeTab === 'latihan' && !searchQuery && (
            <div className="space-y-6">
              
              {/* Card Ringkasan Progres Kuis */}
              <div className="bg-navy-800 border border-navy-600 rounded-2xl p-5 flex items-center justify-between flex-wrap gap-4 shadow-md">
                <div>
                  <h3 className="text-lg font-display font-bold text-slate-200 mb-1">Kuis Pengayaan Pra-UAS</h3>
                  <p className="text-xs text-slate-400">Uji pemahaman Anda dengan bank kuis 90 soal pilihan ganda.</p>
                </div>
                <div className="flex gap-4 text-xs font-semibold">
                  <div className="bg-navy-900 border border-navy-700 rounded-lg px-3 py-2 text-center">
                    <span className="block text-slate-400 font-normal">Score</span>
                    <span className="text-gold font-mono font-bold text-sm">{quizScore} / {completedQuizzes}</span>
                  </div>
                  <div className="bg-navy-900 border border-navy-700 rounded-lg px-3 py-2 text-center">
                    <span className="block text-slate-400 font-normal">Soal Aktif</span>
                    <span className="text-slate-200 font-mono font-bold text-sm">{activeQuizIndex + 1} / {allQuestions.length}</span>
                  </div>
                </div>
              </div>

              {/* Box Kuis Aktif */}
              {allQuestions.length > 0 && (
                <div className="bg-navy-800 border border-navy-600 rounded-3xl p-5 md:p-6 shadow-lg">
                  <div className="flex justify-between items-center border-b border-navy-700/60 pb-3 mb-4">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-gold">
                      {allQuestions[activeQuizIndex].topic}
                    </span>
                    <span className="text-xs text-slate-500">Soal PG</span>
                  </div>

                  <p className="font-display font-bold text-slate-100 text-lg mb-6 leading-relaxed">
                    {allQuestions[activeQuizIndex].question}
                  </p>

                  <div className="space-y-3">
                    {allQuestions[activeQuizIndex].options.map((opt, oIdx) => {
                      const isCorrect = allQuestions[activeQuizIndex].answerIndex === oIdx;
                      const isSelected = selectedAnswer === oIdx;
                      
                      let btnStyle = "border-navy-600 bg-navy-900/60 text-slate-300 hover:border-gold/30 hover:bg-navy-750/30";
                      
                      if (showAnswerFeedback) {
                        if (isCorrect) {
                          btnStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-300 shadow-sm shadow-emerald-500/5";
                        } else if (isSelected) {
                          btnStyle = "border-red-500 bg-red-500/10 text-red-300 shadow-sm shadow-red-500/5";
                        } else {
                          btnStyle = "border-navy-700 bg-navy-900/20 text-slate-500 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={showAnswerFeedback}
                          onClick={() => handleQuizAnswer(oIdx)}
                          className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-start gap-3 outline-none ${btnStyle}`}
                        >
                          <span className="w-6 h-6 rounded-md bg-navy-950/60 border border-navy-750 text-slate-400 flex items-center justify-center text-xs font-bold shrink-0">
                            {LETTERS[oIdx]}
                          </span>
                          <span className="flex-1 pt-0.5 leading-relaxed">{opt}</span>
                          {showAnswerFeedback && isCorrect && <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />}
                          {showAnswerFeedback && isSelected && !isCorrect && <X size={16} className="text-red-400 shrink-0 mt-0.5" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback Pembahasan */}
                  {showAnswerFeedback && (
                    <div className="mt-6 bg-navy-900 border border-navy-700/60 rounded-2xl p-4 animate-fade-in-up">
                      <div className="text-xs font-bold text-gold uppercase tracking-wider mb-1">Pembahasan &amp; Kunci Jawaban</div>
                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {allQuestions[activeQuizIndex].explanation}
                      </p>
                      <div className="flex justify-end">
                        <button
                          onClick={handleNextQuiz}
                          className="px-4 py-2 bg-gold hover:bg-gold-600 text-navy-900 font-bold rounded-xl text-xs transition-colors"
                        >
                          {activeQuizIndex < allQuestions.length - 1 ? 'Soal Berikutnya' : 'Selesai & Ulangi'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: REFERENSI */}
          {activeTab === 'referensi' && !searchQuery && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-display font-bold text-slate-200 mb-2 flex items-center gap-2">
                  <BookMarked className="text-gold" size={18} /> Rujukan Resmi UNAIR
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Buku teks, jurnal ilmiah, dan silabus resmi Departemen Akuntansi FEB Universitas Airlangga.
                </p>
                
                <ul className="space-y-3">
                  {ekpaPraUasTm8_14.references && ekpaPraUasTm8_14.references.map((ref: string, idx: number) => (
                    <li key={idx} className="flex gap-3 bg-navy-800 border border-navy-600 rounded-xl p-4">
                      <span className="w-7 h-7 rounded-md bg-gold/10 text-gold flex items-center justify-center font-bold text-sm shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-slate-300 leading-relaxed">{ref}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
