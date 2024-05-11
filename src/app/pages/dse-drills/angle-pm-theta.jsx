import React, {useEffect, useState} from 'react';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export default function AnglePmAngle() {
    
	const [tex, setTex] =useState('');
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[tex])

    let eq1 = "\\( \\ ";
    let eq2 = 90*getRndInteger(1,5);
	let eq3 = "^{\\circ} ";
    let eq4 = "-";
    let eq5 = " \\theta \\ \\)";
    if(getRndInteger(1,3) == 1){
        eq4 = "+"
    }else{
        eq4 = "-"
    }
    return (
        
		<main className="px-4 py-3 col">
			<div className="h-25 display-5">
                Let {"\\( \\ \\theta \\ \\)"} be an acute angle. Determine which quadrant does the folowing angle lies on.
            </div>
            <div className="h-100 display-5">
                設 {"\\( \\ \\theta \\ \\)"} 為銳角，判斷下列角度所屬的象限。
            </div>
            <div className="display-1 text-center w-100">
                {eq1+eq2+eq3+eq4+eq5}
            </div>
            
		</main>
	);
}