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
    <header class="px-4">
      <div class="d-flex align-items-center justify-content-between pt-4" style={{ height: 10 }}>
        <NavLink to="menu"><button className="button-rainbow">
          Menu
        </button></NavLink>
        <NavLink to="page" className="h2 text-white">
          CCHY
        </NavLink>
        <button className="button-dark invisible">
          Empty Space
        </button>
      </div>
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" />
      </div>
    </header>
  );
}