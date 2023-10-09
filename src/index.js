import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { ContextProvider } from "./contexts/ContextProvider";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
    <ContextProvider>
        <App />
    </ContextProvider>
    </React.StrictMode>
);
