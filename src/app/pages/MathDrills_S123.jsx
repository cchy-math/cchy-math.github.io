import React, {useEffect, useState} from 'react';
import { Link, NavLink, HeaderLink, Routes, Route } from 'react-router-dom';

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
			<div className="row align-items-center flex h1 px-3">
				Transposition
				<div className="row flex-nowrap overflow-auto scroll-news">
					<NavLink to="/math-drills-S123/algebraic-equations/x-pm-a-eq-b" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( x \\pm a = b \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-S123/algebraic-equations/a-pm-x-eq-b" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( a \\pm x = b \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-S123/algebraic-equations/ax-eq-b" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( ax = b \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-S123/algebraic-equations/x-over-a-eq-b" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\displaystyle \\frac{x}{a} = b \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-S123/algebraic-equations/ax-over-b-eq-c" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\displaystyle \\frac{ax}{b} = c \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-S123/algebraic-equations/ax-pm-b-eq-c" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( ax \\pm b = c \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-S123/algebraic-equations/ax-pm-b-over-c-eq-d" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( \\displaystyle \\frac{ax \\pm b}{c} = d \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-S123/algebraic-equations/ax-pm-b-over-cx-pm-d-eq-e" style={{width: 300 }}>
						<MathDrillsCard
						content={"\\( \\displaystyle \\frac{ax \\pm b}{cx \\pm d} = e \\)"}
						/>
					</NavLink>
				</div>
			</div>
			<hr/>
			<div className="row align-items-center flex h1 px-3">
				Identites (Expand)
				<div className="row flex-nowrap overflow-auto scroll-news">
					<NavLink to="/math-drills-S123/identites-expand/x-pm-a-2" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( (x \\pm a)^2 \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-S123/identites-expand/ax-pm-b-2" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( (ax \\pm b)^2 \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-S123/identites-expand/ax-pm-by-2" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( (ax \\pm by)^2 \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-S123/identites-expand/xa-xb" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( (x + a)(x + b) \\)"}
						/>
					</NavLink>
					<NavLink to="/math-drills-S123/identites-expand/xpma-xpmb" style={{width: 300 }}>
						<MathDrillsCard
							content={"\\( (x \\pm a)(x \\pm b) \\)"}
						/>
					</NavLink>
				</div>
			</div>
			<hr/>
		</main>
	);
}