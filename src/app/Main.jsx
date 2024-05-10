import React from 'react';
import { Routes, Route } from 'react-router-dom';

import News from './pages/News.jsx';
import Menu from './pages/Menu.jsx';
import MathDrills from './pages/MathDrills.jsx';

export default function Main() {
    return (
        <Routes basename="/page">
            <Route path="*" element={<News />} />
            <Route path="/page" element={<News />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/math-drills" element={<MathDrills />} />
        </Routes>
    );
}