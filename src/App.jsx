import React, {useEffect, useState} from 'react';
import {HashRouter as Router} from 'react-router-dom';

import './App.css';

import HeaderBar from './app/HeaderBar.jsx';
import Main from './app/Main.jsx';


export default function App() {
	const [tex, setTex] =useState('')
	useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
		  window.MathJax.typesetClear()
		  window.MathJax.typeset()
		}
	  },[tex])
	return (
		<React.StrictMode>
			<Router>
				<div className="App">
					<div className="row">
						<HeaderBar />
						<Main />
					</div>
				</div>
			</Router>
		</React.StrictMode>
	);
}