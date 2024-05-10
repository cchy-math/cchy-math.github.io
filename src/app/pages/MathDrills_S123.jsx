import React, {useEffect, useState} from 'react';

import MathDrillsCard from './MathDrillsCard.jsx';

export default function MathDrills_S123() {
	const [tex, setTex] =useState('')

	useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[tex])
	return (
		<main className="px-4 col">
			<div class="row align-items-center flex h1 px-3">
				Expansion
				<div class="row flex-nowrap overflow-auto scroll-news">
					<MathDrillsCard
						content={"\\( x^m x^n \\)"}
					/>
					<MathDrillsCard
						content={"\\( (ax)^n \\)"}
					/>
					<MathDrillsCard
						content={"\\( a(x + y) \\)"}
					/>
					<MathDrillsCard
						content={"\\( x(x + y) \\)"}
					/>
					<MathDrillsCard
						content={"\\( ax(x + y) \\)"}
					/>
					<MathDrillsCard
						content={"\\( (x + y)(x + z) \\)"}
					/>
				</div>
			</div>
			<hr/>
			<div class="row align-items-center flex h1 px-3">
				Transposition
				<div class="row flex-nowrap overflow-auto scroll-news">
					<MathDrillsCard
						content={"\\( x + a = b \\)"}
					/>
					<MathDrillsCard
						content={"\\( ax = b \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\displaystyle \\frac{x}{a} = b \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\displaystyle \\frac{ax}{b} = c \\)"}
					/>
					<MathDrillsCard
						content={"\\( ax + b = c \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\displaystyle \\frac{ax + b}{c} = d \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\displaystyle \\frac{ax + b}{cx + d} = e \\)"}
					/>
				</div>
			</div>
			<hr/>
			<div class="row align-items-center flex h1 px-3">
				Identities (Expansion)
				<div class="row flex-nowrap overflow-auto scroll-news">
					<MathDrillsCard
						content={"\\( \\left( x + a \\right) \\left( x - a \\right) \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\left( x + y \\right) \\left( x - y \\right) \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\left( ax + by \\right) \\left( ax - by \\right) \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\left( x + a \\right)^2 \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\left( x - a \\right)^2 \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\left( ax + b \\right)^2 \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\left( ax - b \\right)^2 \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\left( x + y \\right)^2 \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\left( x - y \\right)^2 \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\left( ax + by \\right)^2 \\)"}
					/>
					<MathDrillsCard
						content={"\\( \\left( ax - by \\right)^2 \\)"}
					/>
				</div>
			</div>
			<hr/>
		</main>
	);
}/* \overset{Transposition}{移項} */