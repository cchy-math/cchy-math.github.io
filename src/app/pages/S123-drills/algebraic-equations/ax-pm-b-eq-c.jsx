import React, {useEffect, useState} from 'react';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function GCD(a, b) {
    if (b) {
        while ((a %= b) && (b %= a));
    }
    return a + b;
}

function LCM(a, b) {
    return (a * b) / GCD(a, b);
}

function getAlphabetLetter(number) {
    // Convert the number to its corresponding ASCII code
    const asciiCode = number + 96;
  
    // Convert the ASCII code to its corresponding letter
    const letter = String.fromCharCode(asciiCode);
  
    return letter;
}

export default function AXpmBeqC() {
    
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
    let pmsign = "+";
    let a = "a";
    let eqsign = "=";
    let b = "b";
    let c = "c";
    let end = "\\)";
    let i = 0;
    let pm = -1;
    let ans = 0;

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
		<main className="px-4 py-3 vh-100 vw-100 d-flex align-content-between flex-wrap">
			<div className="h1 vh-25 w-100">
                Solve the following equation.
                <br/><br/>
                解下列方程。
            </div>
            <div className="display-1 vh-50 vw-100 d-flex justify-content-center align-items-center">
                {texQ}
            </div>
            <div className="vh-25 vw-100 mb-5 align-items-center">
                <div className="row mb-5">
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <button className="button-rainbow h4 w-75" onClick={() => {
                            x = getAlphabetLetter(getRndInteger(1,27));
                            if(x === "e" || x === "i" || x === "l" || x === "o"){
                                x = "x";
                            };
                            a = getRndInteger(1,10)*Math.pow(-1,getRndInteger(1,3));
                            b = getRndInteger(1,10)*Math.pow(-1,getRndInteger(1,3));
                            c = getRndInteger(1,10)*Math.pow(-1,getRndInteger(1,3));
                            let order = getRndInteger(1,3);
                            let N = (c - b)/GCD(c - b,a);
                            let D = a/GCD(c - b,a);
                            pm = (N*D < 0) ? "-" : "";
                            if(D === 1 || D === -1){
                                setTexA_eng("\\( "+x+eqsign+pm+Math.abs(N)+" \\)");
                            }else{
                                setTexA_eng("\\( "+x+eqsign+pm+"\\displaystyle \\frac{"+Math.abs(N)+"}{"+Math.abs(D)+"}"+" \\)");
                            };
                            setTexA_chi("");
                            setIsVisible(false);
                            if(a === 1){
                                a = "";
                            };
                            if(order === 1){
                                if(a === -1){
                                    a = "-";
                                };
                                if(b < 0){
                                    b = Math.abs(b);
                                    pmsign = "-";
                                };
                                setTexQ(begin+a+x+pmsign+b+eqsign+c+end);
                            }else{
                                if(a < 0){
                                    a = Math.abs(a);
                                    pmsign = "-";
                                };
                                if(a === 1){
                                    a = "";
                                };
                                setTexQ(begin+b+pmsign+a+x+eqsign+c+end);
                            };
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