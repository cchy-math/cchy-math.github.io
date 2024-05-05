import React from 'react';
import { Routes, Route } from 'react-router-dom';

import News from './pages/News.jsx';
import Menu from './pages/Menu.jsx';

export default function Main() {
    return (
        <Routes basename="/math">
            <Route path="*" element={<News />} />
            <Route path="/math" element={<News />} />
            <Route path="/menu" element={<Menu />} />
        </Routes>
    );
}