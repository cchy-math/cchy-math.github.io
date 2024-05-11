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
		<main className="px-4 py-3 col">
			<div class="row align-items-center flex h2 px-3">
				ASTC (Compulsory Part)
				<div class="row flex-nowrap overflow-auto scroll-news">
					<NavLink to="/math-drills-DSEMathCore/angle-pm-theta" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\begin{smallmatrix} 90^{\\circ} & 180^{\\circ} \\\\ 270^{\\circ} & 360^{\\circ}  \\end{smallmatrix} \\pm \\theta \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/theta-pm-angle" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\theta \\pm \\begin{smallmatrix} 90^{\\circ} & 180^{\\circ} \\\\ 270^{\\circ} & 360^{\\circ}  \\end{smallmatrix} \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/negative-angle" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} ( - \\theta ) \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/astc-sign" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} \\left( \\theta \\pm \\begin{smallmatrix} 90^{\\circ} & 180^{\\circ} \\\\ 270^{\\circ} & 360^{\\circ}  \\end{smallmatrix} \\right) \\begin{smallmatrix} >0 \\\\ <0  \\end{smallmatrix} \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/astc-180-360" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} \\left( \\begin{smallmatrix} 180^{\\circ} \\\\ 360^{\\circ}  \\end{smallmatrix} \\pm \\theta \\right) \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/astc-90-270" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} \\left( \\begin{smallmatrix} 90^{\\circ} \\\\ 270^{\\circ} \\end{smallmatrix} \\pm \\theta \\right) \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-DSEMathCore/astc" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} \\left( \\begin{smallmatrix} 90^{\\circ} & 180^{\\circ} \\\\ 270^{\\circ} & 360^{\\circ}  \\end{smallmatrix} \\pm \\theta \\right) \\)"}
						/>
					</NavLink>
				</div>
			</div>
			<hr/>
			<div class="row align-items-center flex h2 px-3">
				ASTC (M2)
				<div class="row flex-nowrap overflow-auto scroll-news">
					<MathDrillsCard
						content={"\\( \\displaystyle \\frac{\\pi}{2} \\pm \\theta \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\theta \\pm \\displaystyle \\frac{\\pi}{2} \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\csc ( - \\theta ) \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\sec \\left( \\displaystyle \\frac{\\pi}{2} \\pm \\theta \\right) \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\cot \\left( \\displaystyle \\frac{\\pi}{2} \\pm \\theta \\right) \\)"}
					/>
				</div>
			</div>
			<hr/>
		</main>
	);
}