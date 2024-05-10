import React, {useEffect, useState} from 'react';

export default function MathDrillsCard({ title, date, content, textcolor, bordercolor, imagepath }) {
	const [tex, setTex] = useState('')
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[tex])
	return (
		<div class={"col-3 m-2 g-0 d-flex bg-dark rounded-4 border border-2 border-" + bordercolor} style={{ height: 100, width: 250 }} >
			<button class="px-4 py-3 flex-grow-1">
				<p class="h3">{content}</p>
			</button>
		</div>
	);
}