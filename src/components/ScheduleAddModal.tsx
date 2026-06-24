import { useState } from 'react';
import { ALL_COURSES } from '../data/courseData';
import { X, Calendar, Clock, Plus, BrainCircuit, Target, CheckCircle2 } from 'lucide-react';
import type { Course } from '../types';

interface ScheduleAddModalProps {
  onClose: () => void;
  onSave: (date: string, time: string, courseCode: string, activities: string[]) => void;
  currentActiveCount?: number;
}

export default function ScheduleAddModal({ onClose, onSave, currentActiveCount = 0 }: ScheduleAddModalProps) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  
  const today = new Date().toISOString().split('T')[0];

  const handleCourseChange = (code: string) => {
    const course = ALL_COURSES.find(c => c.course.code === code)?.course || null;
    setSelectedCourse(course);
    setSelectedActivities([]);
  };

  const remainingSlot = Math.max(0, 8 - currentActiveCount);

  const toggleActivity = (activityId: string) => {
    setSelectedActivities(prev => {
      if (prev.includes(activityId)) {
        return prev.filter(id => id !== activityId);
      }
      if (prev.length >= remainingSlot) {
        if (remainingSlot === 0) {
          alert('Kamu sudah mencapai batas maksimal 8 jadwal aktif secara keseluruhan. Tuntaskan atau hapus jadwal yang ada terlebih dahulu!');
        } else {
          alert(`Maksimal 8 jadwal aktif secara keseluruhan! Kamu sudah punya ${currentActiveCount} jadwal aktif, jadi hanya bisa menambah ${remainingSlot} lagi.`);
        }
        return prev;
      }
      return [...prev, activityId];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !selectedCourse || selectedActivities.length === 0) return;
    onSave(date, time, selectedCourse.code, selectedActivities);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-500" />
            Buat Jadwal Belajar
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {remainingSlot === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Batas Maksimal Tercapai</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Kamu memiliki 8 jadwal belajar aktif saat ini. Untuk menjaga fokus, selesaikan atau hapus beberapa jadwal sebelum membuat yang baru.
              </p>
              <button 
                onClick={onClose}
                className="btn-primary px-6 py-2"
              >
                Tutup & Tuntaskan Jadwal
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Waktu */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Tanggal</label>
                <input
                  type="date"
                  min={today}
                  required
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Jam</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <input
                    type="time"
                    required
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Mata Kuliah */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Mata Kuliah</label>
              <select
                required
                value={selectedCourse?.code || ''}
                onChange={e => handleCourseChange(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              >
                <option value="" disabled>-- Pilih Mata Kuliah --</option>
                {ALL_COURSES.map(({ course }) => (
                  <option key={course.code} value={course.code}>
                    {course.code} - {course.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Materi / Topik */}
            {selectedCourse && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Target Materi (Sisa Kuota: {remainingSlot - selectedActivities.length})
                  </label>
                  <span className="text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-2 py-0.5 rounded-full">
                    {selectedActivities.length}/{remainingSlot} Terpilih
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1 pr-2 custom-scrollbar">
                  {/* Generate TMs */}
                  {[...(selectedCourse.materiTM1_7 || []), ...(selectedCourse.materiTM8_14 || [])].map((materi) => {
                    const actId = `tm-${materi.tm}`;
                    const isSelected = selectedActivities.includes(actId);
                    return (
                      <button
                        key={actId}
                        type="button"
                        onClick={() => toggleActivity(actId)}
                        className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all ${
                          isSelected 
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10 dark:border-blue-500/50 shadow-sm' 
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-600/50 hover:bg-slate-50 dark:hover:bg-slate-800/80'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span className={`text-xs font-bold uppercase ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`}>
                            TM {materi.tm}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-500" />}
                        </div>
                        <span className={`text-sm line-clamp-2 ${isSelected ? 'text-slate-900 dark:text-slate-100 font-medium' : 'text-slate-600 dark:text-slate-400'}`}>
                          {materi.title}
                        </span>
                      </button>
                    );
                  })}
                  
                  {/* Features */}
                  <button
                    type="button"
                    onClick={() => toggleActivity('bank-soal')}
                    className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all ${
                      selectedActivities.includes('bank-soal') ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
                    }`}
                  >
                    <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">Fitur Tambahan</span>
                    <span className="text-sm font-medium flex items-center gap-1"><BrainCircuit className="w-4 h-4 text-purple-500"/> Bank Soal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleActivity('quiz-uts')}
                    className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all ${
                      selectedActivities.includes('quiz-uts') ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
                    }`}
                  >
                    <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">Evaluasi</span>
                    <span className="text-sm font-medium flex items-center gap-1"><Target className="w-4 h-4 text-orange-500"/> Kuis Pra-UTS</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleActivity('quiz-uas')}
                    className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all ${
                      selectedActivities.includes('quiz-uas') ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
                    }`}
                  >
                    <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">Evaluasi</span>
                    <span className="text-sm font-medium flex items-center gap-1"><Target className="w-4 h-4 text-rose-500"/> Kuis Pra-UAS</span>
                  </button>
                  {(selectedCourse.flashcards && selectedCourse.flashcards.length > 0) || selectedCourse.flashcardCount ? (
                    <button
                      type="button"
                      onClick={() => toggleActivity('flashcard')}
                      className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all ${
                        selectedActivities.includes('flashcard') ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
                      }`}
                    >
                      <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">Review</span>
                      <span className="text-sm font-medium flex items-center gap-1"><BrainCircuit className="w-4 h-4 text-amber-500"/> Flashcards</span>
                    </button>
                  ) : null}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={!date || !time || !selectedCourse || selectedActivities.length === 0}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed text-white text-sm font-bold rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Simpan Jadwal
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </div>
  );
}
