import React, {useEffect, useState} from 'react';

export default function NewsCard({ title, date, content, textcolor, bordercolor, imagepath }) {
	const [tex, setTex] = useState('')
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[tex])
	if( imagepath !== ""){
		return (
			<div class={"col-4 m-2 g-0 d-flex bg-dark rounded-4 border border-2 border-" + bordercolor} style={{ height: 200, width: 500 }} >
				<div class="px-4 py-3 flex-grow-1">
					<p class={"h3 text-" + textcolor}>{title}</p>
					<p class="text-muted">{date}</p>
					<p class="fs-6">{content}</p>
				</div>
				<div>
					<img class="rounded-4 rounded-start" src={imagepath} height="100%"/>
				</div>
			</div>
		);
	}
	else {
		return (
			<div class={"col-3 m-2 g-0 d-flex bg-dark rounded-4 border border-" + bordercolor} style={{ height: 200, width: 500 }} >
				<div class="px-4 py-3 flex-grow-1">
					<p class={"h3 text-" + textcolor}>{title}</p>
					<p class="text-muted">{date}</p>
					<p class="fs-6">{content}</p>
				</div>
			</div>
		);
	}
}