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
import XpmAeqB from './pages/S123-drills/algebraic-equations/x-pm-a-eq-b.jsx';
import ApmXeqB from './pages/S123-drills/algebraic-equations/a-pm-x-eq-b.jsx';
import AXeqB from './pages/S123-drills/algebraic-equations/ax-eq-b.jsx';
import XoverAeqB from './pages/S123-drills/algebraic-equations/x-over-a-eq-b.jsx';
import AXoverBeqC from './pages/S123-drills/algebraic-equations/ax-over-b-eq-c.jsx';
import AXpmBeqC from './pages/S123-drills/algebraic-equations/ax-pm-b-eq-c.jsx';
import AsinxeqB from './pages/dse-drills/Trigo/Equations/asinx-eq-b.jsx';
import AcosxeqB from './pages/dse-drills/Trigo/Equations/acosx-eq-b.jsx';
import AtanxeqB from './pages/dse-drills/Trigo/Equations/atanx-eq-b.jsx';
import TrigoQuadratic from './pages/dse-drills/Trigo/Equations/trigo-quadratic.jsx';
import XpmA2 from './pages/S123-drills/Identities(Expand)/x-pm-a-2.jsx';
import AXpmB2 from './pages/S123-drills/Identities(Expand)/ax-pm-b-2.jsx';
import AXpmBY2 from './pages/S123-drills/Identities(Expand)/ax-pm-by-2.jsx';

export default function Main() {
    return (
        <Routes basename="/">
            <Route path="*" element={<News />} />
            <Route path="/" element={<News />} />
            <Route path="menu" element={<Menu />} />
            <Route path="math-drills-DSEMathCore">
                <Route path="" element={<MathDrills_DSEMathCore />} />
                <Route path="Trigo">
                    <Route path="ASTC">
                        <Route path="angle-pm-theta" element={<AnglePmTheta />} />
                        <Route path="theta-pm-angle" element={<ThetaPmAngle />} />
                        <Route path="negative-angle" element={<NegativeAngle />} />
                        <Route path="astc-sign" element={<ASTCsign />} />
                        <Route path="astc-180-360" element={<ASTC180360 />} />
                        <Route path="astc-90-270" element={<ASTC90270 />} />
                        <Route path="astc" element={<ASTC />} />
                    </Route>
                    <Route path="Range">
                        <Route path="acosx" element={<Acosx />} />
                        <Route path="acosx-pm-b" element={<AcosxpmB />} />
                        <Route path="b-pm-acosx" element={<BpmAcosx />} />
                        <Route path="b-pm-acos2x" element={<BpmAcos2x />} />
                        <Route path="c-over-b-pm-acos2x" element={<CoverBpmAcos2x />} />
                        <Route path="range-all-type" element={<RangeAllType />} />
                    </Route>
                    <Route path="Equations">
                        <Route path="asinx-eq-b" element={<AsinxeqB />} />
                        <Route path="acosx-eq-b" element={<AcosxeqB />} />
                        <Route path="atanx-eq-b" element={<AtanxeqB />} />
                        <Route path="trigo-quadratic" element={<TrigoQuadratic />} />
                    </Route>
                </Route>
            </Route>
            <Route path="math-drills-S123">
                <Route path="" element={<MathDrills_S123 />} />
                <Route path="algebraic-equations">
                    <Route path="x-pm-a-eq-b" element={<XpmAeqB />} />
                    <Route path="a-pm-x-eq-b" element={<ApmXeqB />} />
                    <Route path="ax-eq-b" element={<AXeqB />} />
                    <Route path="x-over-a-eq-b" element={<XoverAeqB />} />
                    <Route path="ax-over-b-eq-c" element={<AXoverBeqC />} />
                    <Route path="ax-pm-b-eq-c" element={<AXpmBeqC />} />
                </Route>
                <Route path="identites-expand">
                    <Route path="x-pm-a-2" element={<XpmA2 />} />
                    <Route path="ax-pm-b-2" element={<AXpmB2 />} />
                    <Route path="ax-pm-by-2" element={<AXpmBY2 />} />
                </Route>
            </Route>
        </Routes>
    );
}