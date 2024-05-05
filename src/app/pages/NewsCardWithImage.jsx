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
		<div class="col-12 col-md-5 mb-3">
            <div class={"row g-0 rounded overflow-hidden flex-md-row my-1 shadow-sm h-100 position-relative border border-" + bordercolor}>
                <div class="bg-dark col p-4">
                    <div class="h-25 mb-3">
                        <h2 className={"text-" + textcolor}>
                            {title}
                        </h2>
                    </div>
                    <div class="h-50 mt-2">
                        <h5>
                            <br/>
                            {content}
                            <br/>
                        </h5>
                    </div>
                    <div class="h-25">
                        <div class="h-25"/>
                        <div class="h-25">
                            {date}
                        </div>
                    </div>
                </div>
                <div class="col-5 col-md-4">
                    <img src={imagepath} class="img-fluid rounded float-end h-100" alt="alternatetext"/>
                </div>
            </div>
        </div>
	);
}