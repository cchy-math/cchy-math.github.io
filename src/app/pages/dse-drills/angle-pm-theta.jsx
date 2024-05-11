import React, {useEffect, useState} from 'react';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export default function AnglePmAngle() {
    
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
    let eq1 = "\\( \\ ";
    let eq2 = 90*getRndInteger(1,5);
    let eq3 = "^{\\circ} ";
    let eq4 = "-";
    let eq5 = " \\theta \\ \\)";
    let i = 0;
    let pm = 0;

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        
		<main className="px-4 py-3">
			<div className="h1">
                Let {"\\( \\ \\theta \\ \\)"} be an acute angle. Determine which quadrant does the folowing angle lies on.
                <br/><br/>
                設 {"\\( \\ \\theta \\ \\)"} 為銳角，判斷下列角度所屬的象限。
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
                            eq2 = 90*getRndInteger(1,5);
                            i = getRndInteger(1,3);
                            if(i == 2){
                                eq4 = "+";
                                pm = 1;
                            }else{
                                eq4 = "-";
                                pm = 0;
                            }
                            setTexQ(eq1+eq2+eq3+eq4+eq5);
                            let ans = (Math.floor(Number(eq2)/90) + pm) % 4;
                            if(ans == 0){
                                setTexA_eng("\\( \\text{Quadrant IV} \\)");
                                setTexA_chi("\\( \\text{象限 IV} \\)");
                            };
                            if(ans == 1){
                                setTexA_eng("\\( \\text{Quadrant I} \\)");
                                setTexA_chi("\\( \\text{象限 I} \\)");
                            };
                            if(ans == 2){
                                setTexA_eng("\\( \\text{Quadrant II} \\)");
                                setTexA_chi("\\( \\text{象限 II} \\)");
                            };
                            if(ans == 3){
                                setTexA_eng("\\( \\text{Quadrant III} \\)");
                                setTexA_chi("\\( \\text{象限 III} \\)");
                            };
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