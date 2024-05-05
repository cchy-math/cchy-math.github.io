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
		<div class="col-4">
            <div class={"row g-0 rounded overflow-hidden flex-md-row my-3 shadow-sm h-md-250 position-relative border border-" + bordercolor}>
                <div class="bg-dark col ps-4 pe-1 pt-4 pb-3 d-flex flex-column position-static">
                    <div class="h-25 pb-3">
                        <h2 className={"text-" + textcolor}>
                            {title}
                        </h2>
                    </div>
                    <div class="h-50 mt-2">
                        <h6>
                            {content}
                        </h6>
                    </div>
                    <div class="h-25">
                        <div class="mb-2">
                            <a href="#" class="align-items-end stretched-link">
                                Read the pdf
                            </a>
                        </div>
                        <div>
                            Release date: {date}
                        </div>
                    </div>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <img src={imagepath} alt="alternatetext" height="250"/>
                </div>
            </div>
        </div>
	);
}