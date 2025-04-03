import React from 'react';
import { createRoot } from 'react-dom/client'; // <-- новый API
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <BrowserRouter basename="/visaland-ru">
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}
