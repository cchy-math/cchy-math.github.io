import React, {useEffect, useState} from 'react';
import { Link, NavLink, HeaderLink, Routes, Route } from 'react-router-dom';

import MathDrillsCard from './MathDrillsCard.jsx';

export default function MathDrills_DSEMathCore() {
	const [tex, setTex] =useState('')

	useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[tex])
	return (
		<main className="px-4 py-3 col h3">
			<div className="row align-items-center flex px-3">
				{"\\( \\text{ASTC} \\)"}
				<div className="row flex-nowrap overflow-auto scroll-news">
					<NavLink to="/math-drills-DSEMathCore/Trigo/ASTC/angle-pm-theta" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\begin{smallmatrix} 90^{\\circ} & 180^{\\circ} \\\\ 270^{\\circ} & 360^{\\circ}  \\end{smallmatrix} \\pm \\theta \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/ASTC/theta-pm-angle" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\theta \\pm \\begin{smallmatrix} 90^{\\circ} & 180^{\\circ} \\\\ 270^{\\circ} & 360^{\\circ}  \\end{smallmatrix} \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/ASTC/negative-angle" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} ( - \\theta ) \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/ASTC/astc-sign" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} \\left( \\theta \\pm \\begin{smallmatrix} 90^{\\circ} & 180^{\\circ} \\\\ 270^{\\circ} & 360^{\\circ}  \\end{smallmatrix} \\right) \\begin{smallmatrix} >0 \\\\ <0  \\end{smallmatrix} \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/ASTC/astc-180-360" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} \\left( \\begin{smallmatrix} 180^{\\circ} \\\\ 360^{\\circ}  \\end{smallmatrix} \\pm \\theta \\right) \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/ASTC/astc-90-270" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} \\left( \\begin{smallmatrix} 90^{\\circ} \\\\ 270^{\\circ} \\end{smallmatrix} \\pm \\theta \\right) \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/ASTC/astc" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} \\left( \\theta \\pm \\begin{smallmatrix} 90^{\\circ} & 180^{\\circ} \\\\ 270^{\\circ} & 360^{\\circ}  \\end{smallmatrix} \\right) \\)"}
						/>
					</NavLink>
				</div>
			</div>
			<hr/>
			<div className="row align-items-center flex px-3">
				{"\\( \\text{Min} \\leq f(\\theta) \\leq \\text{Max} \\)"}
				<div className="row flex-nowrap overflow-auto scroll-news">
					<NavLink to="/math-drills-DSEMathCore/Trigo/Range/acosx" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( A\\cos(\\theta) \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Range/acosx-pm-b" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( A\\cos(\\theta) \\pm B \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Range/b-pm-acosx" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( B \\pm A\\cos(\\theta) \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Range/b-pm-acos2x" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( B \\pm A\\cos^2(\\theta) \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Range/c-over-b-pm-acos2x" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\displaystyle \\frac{C}{B \\pm A\\cos^2(\\theta)} \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Range/range-all-type" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\displaystyle \\pm \\frac{C}{B \\pm A\\cos^2(\\theta)} \\)"}
						/>
					</NavLink>
				</div>
			</div>
			<hr/>
			<div className="row align-items-center flex px-3">
				{"\\( \\text{Trigonometric Equations} \\)"}
				<div className="row flex-nowrap overflow-auto scroll-news">
					<NavLink to="/math-drills-DSEMathCore/Trigo/Equations/asinx-eq-b" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( A\\sin(\\theta) = B \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Equations/acosx-eq-b" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( A\\cos(\\theta) = B \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Equations/atanx-eq-b" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( A\\tan(\\theta) = B \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Equations/all-tranformation" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( A\\cos(B \\theta + C) = D \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Equations/trigo-square" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\cos^2(\\theta) = K \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Equations/trigo-quadratic" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( Af(\\theta)^2 + Bf(\\theta) + C \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Equations/trigo-quadratic-advance" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( 1 - \\sin^2(\\theta) = \\cos^2(\\theta) \\)"}
						/>
					</NavLink>
				</div>
			</div>
			<hr/>
		</main>
	);
}