import { useState } from 'react';
import { FileText, FileImage, Download } from 'lucide-react';
import type { ArsipFile } from '../data/arsipRegistry';

export default function ArsipViewerTab({ files }: { files: ArsipFile[] }) {
  const [selectedFile, setSelectedFile] = useState<ArsipFile | null>(files[0] ?? null);

  if (files.length === 0) {
    return (
      <div className="py-12 text-center text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50">
        Belum ada arsip bocoran UAS untuk mata kuliah ini.
      </div>
    );
  }

  const renderViewer = () => {
    if (!selectedFile) return null;

    if (selectedFile.type === 'pdf') {
      return (
        <div className="flex flex-col h-[600px] border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700 overflow-hidden">
           <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 text-sm text-yellow-800 dark:text-yellow-200 border-b border-yellow-200 dark:border-yellow-800">
              <span className="font-semibold">⚠️ Info HP/Mode Aplikasi:</span> Browser HP seringkali memblokir tampilan PDF langsung. Jika kotak di bawah ini kosong/putih, silakan klik tombol <b className="text-blue-600">Unduh File</b> di kanan atas untuk membukanya.
           </div>
           <iframe
             src={selectedFile.url}
             className="w-full flex-1 border-0 bg-white"
             title={selectedFile.name}
           />
        </div>
      );
    } else {
      // DOCX, PPTX, XLSX viewer using Office web viewer
      const hostUrl = typeof window !== 'undefined' ? window.location.origin : '';
      const fullUrl = encodeURIComponent(`${hostUrl}${selectedFile.url}`);
      const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${fullUrl}`;
      
      return (
        <div className="flex flex-col h-[600px] border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700 overflow-hidden">
           <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 text-sm text-yellow-800 dark:text-yellow-200 border-b border-yellow-200 dark:border-yellow-800 flex justify-between items-center">
              <span>⚠️ Viewer untuk DOCX/PPTX/XLSX mungkin gagal memuat jika diakses di localhost. Jika layar kosong, silakan klik tombol Download.</span>
           </div>
           <iframe
            src={officeViewerUrl}
            className="w-full flex-1 border-0 bg-white"
            title={selectedFile.name}
          />
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar List */}
      <div className="w-full md:w-1/3 shrink-0">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Daftar File Arsip</h3>
        <div className="flex flex-col gap-2 max-h-[600px] overflow-y-auto pr-1">
          {files.map((file) => (
            <button
              key={file.name}
              onClick={() => setSelectedFile(file)}
              className={`flex items-start gap-3 p-3 rounded-lg border text-left transition-colors ${
                selectedFile?.name === file.name
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-blue-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-500'
              }`}
            >
              {file.type === 'pdf' ? (
                <FileText className={`shrink-0 mt-0.5 ${selectedFile?.name === file.name ? 'text-blue-600 dark:text-blue-400' : 'text-red-500'}`} size={20} />
              ) : (
                <FileImage className={`shrink-0 mt-0.5 ${selectedFile?.name === file.name ? 'text-blue-600 dark:text-blue-400' : 'text-green-500'}`} size={20} />
              )}
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium leading-tight ${selectedFile?.name === file.name ? 'text-blue-900 dark:text-blue-100' : 'text-gray-900 dark:text-gray-100'}`}>
                  {file.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase mt-1">{file.type}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Viewer Area */}
      <div className="flex-1 flex flex-col min-w-0">
         <div className="flex items-center justify-between mb-3 gap-4">
             <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider truncate">
                Preview: {selectedFile?.name}
             </h3>
             <a 
                href={selectedFile?.url} 
                download 
                className="shrink-0 flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg shadow-sm"
             >
                <Download size={16} /> Unduh File
             </a>
         </div>
         {renderViewer()}
      </div>
    </div>
  );
}
