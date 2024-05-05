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
    <main className="container">
      <div className="m-3">
        <h1>News </h1>
        <CardIcon />
      </div>
    </main>
  );
}