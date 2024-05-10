import React, {useEffect, useState} from 'react';

export default function NewsCard({ title, date, content, color, imagepath }) {
	const [tex, setTex] = useState('')
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[tex])
	if( imagepath !== ""){
		return (
			<div className={"col-4 mx-3 g-0 d-flex rounded-4 border border-2 border-" + color} style={{ height: 200, width: 500 }} >
				<div class="px-4 py-3 flex-grow-1">
					<p class={"h3 text-" + color}>{title}</p>
					<p class="text-muted">{date}</p>
					<p class="fs-5">{content}</p>
				</div>
				<div>
					<img class="rounded-4 rounded-start" src={imagepath} height="100%"/>
				</div>
			</div>
		);
	}
	else {
		return (
			<div className={"col-3 mx-3 g-0 d-flex rounded-4 border border-2 border-" + color} style={{ height: 200, width: 500 }} >
				<div class="px-4 py-3 flex-grow-1">
					<p class={"h3 text-" + color}>{title}</p>
					<p class="text-muted">{date}</p>
					<p class="fs-5">{content}</p>
				</div>
			</div>
		);
	}
}