import React, {useEffect, useState} from 'react';

export default function NewsCardWithImage({ title, date, content, textcolor, bordercolor }) {
	const [tex, setTex] = useState('')
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[tex])
	return (
		<div class="col-4">
            <div class={"row g-0 rounded overflow-hidden flex-md-row mb-3 shadow-sm h-md-250 position-relative border border-" + bordercolor}>
                <div class="bg-dark col px-4 pt-3 pb-1 d-flex flex-column position-static">
                    <h3 className={"pb-3 text-" + textcolor}>
                        {title}
                    </h3>
                    <p>
                        {content}
                    </p>
                    <a href="#" class="stretched-link">
                        Read the pdf
                    </a>
                    <div class="mt-3">
                        Release date: {date}
                    </div>
                </div>
            </div>
        </div>
	);
}