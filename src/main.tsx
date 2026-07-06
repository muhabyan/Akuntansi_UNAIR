import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/ux-v2.css';
import './styles/ux-v2-catalog.css';
import './styles/landing-semester-experience.css';
import './styles/uiux-final-completion.css';
import { AuthProvider } from './contexts/AuthContext';
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <Analytics />
    </AuthProvider>
  </React.StrictMode>
);
