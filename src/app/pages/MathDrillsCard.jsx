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
		<div className={"col-3 my-2 g-0 d-flex bg-dark rounded-4 border border-2 border-" + bordercolor} style={{ height: 100, width: 250 }} >
			<button className="px-4 py-3 flex-grow-1 align-items-center">
				<p className="h5">{content}</p>
			</button>
		</div>
	);
}