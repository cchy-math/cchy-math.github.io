import React, {useEffect, useState} from 'react';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getAlphabetLetter(number) {
    // Convert the number to its corresponding ASCII code
    const asciiCode = number + 96;
  
    // Convert the ASCII code to its corresponding letter
    const letter = String.fromCharCode(asciiCode);
  
    return letter;
}

export default function AXpmBY2() {
    
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
    let x = "x";
    let y = "y";
    let pmsign = "+";
    let a = "a";
    let eqsign = "=";
    let b = "b";
    let end = "\\)";
    let i = 0;
    let pm = -1;

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
		<main className="px-4 py-3 vh-100 vw-100 d-flex align-content-between flex-wrap">
			<div className="h1 vh-25 w-100">
                Expand the following expression.
                <br/><br/>
                展開下列數式。
            </div>
            <div className="display-1 vh-50 vw-100 d-flex justify-content-center align-items-center">
                {texQ}
            </div>
            <div className="vh-25 vw-100 mb-5 align-items-center">
                <div className="row mb-5">
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <button className="button-rainbow h4 w-75" onClick={() => {
                            do{
                                x = getAlphabetLetter(getRndInteger(1,27));
                            }while(x === "e" || x === "i" || x === "l" || x === "o");
                            do{
                                y = getAlphabetLetter(getRndInteger(1,27));
                            }while(y === "e" || y === "i" || y === "l" || y === "o" || y === x);
                            a = getRndInteger(1,10);
                            b = getRndInteger(1,10);
                            pm = Math.pow(-1,getRndInteger(1,3));
                            if(pm === 1){
                                if(a === 1){
                                    setTexA_eng("\\( "+x+"^2 + "+2*a*b+x+y+" + "+(b*b)+y+"^2 \\)");
                                }
                                else{
                                    setTexA_eng("\\( "+a+x+"^2 + "+2*a*b+x+y+" + "+(b*b)+y+"^2 \\)");
                                };
                                pmsign = "+";
                            }
                            else{
                                if(a === 1){
                                    setTexA_eng("\\( "+x+"^2 - "+2*a*b+x+y+" + "+(b*b)+y+"^2 \\)");
                                }
                                else{
                                    setTexA_eng("\\( "+a+x+"^2 - "+2*a*b+x+y+" + "+(b*b)+y+"^2 \\)");
                                };
                                pmsign = "-";
                            }
                            setIsVisible(false);
                            if(a === 1){
                                a = "";
                            }
                            setTexQ(begin+"("+a+x+pmsign+b+y+")^2"+end);
                        }}>
                            Next
                        </button>
                    </div>
                    <div className="col-2 col-sm-2 d-flex justify-content-center"></div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <button className="button-rainbow h4 w-75" onClick={toggleVisibility}>
                            Answer
                        </button>
                    </div>
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                </div>
                <div className="row mb-5 display-5">
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <div className={isVisible ? 'visible' : 'invisible'}>
                            {texA_eng}
                        </div>
                    </div>
                    <div className="col-2 col-sm-2 d-flex justify-content-center">
                        <div className="invisible">
                            {"\\( \\displaystyle \\frac{1}{2} \\)"}
                        </div>
                    </div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <div className={isVisible ? 'visible' : 'invisible'}>
                            {texA_chi}
                        </div>
                    </div>
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                </div>
            </div>
		</main>
	);
}