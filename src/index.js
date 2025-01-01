import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18+
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Corrected render method for React 18+
root.render(<App />);