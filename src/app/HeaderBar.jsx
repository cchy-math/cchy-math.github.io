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
    <header className="px-4 vw-100">
      <div className="row vw-100 px-4" style={{ height: 10 }}>
        <div className="col-4 py-2">
          <NavLink to="/menu">
            <button className="button-rainbow">
              Menu
            </button>
          </NavLink>
        </div>
        <div className="col-4">
          <NavLink to="/" className="h1 text-white">
            CCHY
          </NavLink>
        </div>
        <div className="col-4">
          <button className="button-dark invisible">
            Empty Space
          </button>
        </div>
      </div>
      <div className="progress p-0">
        <div className="progress-bar progress-bar-striped progress-bar-animated" />
      </div>
    </header>
  );
}