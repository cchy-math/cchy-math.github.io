import React, {useEffect, useState} from 'react';
import CardIcon from './CardIcon.jsx'

export default function Bookmarks() {
    const [tex, setTex] =useState('')
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
		  window.MathJax.typesetClear()
		  window.MathJax.typeset()
		}
	  },[tex])
    return (
		<main className="container col-lg-10 col-9">
            <div className="HeaderHeight"></div>
            <div className="container">
                <h1>Bookmarks </h1>
                <CardIcon />
            </div>
        </main>
    );
}