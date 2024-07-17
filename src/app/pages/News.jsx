import React, {useEffect, useState} from 'react';

import NewsCard from './NewsCard.jsx';

export default function News() {
	const [tex, setTex] =useState('')
	useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[tex])
	return (
		<main className="ps-4 pt-3 col">
			<div className="row align-items-center flex-nowrap h2 ps-3">
				5C MATH
				<div className="row ms-3 flex-nowrap overflow-auto scroll-news">
					<NewsCard
						title={'暑期功課'}
						color={'info'}
						date={'2024 Jul 17'}
						content={"暑期功課請於8月14日上課時繳交。"}
					/>
					<NewsCard
						title={'暑期補課'}
						color={'warning'}
						date={'2024 Jul 17'}
						content={"暑期補課：8月14、15、17及24日 09:00"}
					/>
					{/*<NewsCard
						title={'Chapter Test 13'}
						color={'success'}
						date={'2024 May 20'}
						content={"第13課級測將於5月28日星期二進行。"}
					/>*/}
					{/*<NewsCard 
						title={'試題專輯'}
						color={'secondary'}
						date={'2024 May 05'}
						content={"2023-2024年度中四第一次考試數學(必修部分)試題專輯現已發佈。"}
						imagepath={require('.//images/2324-S4T1-MATH-CP-QP-C_Cover.jpg')}
					/>*/}
				</div>
			</div>
			<hr/>
			<div className="row align-items-center flex-nowrap h2 ps-3">
				4B MATH
				<div className="row ms-3 flex-nowrap overflow-auto scroll-news">
					<NewsCard
						title={'暑期功課'}
						color={'info'}
						date={'2024 Jul 17'}
						content={"暑期功課請於8月28日上課時繳交。"}
					/>
					<NewsCard
						title={'中四數學銜接'}
						color={'warning'}
						date={'2024 Jul 17'}
						content={"中四數學銜接：8月28、29及30日 09:15 - 10:45"}
					/>
					{/*<NewsCard
						title={'Chapter Test 13'}
						color={'success'}
						date={'2024 May 20'}
						content={"第13課級測將於5月28日星期二進行。"}
					/>*/}
				</div>
			</div>
			<hr/>
			<div className="row align-items-center flex-nowrap h2 ps-3">
				2D MATH
				<div className="row ms-3 flex-nowrap overflow-auto scroll-news">
					{/*<NewsCard
						title={'Chapter Test 13'}
						color={'success'}
						date={'2024 May 20'}
						content={"第13課級測將於5月28日星期二進行。"}
					/>*/}
				</div>
			</div>
			<hr/>
			<div className="row align-items-center flex-nowrap h2 ps-3">
				2D CL		
				<div className="row ms-3 flex-nowrap overflow-auto scroll-news">
					{/*<NewsCard
						title={'Chapter Test 13'}
						color={'success'}
						date={'2024 May 20'}
						content={"第13課級測將於5月28日星期二進行。"}
					/>*/}
				</div>
			</div>
		</main>
	);
}