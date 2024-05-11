import React, {useEffect, useState} from 'react';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export default function NegativeAngle() {
    
	const [texQ, setTexQ] =useState('');
    const [texA_chi, setTexA_chi] =useState('');
    const [texA_eng, setTexA_eng] =useState('');
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[texQ]);
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[texA_eng]);
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[texA_chi])
    let begin = "\\(";
    let i = getRndInteger(1,4);
    let trigo = "\\sin";
    let negative_theta = " (- \\theta) ";
    let end = " = \\)";

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        
		<main className="px-4 py-3">
			<div className="h1">
                Let {"\\( \\ \\theta \\ \\)"} be a real number.
                <br/><br/>
                設 {"\\( \\ \\theta \\ \\)"} 為實數。
                <br/><br/><br/><br/>
                <h1 className="display-1 d-flex justify-content-center">
                    {texQ}
                </h1>
                <br/><br/><br/><br/>
                <div class="row mb-5">
                    <div class="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div class="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div class="col-4 col-sm-2 d-flex justify-content-center">
                        <button className="button-rainbow h4 w-75" onClick={() => {
                            i = getRndInteger(1,4);
                            let ans = "";
                            if(i == 1){
                                trigo = "\\sin";
                                ans = "\\( -\\sin ( \\theta ) \\)"
                            };
                            if(i == 2){
                                trigo = "\\cos";
                                ans = "\\( \\cos ( \\theta ) \\)"
                            };
                            if(i == 3){
                                trigo = "\\tan";
                                ans = "\\( -\\tan ( \\theta ) \\)"
                            };
                            setTexQ(begin+trigo+negative_theta+end);
                            setTexA_eng(ans);
                            setTexA_chi(ans);
                            setIsVisible(false);
                        }}>
                            Next
                        </button>
                    </div>
                    <div class="col-4 col-sm-2 d-flex justify-content-center">
                        <button className="button-rainbow h4 w-75" onClick={toggleVisibility}>
                            Answer
                        </button>
                    </div>
                    <div class="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div class="col-1 col-sm-2 d-flex justify-content-center"></div>
                </div>
                <div class="row mb-5">
                    <div class="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div class="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div class="col-4 col-sm-2 d-flex justify-content-center">
                        <div className={isVisible ? 'visible' : 'invisible'}>
                            {texA_eng}
                        </div>
                    </div>
                    <div class="col-4 col-sm-2 d-flex justify-content-center">
                        <div className={isVisible ? 'visible' : 'invisible'}>
                            {texA_chi}
                        </div>
                    </div>
                    <div class="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div class="col-1 col-sm-2 d-flex justify-content-center"></div>
                </div>
            </div>
		</main>
	);
}