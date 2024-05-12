import React from 'react';
import { Routes, Route } from 'react-router-dom';

import News from './pages/News.jsx';
import Menu from './pages/Menu.jsx';
import MathDrills_S123 from './pages/MathDrills_S123.jsx';
import MathDrills_DSEMathCore from './pages/MathDrills_DSEMathCore.jsx';
import AnglePmTheta from './pages/dse-drills/angle-pm-theta.jsx';
import ThetaPmAngle from './pages/dse-drills/theta-pm-angle.jsx';
import NegativeAngle from './pages/dse-drills/negative-angle.jsx';
import ASTCsign from './pages/dse-drills/astc-sign.jsx';
import ASTC180360 from './pages/dse-drills/astc-180-360.jsx';
import ASTC90270 from './pages/dse-drills/astc-90-270.jsx';
import ASTC from './pages/dse-drills/astc.jsx';

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
            <Route path="/math-drills-DSEMathCore/astc-sign" element={<ASTCsign />} />
            <Route path="/math-drills-DSEMathCore/astc-180-360" element={<ASTC180360 />} />
            <Route path="/math-drills-DSEMathCore/astc-90-270" element={<ASTC90270 />} />
            <Route path="/math-drills-DSEMathCore/astc" element={<ASTC />} />
        </Routes>
    );
}