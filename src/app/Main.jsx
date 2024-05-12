import React from 'react';
import { Routes, Route } from 'react-router-dom';

import News from './pages/News.jsx';
import Menu from './pages/Menu.jsx';
import MathDrills_S123 from './pages/MathDrills_S123.jsx';
import MathDrills_DSEMathCore from './pages/MathDrills_DSEMathCore.jsx';
import AnglePmTheta from './pages/dse-drills/Trigo/ASTC/angle-pm-theta.jsx';
import ThetaPmAngle from './pages/dse-drills/Trigo/ASTC/theta-pm-angle.jsx';
import NegativeAngle from './pages/dse-drills/Trigo/ASTC/negative-angle.jsx';
import ASTCsign from './pages/dse-drills/Trigo/ASTC/astc-sign.jsx';
import ASTC180360 from './pages/dse-drills/Trigo/ASTC/astc-180-360.jsx';
import ASTC90270 from './pages/dse-drills/Trigo/ASTC/astc-90-270.jsx';
import ASTC from './pages/dse-drills/Trigo/ASTC/astc.jsx';
import Acosx from './pages/dse-drills/Trigo/Range/acosx.jsx';
import AcosxpmB from './pages/dse-drills/Trigo/Range/acosx-pm-b.jsx';
import BpmAcosx from './pages/dse-drills/Trigo/Range/b-pm-acosx.jsx';
import BpmAcos2x from './pages/dse-drills/Trigo/Range/b-pm-acos2x.jsx';
import CoverBpmAcos2x from './pages/dse-drills/Trigo/Range/c-over-b-pm-acos2x.jsx';
import RangeAllType from './pages/dse-drills/Trigo/Range/range-all-type.jsx';

export default function Main() {
    return (
        <Routes basename="/">
            <Route path="*" element={<News />} />
            <Route path="/" element={<News />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/math-drills-S123" element={<MathDrills_S123 />} />
            <Route path="/math-drills-DSEMathCore" element={<MathDrills_DSEMathCore />} />
            <Route path="/math-drills-DSEMathCore/Trigo/ASTC/angle-pm-theta" element={<AnglePmTheta />} />
            <Route path="/math-drills-DSEMathCore/Trigo/ASTC/theta-pm-angle" element={<ThetaPmAngle />} />
            <Route path="/math-drills-DSEMathCore/Trigo/ASTC/negative-angle" element={<NegativeAngle />} />
            <Route path="/math-drills-DSEMathCore/Trigo/ASTC/astc-sign" element={<ASTCsign />} />
            <Route path="/math-drills-DSEMathCore/Trigo/ASTC/astc-180-360" element={<ASTC180360 />} />
            <Route path="/math-drills-DSEMathCore/Trigo/ASTC/astc-90-270" element={<ASTC90270 />} />
            <Route path="/math-drills-DSEMathCore/Trigo/ASTC/astc" element={<ASTC />} />
            <Route path="/math-drills-DSEMathCore/Trigo/Range/acosx" element={<Acosx />} />
            <Route path="/math-drills-DSEMathCore/Trigo/Range/acosx-pm-b" element={<AcosxpmB />} />
            <Route path="/math-drills-DSEMathCore/Trigo/Range/b-pm-acosx" element={<BpmAcosx />} />
            <Route path="/math-drills-DSEMathCore/Trigo/Range/b-pm-acos2x" element={<BpmAcos2x />} />
            <Route path="/math-drills-DSEMathCore/Trigo/Range/c-over-b-pm-acos2x" element={<CoverBpmAcos2x />} />
            <Route path="/math-drills-DSEMathCore/Trigo/Range/range-all-type" element={<RangeAllType />} />
        </Routes>
    );
}