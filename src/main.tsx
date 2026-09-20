import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';
import { Analytics } from '@vercel/analytics/react';
import { migrateLegacyCourseStorage } from './lib/legacyCourseCodes';

// Move data saved under a renamed course code to the current code before any component reads it.
try {
  migrateLegacyCourseStorage(window.localStorage);
} catch {
  /* storage blocked (private mode or policy): nothing to migrate */
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <Analytics />
    </AuthProvider>
  </React.StrictMode>
);
