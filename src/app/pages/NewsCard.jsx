import React, {useEffect, useState} from 'react';

export default function NewsCard({title, date, content, textcolor, bordercolor}) {
	const [tex, setTex] = useState('')
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[tex])
	return (
		<div class="col-12 col-md-8 col-xl-4 mb-3">
            <div class={"row g-0 rounded my-1 h-100 border border-" + bordercolor}>
                <div class="bg-dark col h-100 ps-4 pt-4">
                    <div class="row h-25">
                        <h1 className={"text-" + textcolor}>
                            {title}
                        </h1>
                        <p>
                            {date}
                        </p>
                    </div>
                    <div class="h5 h-75 mt-2">
                        <br/>
                        {content}
                    </div>
                </div>
            </div>
        </div>
	);
}