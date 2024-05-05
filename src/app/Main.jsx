import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Bookmarks from './pages/Bookmarks.jsx';
import ClockDisplay from './pages/ClockDisplay.jsx';
import YouTubeFrame from './pages/YouTubeFrame.jsx';

export default function Main() {
    return (
        <Routes basename="/">
            <Route path="*" element={<Bookmarks />} />
            <Route path="/" element={<Bookmarks />} />
            <Route path="/clockdisplay/*" element={<ClockDisplay />} />
        </Routes>
    );
}