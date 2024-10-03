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
function GCD(a, b) {
    if (b) {
        while ((a %= b) && (b %= a));
    }
    return a + b;
}

function LCM(a, b) {
    return (a * b) / GCD(a, b);
}

function divToFracLaTeX(numerator, denominator) {
    let sign = numerator*denominator < 0 ? "-" : "";
    let N = Math.abs(numerator/ GCD(numerator, denominator));
    let D = Math.abs(denominator/ GCD(numerator, denominator));
    return (D === 1) ? (sign + N) : (sign + "\\displaystyle \\frac{"+N+"}{"+D+"}");
}
export default function CEAddMath1991() {
    
	const [fx, setFx] =useState('');
    const [gx, setGx] =useState('');
    const [kfgx, setKfgx] =useState('');
    const [delta, setDelta] =useState('');
    const [root, setRoot] =useState('');
    const [r1kfgx, setR1kfgx] =useState('');
    const [r2kfgx, setR2kfgx] =useState('');
    const [texA_chi, setTexA_chi] =useState('');
    const [texA_eng, setTexA_eng] =useState('');
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[fx]);
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[gx]);
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[kfgx]);
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[delta]);
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[root]);
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[r1kfgx]);
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[r2kfgx]);
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
    let a = 1;
    let b = 1;
    let c = 1;
    let h = 1;
    let k = 1;
    let end = "\\)";

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
		<main className="px-4 py-3 vh-100 vw-100 d-flex align-content-between flex-wrap">
			<div className="h1 vh-25 w-100">
                HKCEE 1991 Additional Mathematics Paper I Q9
            </div>
            <div className="display-5 vh-50 vw-100 d-flex justify-content-center align-items-center">
                <div className="row vw-100">{fx} {gx}</div>
                <div className="row vw-100">{kfgx}</div>
                <div className="row vw-100">{delta}</div>
                <div className="row vw-100">{root}</div>
                <div className="row vw-100">{r1kfgx} {r2kfgx}</div>
            </div>
            <div className="vh-25 vw-100 mb-5 align-items-center">
                <div className="row mb-5">
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <button className="button-rainbow h4 w-75" onClick={() => {
                            a = getRndInteger(1,10);
                            b = getRndInteger(1,10);
                            c = getRndInteger((b*b)/(4*c),20);
                            h = divToFracLaTeX(b, 2*a);
                            k = divToFracLaTeX(Math.abs(b*b-4*a*c), 4*a);
                            setFx(begin+"x^2 + x + 1"+end);
                            setGx(begin+"g(x)=-"+a+"x^2-"+b+"x-"+c+"=-"+a+"\\left(x+"+h+"\\right)^2-"+k+end);
                            setKfgx(begin+"y=kf(x)+g(x)=(k-"+a+")x^2+(k-"+b+")x+(k-"+c+")"+end);
                            setDelta(begin+"\\Delta = 0 = -3k^2+"+2*(b-2*a-2*c)+"k-"+Math.abs(b*b-4*a*c)+end);
                            setRoot("");
                            setR1kfgx("");
                            setR2kfgx("");
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