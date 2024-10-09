import React, {useEffect, useState} from 'react';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function GCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (a === 1) {
        return b;
    }
    else if (b === 1) {
        return a;
    }
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
    if (Math.abs(denominator) === 1) {return sign + numerator};
    if (numerator === 1) {return (sign + "\\displaystyle \\frac{1}{"+Math.abs(D)+"}")};
    return (D === 1) ? (sign + N) : (sign + "\\displaystyle \\frac{"+N+"}{"+D+"}");
}

function corrTo3sf(number) {
    if (number === 0) {
        return 0;
      }
      
      const power = Math.floor(Math.log10(Math.abs(number))) + 1;
      const factor = Math.pow(10, 3 - power);
      
      return Math.round(number * factor) / factor;
}

function arctanDeg(num) {
    let radians = Math.atan(num);
    let degrees = radians * (180 / Math.PI);
    return degrees;
}

export default function FactorForm() {
    
	const [texQ, setTexQ] = useState('');
    const [texA, setTexA] = useState('');
    const [texA_LHS1, setTexA_LHS1] = useState('');
    const [texA_RHS1, setTexA_RHS1] = useState('');
    const [texA_LHS2, setTexA_LHS2] = useState('');
    const [texA_RHS2, setTexA_RHS2] = useState('');
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[texQ, texA, texA_LHS1, texA_RHS1, texA_LHS2, texA_RHS2])
    let begin = "\\( \\displaylines{ ";
    let p = 1;
    let q = 1;
    let r = 1;
    let s = 1;
    let end = " } \\)";

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (    
        <>
        <main className="px-4 py-3 vh-100 vw-100 d-flex align-content-between flex-wrap">
			<div className="h1 vh-25 vw-100">
                Solve the following equation.
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
                            p = getRndInteger(1,10);
                            q = getRndInteger(1,10)*Math.pow(-1,getRndInteger(1,3));
                            r = getRndInteger(1,10);
                            s = getRndInteger(1,10)*Math.pow(-1,getRndInteger(1,3));
                            setTexA_LHS1(begin + "x=" + divToFracLaTeX(-q, p) + "\\text{ or }" + "x=" + divToFracLaTeX(-s, r) + end);
                            setTexA_RHS1(begin + "x=" + divToFracLaTeX(-q, p) + "\\text{ 或 }" + "x=" + divToFracLaTeX(-s, r) + end);
                            if (q > 0){
                                q = "+" + q;
                            }
                            if (s > 0){
                                s = "+" + s;
                            }
                            if (p === 1){
                                p = "";
                            }
                            if (r === 1){
                                r = "";
                            }
                            setTexQ(begin + "(" + p + "x" + q + ")(" + r + "x" + s + ")=0" + end);
                            setIsVisible(false);
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
            </div>
		</main>
        <div className="row vw-100 mb-5 display-5">
            <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
            <div className="col-2 col-sm-2 d-flex justify-content-center">
                <div className={isVisible ? 'visible' : 'invisible'}>
                    {texA_LHS1}
                </div>
            </div>
            <div className="col-4 col-sm-4 d-flex justify-content-center">
                <div className={isVisible ? 'visible' : 'invisible'}>
                    {}
                </div>
            </div>
            <div className="col-2 col-sm-2 d-flex justify-content-center">
                <div className={isVisible ? 'visible' : 'invisible'}>
                    {texA_RHS1}
                </div>
            </div>
            <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
        </div>
        </>
	);
}