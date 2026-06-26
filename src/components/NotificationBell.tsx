import { useState, useRef, useEffect } from 'react';
import { Bell, Calendar, MessageSquare, Info, CheckCircle2, Trash2 } from 'lucide-react';
import { useNotification, AppNotification } from '../contexts/NotificationContext';

export default function NotificationBell() {
  const { notifications, unreadCount, markAsRead, markAllAsRead, clearAll } = useNotification();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getIcon = (type: string, isRead: boolean) => {
    const color = isRead ? 'text-gray-400 dark:text-gray-500' : 'text-blue-500 dark:text-blue-400';
    switch (type) {
      case 'schedule':
        return <Calendar className={`w-5 h-5 ${color}`} />;
      case 'chat':
        return <MessageSquare className={`w-5 h-5 ${color}`} />;
      case 'system':
      default:
        return <Info className={`w-5 h-5 ${color}`} />;
    }
  };

  const handleNotificationClick = (notif: AppNotification) => {
    if (!notif.isRead) {
      markAsRead(notif.id);
    }
    if (notif.link) {
      window.location.href = notif.link; // or use router history.push
    }
  };

  const timeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + 'h yang lalu'; // hari
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + 'j yang lalu'; // jam
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + 'm yang lalu'; // menit
    return Math.floor(seconds) + 'd yang lalu'; // detik
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition"
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border border-white dark:border-gray-900" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden z-[100] transform transition-all">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
            <h3 className="font-bold text-gray-900 dark:text-white">Notifikasi</h3>
            <div className="flex gap-2">
              <button
                onClick={markAllAsRead}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition flex items-center gap-1"
                title="Tandai semua dibaca"
              >
                <CheckCircle2 size={14} />
              </button>
              <button
                onClick={clearAll}
                className="text-xs font-semibold text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition flex items-center gap-1"
                title="Hapus semua"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
          
          <div className="max-h-[60vh] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
                Belum ada notifikasi baru.
              </div>
            ) : (
              <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                {notifications.map((notif) => (
                  <li
                    key={notif.id}
                    onClick={() => handleNotificationClick(notif)}
                    className={`p-4 cursor-pointer transition ${
                      notif.isRead
                        ? 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                        : 'bg-blue-50/40 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {getIcon(notif.type, notif.isRead)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <p className={`text-sm font-semibold truncate pr-2 ${notif.isRead ? 'text-gray-700 dark:text-gray-300' : 'text-gray-900 dark:text-white'}`}>
                            {notif.title}
                          </p>
                          <span className="text-[10px] text-gray-400 dark:text-gray-500 flex-shrink-0 whitespace-nowrap">
                            {timeAgo(notif.timestamp)}
                          </span>
                        </div>
                        <p className={`text-xs line-clamp-2 ${notif.isRead ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'}`}>
                          {notif.message}
                        </p>
                      </div>
                      {!notif.isRead && (
                        <div className="flex-shrink-0 self-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="p-2 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900 text-center">
            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Pusat Notifikasi</span>
          </div>
        </div>
      )}
    </div>
  );
}
