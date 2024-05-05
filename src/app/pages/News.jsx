import React, {useEffect, useState} from 'react';

import NewsCardWithImage from './NewsCardWithImage.jsx';
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
		<main className="col">
			<div class="row">
				<h1 class="mt-3">4C</h1>
				<div class="row flex-nowrap overflow-auto">
					<NewsCard
						title={'星期六補課'}
						textcolor={'warning'}
						bordercolor={'warning'}
						date={'2024 MAY 06'}
						content={"5月11日星期六補課時間：09:00-12:15。"}
					/>
					<NewsCard
						title={'Chapter Test 8'}
						textcolor={'success'}
						bordercolor={'success'}
						date={'2024 MAY 05'}
						content={"第8課級測將於5月7日星期二補課時段進行。"}
					/>
					<NewsCardWithImage 
						title={'試題專輯'}
						textcolor={''}
						bordercolor={'primary'}
						date={'2024 May 05'}
						content={"2023-2024年度中四第二次考試數學(必修部分)試題專輯現已發佈。"}
						imagepath={require('./images/2324-S4T2-MATH-CP-QP-C Cover.jpg')}
					/>
					<NewsCardWithImage 
						title={'試題專輯'}
						textcolor={''}
						bordercolor={'primary'}
						date={'2024 May 05'}
						content={"2023-2024年度中四第一次考試數學(必修部分)試題專輯現已發佈。"}
						imagepath={require('./images/2324-S4T1-MATH-CP-QP-C Cover.jpg')}
					/>
				</div>
			</div>
			<hr/>
			<div class="row">
				<h1 class="mt-3">3B</h1>
				<div class="row flex-nowrap overflow-auto">
					<NewsCard 
						title={'TSA 補㡳'}
						textcolor={''}
						bordercolor={'primary'}
						date={'2024 May 05'}
						content={'TSA 補㡳將於星期一及星期二進行，同學請留意日期時間依時出席。'}
					/>
				</div>
			</div>
			<hr/>
			<div class="row">
				<h1 class="mt-3">2D</h1>
				<div class="row flex-nowrap overflow-auto">
					<NewsCard
						title={'Chapter Test 12'}
						textcolor={'success'}
						bordercolor={'success'}
						date={'2024 May 05'}
						content={"第12課級測將於5月7日星期二進行。"}
					/>
					<NewsCard
						title={'Chapter Assignment 12'}
						textcolor={'info'}
						bordercolor={'info'}
						date={'2024 May 05'}
						content={"請同學完成第12課功課並於星期一上課時繳交。"}
					/>
				</div>
			</div>
			<hr/>
			<div class="row">
			<h1 class="mt-3">2A</h1>		
				<div class="row flex-nowrap overflow-auto">
					<NewsCard
						title={'Chapter Test 12'}
						textcolor={'success'}
						bordercolor={'success'}
						date={'2024 May 05'}
						content={"第12課級測將於5月7日星期二進行。"}
					/>
					<NewsCard
						title={'Chapter Assignment 12'}
						textcolor={'info'}
						bordercolor={'info'}
						date={'2024 May 05'}
						content={"請同學完成第12課功課並於星期一上課時繳交。"}
					/>
				</div>
			</div>
		</main>
	);
}