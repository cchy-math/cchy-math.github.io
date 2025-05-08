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

function arccosDeg(num) {
    let radians = Math.acos(num);
    let degrees = radians * (180 / Math.PI);
    return degrees;
}

export default function AcosxeqB() {
    
	const [texQ, setTexQ] =useState('');
    const [texA, setTexA] =useState('');
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
    let trigo = "\\cos \\theta";
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
                            A = getRndInteger(1,11)*Math.pow(-1,getRndInteger(1,3));
                            B = getRndInteger(0,11)*Math.pow(-1,getRndInteger(1,3));
                            let arcTrigo = "\\arccos \\left(" + divToFracLaTeX(B,A) + "\\right)";
                            if(A*B < 0){
                                arcTrigo = "\\arcsin \\left( \\left|" + divToFracLaTeX(B,A) + "\\right| \\right)";
                            }
                            setTexA(begin + trigo + "=" + divToFracLaTeX(B,A) + end);
                            if(B/A > 1 || B/A < -1){
                                setTexA_LHS1(begin + "\\because -1 \\leq \\cos \\theta \\leq 1 " + end);
                                setTexA_LHS2(begin + "\\therefore \\text{No real solutions}" + end);
                                setTexA_RHS1(begin + "\\because -1 \\leq \\cos \\theta \\leq 1 " + end);
                                setTexA_RHS2(begin + "\\therefore \\text{無實數解}" + end);
                            }else{
                                if(A*B >= 0){
                                    setTexA_LHS1(begin + "\\theta = " + arcTrigo + end);
                                    setTexA_RHS1(begin + "\\theta = 360^{\\circ} - " + arcTrigo + end);
                                    setTexA_LHS2(begin + "\\theta = " + corrTo3sf(Number(arccosDeg(B/A))) + "^{\\circ}" + end);
                                    setTexA_RHS2(begin + "\\theta = " + corrTo3sf(360 - Number(arccosDeg(B/A))) + "^{\\circ}" + end);    
                                }else{
                                    setTexA_LHS1(begin + "\\theta = 180^{\\circ} -" + arcTrigo + end);
                                    setTexA_RHS1(begin + "\\theta = 180^{\\circ} +" + arcTrigo + end);
                                    setTexA_LHS2(begin + "\\theta = " + corrTo3sf(180 - Number(arccosDeg(Math.abs(B/A)))) + "^{\\circ}" + end);
                                    setTexA_RHS2(begin + "\\theta = " + corrTo3sf(180 + Number(arccosDeg(Math.abs(B/A)))) + "^{\\circ}" + end);    
                                }
                            }
                            if(A === 1){
                                A = "";
                            };
                            if(A === -1){
                                A = "-";
                            };
                            setTexQ(begin+A+trigo+"="+B+end);
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
                <div className="invisible">
                    {"\\( \\displaystyle \\frac{1}{2} \\)"}
                </div>
            </div>
            <div className="col-4 col-sm-4 d-flex justify-content-center">
                <div className={isVisible ? 'visible' : 'invisible'}>
                    {texA}
                </div>
            </div>
            <div className="col-2 col-sm-2 d-flex justify-content-center">
                <div className="invisible">
                    {"\\( \\displaystyle \\frac{1}{2} \\)"}
                </div>
            </div>
            <div className="col-1 col-sm-2 d-flex justify-content-center"></div>

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

            <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
            <div className="col-2 col-sm-2 d-flex justify-content-center">
                <div className={isVisible ? 'visible' : 'invisible'}>
                    {texA_LHS2}
                </div>
            </div>
            <div className="col-4 col-sm-4 d-flex justify-content-center">
                <div className={isVisible ? 'visible' : 'invisible'}>
                    {"\\( \\text{ or } \\)"}
                </div>
            </div>
            <div className="col-2 col-sm-2 d-flex justify-content-center">
                <div className={isVisible ? 'visible' : 'invisible'}>
                    {texA_RHS2}
                </div>
            </div>
            <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
        </div>
        </>
	);
}