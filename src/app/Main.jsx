import React from 'react';
import { Routes, Route } from 'react-router-dom';

import News from './pages/News.jsx';
import Menu from './pages/Menu.jsx';
import MathDrills_S123 from './pages/MathDrills_S123.jsx';
import MathDrills_DSEMathCore from './pages/MathDrills_DSEMathCore.jsx';
import AnglePmTheta from './pages/dse-drills/angle-pm-theta.jsx';
import ThetaPmAngle from './pages/dse-drills/theta-pm-angle.jsx';
import NegativeAngle from './pages/dse-drills/negative-angle.jsx';

export default function Main() {
    return (
        <Routes basename="/page">
            <Route path="*" element={<News />} />
            <Route path="/page" element={<News />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/math-drills-S123" element={<MathDrills_S123 />} />
            <Route path="/math-drills-DSEMathCore" element={<MathDrills_DSEMathCore />} />
            <Route path="/math-drills-DSEMathCore/angle-pm-theta" element={<AnglePmTheta />} />
            <Route path="/math-drills-DSEMathCore/theta-pm-angle" element={<ThetaPmAngle />} />
            <Route path="/math-drills-DSEMathCore/negative-angle" element={<NegativeAngle />} />
        </Routes>
    );
}