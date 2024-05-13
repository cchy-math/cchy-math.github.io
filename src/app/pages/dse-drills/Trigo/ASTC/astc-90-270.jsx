import React, {useEffect, useState} from 'react';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export default function ASTC90270() {
    
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
    let trigo = "\\sin";
    let angle = 90*(2*getRndInteger(1,3)-1);
    let degree = "^{\\circ}";
    let plus_or_minus = "-";
    let theta = "\\theta";
    let end = " = \\)";
    let i = 0;
    let pm = 0;

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <main className="px-4 py-3 vh-100 vw-100 d-flex align-content-between flex-wrap">
			<div className="h1 vh-25 vw-100">
                Simplify the following expression.
                <br/><br/>
                化簡下列數式。
            </div>
            <div className="display-1 vh-50 vw-100 d-flex justify-content-center align-items-center">
                {texQ}
            </div>
            <div className="vh-25 vw-100 mb-5 align-items-center">
                <div className="row mb-5 vw-100">
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <button className="button-rainbow h4 w-75" onClick={() => {
                            angle = 90*(getRndInteger(1,3)*2 - 1);
                            let Trig = getRndInteger(1,4);
                            if(Trig === 1){
                                trigo = "\\sin";
                            };
                            if(Trig === 2){
                                trigo = "\\cos";
                            };
                            if(Trig === 3){
                                trigo = "\\tan";
                            };
                            i = getRndInteger(1,3);
                            if(i === 2){
                                plus_or_minus = "+";
                                pm = 1;
                            }else{
                                plus_or_minus = "-";
                                pm = -1;
                            }
                            let j = getRndInteger(1,3);
                            let Qnum = 1;
                            if(j === 1){
                                setTexQ(begin+trigo+"("+angle+degree+plus_or_minus+theta+")"+end);
                                Qnum = (Math.floor(Number(angle + pm)/90) + 1) % 4;
                            }else{
                                setTexQ(begin+trigo+"("+theta+plus_or_minus+angle+degree+")"+end);
                                Qnum = (Math.floor(Number(1 + pm*angle)/90) + 5) % 4;
                            }
                            let trigo_result = "";
                            if(angle === 90 || angle === 270){
                                if(trigo === "\\sin"){
                                    trigo_result = "\\cos \\theta";
                                };
                                if(trigo === "\\cos"){
                                    trigo_result = "\\sin \\theta";
                                };
                                if(trigo === "\\tan"){
                                    trigo_result = " \\displaystyle \\frac{1}{\\tan \\theta}";
                                };
                            }else{
                                trigo_result = trigo + " \\theta"
                            };
                            if(Qnum === 0){
                                if(Trig === 2){
                                    setTexA_eng("\\( "+trigo_result+"\\)");
                                    setTexA_chi("\\( "+trigo_result+"\\)");
                                }else{
                                    setTexA_eng("\\( - "+trigo_result+"\\)");
                                    setTexA_chi("\\( - "+trigo_result+"\\)");
                                }
                            };
                            if(Qnum === 1){
                                    setTexA_eng("\\( "+trigo_result+"\\)");
                                    setTexA_chi("\\( "+trigo_result+"\\)");
                            };
                            if(Qnum === 2){
                                if(Trig === 1){
                                    setTexA_eng("\\( "+trigo_result+"\\)");
                                    setTexA_chi("\\( "+trigo_result+"\\)");
                                }else{
                                    setTexA_eng("\\( - "+trigo_result+"\\)");
                                    setTexA_chi("\\( - "+trigo_result+"\\)");
                                }
                            };
                            if(Qnum === 3){
                                if(Trig === 3){
                                    setTexA_eng("\\( "+trigo_result+"\\)");
                                    setTexA_chi("\\( "+trigo_result+"\\)");
                                }else{
                                    setTexA_eng("\\( - "+trigo_result+"\\)");
                                    setTexA_chi("\\( - "+trigo_result+"\\)");
                                }
                            };
                            setIsVisible(false);
                        }}>
                            Next
                        </button>
                    </div>
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <button className="button-rainbow h4 w-75" onClick={toggleVisibility}>
                            Answer
                        </button>
                    </div>
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                </div>
                <div className="row mb-5 display-5 vw-100">
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