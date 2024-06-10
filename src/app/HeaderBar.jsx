import React, {useEffect, useState} from 'react';

import { NavLink } from 'react-router-dom';
import '../components/button/button.css'
import '../components/button/button.js'
import '../components/scrollbar/scrollbar.css'
import '../components/scrollbar/scrollbar.js'

export default function HeaderBar() {
  const [tex, setTex] = useState('')
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[tex])
  return (
    <header className="px-4 vww-100">
      <div className="d-flex align-items-center justify-content-between pt-4" style={{ height: 10 }}>
        <NavLink to="/menu"><button className="button-rainbow">
          Menu
        </button></NavLink>
        <NavLink to="/" className="h2 text-white">
          CCHY
        </NavLink>
        <button className="button-dark invisible">
          Empty Space
        </button>
      </div>
      <div className="progress p-0">
        <div className="progress-bar progress-bar-striped progress-bar-animated" />
      </div>
    </header>
  );
}