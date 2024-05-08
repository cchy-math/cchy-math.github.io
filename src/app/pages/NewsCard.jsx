import React, {useEffect, useState} from 'react';

export default function NewsCardWithImage({ title, date, content, textcolor, bordercolor, imagepath }) {
	const [tex, setTex] = useState('')
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[tex])
	return (
		<div class={"col-4 m-3 g-0 d-flex bg-dark m-2 rounded-4 border border-" + bordercolor} style={{ height: 200, width: 500 }} >
            <div class="px-4 py-3 flex-grow-1">
                <p class={"h3 text-" + textcolor}>{title}</p>
                <p class="text-muted">{date}</p>
                <p class="fs-xs-5 fs-lg-6">{content}</p>
            </div>
        </div>
	);
}