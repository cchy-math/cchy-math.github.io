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
		<main className="px-4 col">
			<div class="row align-items-center flex-nowrap h1 px-3">
				4C
				<div class="row ms-3 flex-nowrap overflow-auto scroll-news">
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
						imagepath={require('/images/2324-S4T2-MATH-CP-QP-C_Cover.jpg')}
					/>
					<NewsCardWithImage 
						title={'試題專輯'}
						textcolor={''}
						bordercolor={'primary'}
						date={'2024 May 05'}
						content={"2023-2024年度中四第一次考試數學(必修部分)試題專輯現已發佈。"}
						imagepath={require('/images/2324-S4T1-MATH-CP-QP-C_Cover.jpg')}
					/>
				</div>
			</div>
			<hr/>
			<div class="row align-items-center flex-nowrap h1 px-3">
				3B
				<div class="row ms-3 flex-nowrap overflow-auto scroll-news">
					<NewsCard 
						title={'午間補㡳班'}
						textcolor={''}
						bordercolor={'primary'}
						date={'2024 May 08'}
						content={'午間補㡳班將於5月9日星期四進行，請同學於13:40到達702D室出席。'}
					/>
					<NewsCard 
						title={'TSA 補㡳'}
						textcolor={''}
						bordercolor={'primary'}
						date={'2024 May 05'}
						content={'TSA 補㡳將於5月6日星期一及5月7日星期二進行，同學請留意日期時間依時出席。'}
					/>
				</div>
			</div>
			<hr/>
			<div class="row align-items-center flex-nowrap h1 px-3">
				2D
				<div class="row ms-3 flex-nowrap overflow-auto scroll-news">
					<NewsCard 
						title={'午間補㡳班'}
						textcolor={''}
						bordercolor={'primary'}
						date={'2024 May 09'}
						content={'午間補㡳班將於5月10日星期五進行，請同學於13:40到達702D室出席。'}
					/>
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
						content={"請同學完成第12課功課並於5月6日星期一上課時繳交。"}
					/>
				</div>
			</div>
			<hr/>
			<div class="row align-items-center flex-nowrap h1 px-3">
				2A		
				<div class="row ms-3 flex-nowrap overflow-auto scroll-news">
					<NewsCard 
						title={'午間補㡳班'}
						textcolor={''}
						bordercolor={'primary'}
						date={'2024 May 09'}
						content={'午間補㡳班將於5月10日星期五進行，請同學於13:40到達702D室出席。'}
					/>
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
						content={"請同學完成第12課功課並於5月6日星期一上課時繳交。"}
					/>
				</div>
			</div>
		</main>
	);
}