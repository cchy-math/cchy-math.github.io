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
		<div class="col-12 w-md-50 w-xl-25 col-md-8 col-xl-4 mb-3">
            <div class={"row g-0 rounded my-1 h-100 border border-" + bordercolor}>
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
                <div class="bg-dark col h-100">
                    <img src={imagepath} class="img-fluid h-100 float-end" alt="alternatetext"/>
                </div>
            </div>
        </div>
	);
}