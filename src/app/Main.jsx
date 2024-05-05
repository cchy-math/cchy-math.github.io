import React from 'react';
import { Routes, Route } from 'react-router-dom';

import News from './pages/News.jsx';
import Menu from './pages/Menu.jsx';
import YouTubeFrame from './pages/YouTubeFrame.jsx';

export default function Main() {
    return (
        <Routes basename="/">
            <Route path="*" element={<News />} />
            <Route path="/news" element={<News />} />
            <Route path="/menu" element={<Menu />} />
        </Routes>
    );
}