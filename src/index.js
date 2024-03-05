import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './jsx/App';

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);