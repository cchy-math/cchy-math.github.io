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

function divToFracLaTeX(numerator, denominator) {
    let sign = numerator*denominator < 0 ? "-" : "";
    let N = Math.abs(numerator/ GCD(numerator, denominator));
    let D = Math.abs(denominator/ GCD(numerator, denominator));
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

export default function TrigoQuadratic() {
    
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
    let i = 1;
    let A = 1;
    let B = 1;
    let C = 1;
    let D = 1;
    let trigo = "\\sin";
    let theta = "\\theta";
    let end = " } \\)";

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (    
        <>
        <main className="px-4 py-3 vh-100 vw-100 d-flex align-content-between flex-wrap">
			<div className="h1 vh-25 vw-100">
                Solve the following equation. Where {"\\( 0^{\\circ} \\leq \\theta < 360^{\\circ}. \\quad \\quad \\)"}
                解下列方程。當中 {"\\( 0^{\\circ} \\leq \\theta < 360^{\\circ} \\)"} 。
            </div>
            <div className="display-1 vh-50 vw-100 d-flex justify-content-center align-items-center">
                {texQ}
            </div>
            <div className="vh-25 vw-100 mb-5 align-items-center">
                <div className="row mb-5">
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <button className="button-rainbow h4 w-75" onClick={() => {
                            B = getRndInteger(1,10)*Math.pow(-1,getRndInteger(1,3));
                            D = getRndInteger(1,10)*Math.pow(-1,getRndInteger(1,3));
                            A = getRndInteger(B,10)*Math.pow(-1,getRndInteger(1,3));
                            C = getRndInteger(1,10)*Math.pow(-1,getRndInteger(1,3));
                            i = getRndInteger(1,3);
                            trigo = (i === 1) ? "\\sin" : "\\cos";
                            setTexA_LHS1(begin + trigo + theta + "=" + divToFracLaTeX(B,A) + end);
                            setTexA_RHS1(begin + trigo + theta + "=" + divToFracLaTeX(D,C) + end);
                            if(A*C === 1){
                                A = "";
                            };
                            if(A === -1){
                                A = "-";
                            };
                            setTexQ(begin + 
                                (A*C < 0 ? "-" : "") + 
                                ((Math.abs(A*C) === 1) ? "" : Math.abs(A*C)) + 
                                trigo + "^2" + theta + 
                                ((-(B*C+A*D) > 0) ? "+" : "-") + 
                                Math.abs(B*C+A*D) + 
                                trigo + theta + 
                                ((Number(B*D) > 0) ? "+" : "-") + 
                                Math.abs(B*D) + "= 0" + end);
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
                    {"\\( \\text{ or } \\)"}
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