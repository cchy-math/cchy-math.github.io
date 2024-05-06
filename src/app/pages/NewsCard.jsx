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
		<div class="col-12 col-md-5 mb-3">
            <div class={"row g-0 rounded overflow-hidden flex-md-row my-1 shadow-sm h-100 position-relative border border-" + bordercolor}>
                <div class="bg-dark col p-4">
                    <div class="h-25 mb-3">
                        <h2 className={"text-" + textcolor}>
                            {title}
                        </h2>
                    </div>
                    <div class="h-50 mt-2">
                        <h4>
                            <br/>
                            {content}
                            <br/>
                        </h4>
                    </div>
                    <div class="h-25">
                        <div class="h-25"/>
                        <div class="h5 h-25">
                            {date}
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}