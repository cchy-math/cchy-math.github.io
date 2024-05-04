import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './components/bootstrap-theme.css'

import App from './App.jsx';

// The root of our React instance.

const root = createRoot(document.getElementById('root'));

root.render(<App />);