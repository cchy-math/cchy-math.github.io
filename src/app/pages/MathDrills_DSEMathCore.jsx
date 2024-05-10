import React, {useEffect, useState} from 'react';

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
			<div class="row align-items-center flex h1 px-3">
				ASTC (Compulsory Part)
				<div class="row flex-nowrap overflow-auto scroll-news">
					<MathDrillsCard
						content={"\\( \\begin{smallmatrix} 90^{\\circ} & 180^{\\circ} \\\\ 270^{\\circ} & 360^{\\circ}  \\end{smallmatrix} \\pm \\theta \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\theta \\pm \\begin{smallmatrix} 90^{\\circ} & 180^{\\circ} \\\\ 270^{\\circ} & 360^{\\circ}  \\end{smallmatrix} \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} ( - \\theta ) \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} \\left( \\begin{smallmatrix} 180^{\\circ} \\\\ 360^{\\circ}  \\end{smallmatrix} \\pm \\theta \\right) \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} \\left( \\begin{smallmatrix} 90^{\\circ} \\\\ 270^{\\circ} \\end{smallmatrix} \\pm \\theta \\right) \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\begin{smallmatrix} \\sin \\\\ \\cos \\\\ \\tan \\end{smallmatrix} \\left( \\begin{smallmatrix} 90^{\\circ} & 180^{\\circ} \\\\ 270^{\\circ} & 360^{\\circ}  \\end{smallmatrix} \\pm \\theta \\right) \\)"}
					/>
				</div>
			</div>
			<hr/>
			<div class="row align-items-center flex h1 px-3">
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
}/* \overset{Transposition}{移項} */