import React, {useEffect, useState} from 'react';

import MathDrillsCard from './MathDrillsCard.jsx';

export default function News() {
	const data = "\\( \\overset{移項}{\\text{Transposition}} \\)";
	const [tex, setTex] =useState('')

	useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[tex])
	return (
		<main className="px-4 col">
			<div class="row align-items-center flex-nowrap h1 px-3">
				{data}
				<div class="row ms-3 flex-nowrap overflow-auto scroll-news">
					<MathDrillsCard
						title={'星期六補課'}
						textcolor={'warning'}
						bordercolor={'warning'}
						date={'2024 MAY 06'}
						content={"5月11日星期六補課時間：09:00-12:15。"}
					/>
					<MathDrillsCard
						title={'Chapter Test 8'}
						textcolor={'success'}
						bordercolor={'success'}
						date={'2024 MAY 05'}
						content={"第8課級測將於5月7日星期二補課時段進行。"}
					/>
					<MathDrillsCard 
						title={'試題專輯'}
						textcolor={''}
						bordercolor={'primary'}
						date={'2024 May 05'}
						content={"2023-2024年度中四第二次考試數學(必修部分)試題專輯現已發佈。"}
						imagepath={require('.//images/2324-S4T2-MATH-CP-QP-C_Cover.jpg')}
					/>
					<MathDrillsCard 
						title={'試題專輯'}
						textcolor={''}
						bordercolor={'primary'}
						date={'2024 May 05'}
						content={"2023-2024年度中四第一次考試數學(必修部分)試題專輯現已發佈。"}
						imagepath={require('.//images/2324-S4T1-MATH-CP-QP-C_Cover.jpg')}
					/>
				</div>
			</div>
			<hr/>
		</main>
	);
}/* \overset{Transposition}{移項} */