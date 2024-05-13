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

export default function RangeAllType() {
    
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
    let i = 1;
    let A = 1;
    let B = 1;
    let C = 1;
    let trigo = "\\sin \\theta";
    let end = " \\)";

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (    
        <main className="px-4 py-3 vh-100 vw-100 d-flex align-content-between flex-wrap">
			<div className="h1 vh-25 vw-100">
                Let {"\\( \\ \\theta \\  \\)"} be a real variable.  Find the minimum value and the maximum value of the following function.
                <br/><br/>
                設 {"\\( \\  \\theta \\  \\)"} 為實變數。求下列函數的極小值和極大值。
            </div>
            <div className="display-1 vh-50 vw-100 d-flex justify-content-center align-items-center">
                {texQ}
            </div>
            <div className="vh-25 vw-100 mb-5 align-items-center">
                <div className="row mb-5">
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <button className="button-rainbow h4 w-75" onClick={() => {
                            i = getRndInteger(1,5);
                            if(i === 1){
                                trigo = "\\sin \\theta";
                            };
                            if(i === 2){
                                trigo = "\\cos \\theta";
                            };
                            if(i === 3){
                                trigo = "\\sin^2 \\theta";
                            };
                            if(i === 4){
                                trigo = "\\cos^2 \\theta";
                            };
                            let Min = -1;
                            let Max = 1;
                            if(i > 2){
                                Min = 0;
                            };
                            let LHS = -1;
                            let RHS = 1;
                            A = getRndInteger(1,6)*Math.pow(-1,getRndInteger(1,3));
                            do {
                                B = getRndInteger(1,6)*Math.pow(-1,getRndInteger(1,3));
                            } while ((A*Min+B)*(A*Max+B) === 0);
                            let j = getRndInteger(1,3);
                            let order = getRndInteger(1,3);
                            if(j === 1){
                                let lcm = LCM(Math.abs(A*Min+B),Math.abs(A*Max+B));
                                if(lcm > 10){
                                    C = lcm*Math.pow(-1,getRndInteger(1,3));
                                }else{
                                    C = getRndInteger(1,4)*lcm*Math.pow(-1,getRndInteger(1,3));
                                };
                                let pm = "-";
                                LHS = C/(A*Max+B);
                                RHS = C/(A*Min+B);
                                if(C > 0){
                                    pm = "";
                                }else{
                                    pm = "-";
                                    C = Math.abs(C);
                                };
                                
                                if(order === 1){
                                    if(A === 1){A = "";};
                                    if(B === 1){B = "+1";};
                                    if(B > 1){B = "+"+B;};
                                    if(A === -1){A = "-";};
                                    setTexQ(begin+pm+"\\displaystyle \\frac{"+C+"}{"+A+trigo+B+"}"+end);
                                }else{
                                    if(A > 1){A = "+"+A;};
                                    if(A === 1){A = "+";};
                                    if(A === -1){A = "-";};
                                    setTexQ(begin+pm+"\\displaystyle \\frac{"+C+"}{"+B+A+trigo+"}"+end);
                                };
                            }else{
                                LHS = A*Min+B;
                                RHS = A*Max+B;
                                if(order === 1){
                                    if(A === 1){A = "";};
                                    if(B === 1){B = "+1";};
                                    if(B > 1){B = "+"+B;};
                                    if(A === -1){A = "-";};
                                    setTexQ(begin+A+trigo+B+end);
                                }else{
                                    if(A > 1){A = "+"+A;};
                                    if(A === 1){A = "+";};
                                    if(A === -1){A = "-";};
                                    setTexQ(begin+B+A+trigo+end);
                                };
                            };
                            if(LHS < RHS){
                                Min = LHS;
                                Max = RHS;
                            }else{
                                Min = RHS;
                                Max = LHS;
                            };
                            setTexA_eng("\\( \\begin{eqnarray} \\text{Min} &=& "+Min+" \\\\ \\text{Max} &=& "+Max+"  \\end{eqnarray} \\)");
                            setTexA_chi("\\( \\begin{eqnarray} \\text{極小值} &=& "+Min+" \\\\ \\text{極大值} &=& "+Max+"  \\end{eqnarray} \\)");
                            
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