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
		<main className="container mt-3">
			<div class="row py-1">
				<div class="col my-auto">
					<h4 class="text-end">4C</h4>
				</div>
				<div class="col-11">
					<div class="row flex-nowrap overflow-auto">
						<NewsCardWithImage 
							title={'試題專輯'}
							textcolor={''}
							bordercolor={'primary'}
							date={'2024 MAY 12'}
							content={'2023-2024年度 中四第一次考試 數學(必修部分) 試題專輯 現已發佈'}
							imagepath={require('./images/2324-S4T1-MATH-CP-QP-C Cover.jpg')}
						/>
					</div>
				</div>
			</div>
			<div class="row py-1">
				<div class="col-1 my-auto">
					<h4 class="text-end">3B</h4>
				</div>
				<div class="col-11">
					<div class="row flex-nowrap overflow-auto">
						<NewsCard 
							title={'Featured post'}
							textcolor={''}
							bordercolor={'black'}
							date={'Nov 12'}
							content={'This is a wider card with supporting text below as a natural lead-in to additional content.'}
						/>
					</div>
				</div>
			</div>
			<div class="row py-1">
				<div class="col-1 my-auto">
					<h4 class="text-end">2D</h4>
				</div>
				<div class="col-11">
					<div class="row flex-nowrap overflow-auto">
						<NewsCard 
							title={'Featured post'}
							textcolor={''}
							bordercolor={'black'}
							date={'Nov 12'}
							content={'This is a wider card with supporting text below as a natural lead-in to additional content.'}
						/>
					</div>
				</div>
			</div>
			<div class="row py-1">
				<div class="col-1 my-auto">
					<h4 class="text-end">2A</h4>
				</div>
				<div class="col-11">
					<div class="row flex-nowrap overflow-auto">
						<NewsCard 
							title={'Featured post'}
							textcolor={''}
							bordercolor={'black'}
							date={'Nov 12'}
							content={'This is a wider card with supporting text below as a natural lead-in to additional content.'}
						/>
					</div>
				</div>
			</div>
		</main>
	);
}