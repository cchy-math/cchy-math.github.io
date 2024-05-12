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
			<div class="row align-items-center flex px-3">
				ASTC
				<div class="row flex-nowrap overflow-auto scroll-news">
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
			<div class="row align-items-center flex px-3">
				{"\\( \\text{Min} \\leq f(\\theta) \\leq \\text{Max} \\)"}
				<div class="row flex-nowrap overflow-auto scroll-news">
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
					<NavLink to="/math-drills-DSEMathCore/Trigo/Range/" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( B \\pm A\\cos(\\theta) \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Range/" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( B \\pm A\\cos^2(\\theta) \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Range/" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\displaystyle \\frac{1}{B \\pm A\\cos^2(\\theta)} \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/Trigo/Range/" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\displaystyle \\pm \\frac{C}{B \\pm A\\cos^2(\\theta)} \\)"}
						/>
					</NavLink>
				</div>
			</div>
			<hr/>
		</main>
	);
}