import React, {useEffect, useState} from "react";
import "../../components/button/button.css"
import "../../components/button/button.js"
import "../../components/clock/clock.css"
import "../../components/clock/clock.js"
import Clock2 from "../../components/clock/Clock2.jsx"
import { S12subjectData } from "./S12-subject-data.js";
import { S3subjectData } from "./S3-subject-data.js";
import { DSEsubjectData } from "./DSE-subject-data.js";
import { lang_papers } from "./lang-papers.js";
import { math_papers } from "./math-papers.js";
import { m1_papers } from "./m1-papers.js";
import { m2_papers } from "./m2-papers.js";
import { two_papers } from "./two-papers.js";
import { va_papers } from "./va-papers.js";
import { no_paper } from "./no-paper.js";
export default function Timer() {
    const [switchLanguage, setSwitchLanguage] = useState(false);
    const [formVisible, setFormVisible] = useState(true);
    const [displayVisible, setDisplayVisible] = useState(false);
    const [yearSelection, setYearSelection] = useState('');
    const [selectedSubject, setSelectedSubject] = useState(''); 
    const [selectedPaper, setSelectedPaper] = useState(''); 
    const yearList = [
        ["", ""],
        ["中一", "S1"],
        ["中二", "S2"], 
        ["中三", "S3"],
        ["中四", "S4"],
        ["中五", "S5"],
        ["中六", "S6"]
      ];
    const handleYearChange = (e) => {
        setYearSelection(e.target.value);
        setSelectedSubject('');
        setSelectedPaper('');
    };
    const handleSubjectChange = (e) => {
        setSelectedSubject(e.target.value);
        setSelectedPaper('');
    }
    const handlePaperChange = (e) => {
        setSelectedPaper(e.target.value);
    }
    const [subjectOptions, setSubjectOptions] = useState([]);
    useEffect(() => {
        let subjectData;
        if(yearSelection === '中一 S1' || yearSelection === '中二 S2') {
            subjectData = S12subjectData;
        } else if(yearSelection === '中三 S3') {
            subjectData = S3subjectData; 
        } else {
            subjectData = DSEsubjectData;
        }
        // map over subjectData to generate <option> elements
        const subjectOptions = subjectData.map((subject) => (
            <option 
                id={subject.value}
            >
                {subject.chi_name} {subject.eng_name}
            </option>
        ));
        // re-render subject dropdown
        setSubjectOptions(subjectOptions);
    }, [yearSelection])
    const [paperOptions, setPaperOptions] = useState([]);
    useEffect(() => {
        let paperData;
        if(selectedSubject === '中國語文 Chinese Language' || selectedSubject === '英國語文 English Language') {
            paperData = lang_papers;
        } else if(selectedSubject === '數學 Mathematics' || selectedSubject === '數學必修部分 Mathematics Compulsory Part' ) {
            paperData = math_papers; 
        } else if(selectedSubject === '數學延伸部分單元(一) Mathematics Extended Part Modules 1') {
            paperData = m1_papers; 
        } else if(selectedSubject === '數學延伸部分單元(二) Mathematics Extended Part Modules 2') {
            paperData = m2_papers; 
        } else if(selectedSubject === '視覺藝術 Visual Arts') {
            paperData = va_papers; 
        } else if((yearSelection.split(" ",2)[1] === 'S4' || yearSelection.split(" ",2)[1] === 'S5' || yearSelection.split(" ",2)[1] === 'S6') && selectedSubject !== '公民與社會發展 Citizenship and Social Development' && selectedSubject !== '視覺藝術 Visual Arts' && selectedSubject !== '體育 Physical Education') {
            paperData = two_papers; 
        } else {
            paperData = no_paper;
        }
        // map over paperData to generate <option> elements
        const paperOptions = paperData.map((paper) => (
            <option 
                id={paper.value}
            >
                {paper.chi_name} {paper.eng_name}
            </option>
        ));
        // re-render paper dropdown
        setPaperOptions(paperOptions);
    }, [selectedSubject, yearSelection]) 
    const [startHour, setStartHour] = useState('00'); 
    const handleStartHourChange = (e) => {
        setStartHour(e.target.value);
    }
    const [startMin, setStartMin] = useState('00'); 
    const handleStartMinChange = (e) => {
        setStartMin(e.target.value);
    }
    const [durationHour, setDurationHour] = useState(''); 
    const handleDurationHourChange = (e) => {
        setDurationHour(e.target.value);
    }
    const [durationMin, setDurationMin] = useState(''); 
    const handleDurationMinChange = (e) => {
        setDurationMin(e.target.value);
    }
    function calculateEndTime(sH, sM, dH, dM) {
        let endTime = Number(sH)*60 + Number(sM) + Number(dH.slice(0, dH.indexOf(' ')))*60 + Number(dM.slice(0, dM.indexOf(' ')));
        let endHour = Math.floor(endTime/60);
        let endMin = endTime - endHour*60;
        if(endHour < 10) endHour = "0" + endHour;
        if(endMin < 10) endMin = "0" + endMin;
        return (endHour + ":" + endMin);
    }
    const [selectedLanguage, setSelectedLanguage] = useState(''); 
    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    }
    const minuteOptions = [];
    for(let i = 0; i < 60; i+=5) {
        minuteOptions.push(
            <option key={i}>
                {i < 10 ? '0'+i : i} 
            </option>
        );
    }
    const [examTime, setExamTime] = useState('');
    useEffect(() => {
        setExamTime(startHour+":"+startMin+" - "+calculateEndTime(startHour, startMin, durationHour, durationMin));
    }, [startHour, startMin, durationHour, durationMin])
    const [timeLeft, setTimeLeft] = useState(''); 
    let interval;
    let timeLeftInSeconds;
    const [timeLeftColor, setTimeLeftColor] = useState('text-info');
    const handleStartClick = () => {
        let hLeft = Number(durationHour.slice(0, durationHour.indexOf(' ')));
        let mLeft = Number(durationMin.slice(0, durationMin.indexOf(' ')));
        let sLeft = 0;
        let date  = new Date();
        let hNow = date.getHours();
        let mNow = date.getMinutes();
        let endTimeMin = hNow*60 + mNow + hLeft*60 + mLeft;
        let endH = Math.floor(endTimeMin/60);
        let endM = endTimeMin - endH*60;
        if(endH < 10) endH = "0" + endH;
        if(endM < 10) endM = "0" + endM;
        setExamTime(hNow+":"+mNow+" - "+endH+":"+endM)
        timeLeftInSeconds = hLeft*3600 + mLeft*60;
        if(hLeft < 10) hLeft = "0" + hLeft;
        if(mLeft < 10) mLeft = "0" + mLeft;
        if(sLeft < 10) sLeft = "0" + sLeft;
        setTimeLeft(hLeft+":"+mLeft+":"+sLeft);
        let barWidth;
        let totalTime = timeLeftInSeconds;
        interval = setInterval(()=>{
            if(timeLeftInSeconds <= 0) {
                clearInterval(interval);
                return;
            }
            timeLeftInSeconds = timeLeftInSeconds-1;
            hLeft = Math.floor(timeLeftInSeconds/3600);
            mLeft = Math.floor((timeLeftInSeconds - hLeft*3600)/60);
            sLeft = timeLeftInSeconds - hLeft*3600 - mLeft*60;
            if(hLeft < 10) hLeft = "0" + hLeft;
            if(mLeft < 10) mLeft = "0" + mLeft;
            if(sLeft < 10) sLeft = "0" + sLeft;
            setTimeLeft(hLeft+":"+mLeft+":"+sLeft);
            barWidth = (timeLeftInSeconds/totalTime) * 100;
            let barWidth15 = (15*60/totalTime) * 100;
            let barWidth5 = (5*60/totalTime) * 100;
            document.querySelector(".time-left").style.width = barWidth + "%";
            if(barWidth >=barWidth15 && barWidth <=100) {
                document.querySelector(".time-left").className = "progress-bar time-left progress-bar-striped progress-bar-animated bg-success";
                document.querySelector("#exam-time-left-info").className = "col-xs-4 col-md-8 display-4 text-success";
            }
            if(barWidth >=barWidth5 && barWidth <barWidth15) {
                document.querySelector(".time-left").className = "progress-bar time-left progress-bar-striped progress-bar-animated bg-warning";
                document.querySelector("#exam-time-left-info").className = "col-xs-4 col-md-8 display-4 text-warning";
            }
            if(barWidth < barWidth5) {
                document.querySelector(".time-left").className = "progress-bar time-left progress-bar-striped progress-bar-animated bg-danger";
                document.querySelector("#exam-time-left-info").className = "col-xs-4 col-md-8 display-4 text-danger";
            }      
            if(switchLanguage){
                if(selectedLanguage === '中文 Chinese') {
                    setSelectedLanguage('英文 English');
                }
                if(selectedLanguage === '英文 English'){
                    setSelectedLanguage('中文 Chinese');
                }
            }
          }, 1000);
    }
    const handleDoneClick = () => {
        setFormVisible(false); 
        setDisplayVisible(true);
        let hLeft = Number(durationHour.slice(0, durationHour.indexOf(' ')));
        let mLeft = Number(durationMin.slice(0, durationMin.indexOf(' ')));
        let sH = Number(startHour);
        let sM = Number(startMin);
        let endTimeMin = sH*60 + sM + hLeft*60 + mLeft;
        let endH = Math.floor(endTimeMin/60);
        let endM = endTimeMin - endH*60;
        if(hLeft < 10) hLeft = "0" + hLeft;
        if(mLeft < 10) mLeft = "0" + mLeft;
        if(endH < 10) endH = "0" + endH;
        if(endM < 10) endM = "0" + endM;
        if(sH < 10) sH = "0" + sH;
        if(sM < 10) sM = "0" + sM;
        setTimeLeft(hLeft+":"+mLeft+":"+"00");
        setExamTime(sH+":"+sM+" - "+endH+":"+endM)
        if(selectedLanguage === '雙語顯示 Bilingual') {
            setSwitchLanguage(true);
            setSelectedLanguage('中文 Chinese');
        }
    }
    const handleFinishClick = () => {
        window.location.reload();
    }
    return (
        <main className="container">
            <div className="HeaderHeight"></div>
            {formVisible && (
                <form className="" visible={formVisible}>
                    <div className="h1 text-center">Timer Settings</div>
                    <section className="p-3 justify-content-center">
                        <div className="row p-3 justify-content-center">
                            <div className="col-md-1 col-xs-12 p-3">
                                <label for="year" class="form-label h4">Year</label>
                                <select 
                                    value={yearSelection}
                                    onChange={handleYearChange}
                                    class="form-select bg-dark text-light" 
                                    id="year"
                                    required
                                >
                                    {yearList.map((year, index) => {
                                        return (
                                            <option id={year[1]} /* value={year[1]} */> 
                                                {year[0]} {year[1]}  
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-md-4 col-xs-12 p-3">
                                <label for="subject" class="form-label h4">Subject</label>
                                <select onChange={handleSubjectChange}  class="form-select bg-dark text-light" id="subject" equired="">
                                    {subjectOptions}
                                </select>
                            </div>
                            <div className="col-md-3 col-xs-12 p-3">
                                <label for="paper" class="form-label h4">Paper</label>
                                <select onChange={handlePaperChange} class="form-select bg-dark text-light" id="paper" required="">
                                    {paperOptions}
                                </select>
                            </div>
                            <div className="col-md-2 col-xs-12 p-3">
                                <label for="display" class="form-label h4">Language</label>
                                <select onChange={handleLanguageChange} class="form-select bg-dark text-light" id="display" required="">
                                    <option></option>
                                    <option id="中文 Chinese">中文 Chinese</option>
                                    <option id="英文 English">英文 English</option>
                                    <option id="雙語顯示 Bilingual">雙語顯示 Bilingual</option>
                                </select>
                            </div>
                        </div>
                    </section>
                    <section className="p-3">
                        <div className="row p-3 justify-content-center">
                            <div className="col-md-2 col-xs-12 p-3">
                                <label for="starting-time" class="col form-label h4">Starting Time</label>
                                <div className="row h3">
                                    <select onChange={handleStartHourChange} class="col mx-3 form-select bg-dark text-light" id="starting-time-hour" required="">
                                        <option></option>
                                        <option>08</option>
                                        <option>09</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                    </select>
                                    :
                                    <select onChange={handleStartMinChange} class="col mx-3 form-select bg-dark text-light" id="starting-time-min" required="">
                                        <option></option>
                                        {minuteOptions}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2 col-xs-12 p-3">
                                <label for="duration" class="form-label h4">Duration Time</label>
                                <div className="row h3">
                                    <select onChange={handleDurationHourChange} class="col mx-3 form-select bg-dark text-light" id="duration-hour" required="">
                                        <option></option>
                                        <option id="0-dt-h">0 hour</option>
                                        <option id="1-dt-h">1 hour</option>
                                        <option id="2-dt-h">2 hour</option>
                                        <option id="3-dt-h">3 hour</option>
                                        <option id="4-dt-h">4 hour</option>
                                    </select>
                                    :
                                    <select onChange={handleDurationMinChange} class="col mx-3 form-select bg-dark text-light" id="duration-min" required="">
                                        <option></option>
                                        <option id="0-dt-m">0 min</option>
                                        <option id="5-dt-m">5 min</option>
                                        <option id="10-dt-m">10 min</option>
                                        <option id="15-dt-m">15 min</option>
                                        <option id="20-dt-m">20 min</option>
                                        <option id="25-dt-m">25 min</option>
                                        <option id="30-dt-m">30 min</option>
                                        <option id="35-dt-m">35 min</option>
                                        <option id="40-dt-m">40 min</option>
                                        <option id="45-dt-m">45 min</option>
                                        <option id="50-dt-m">50 min</option>
                                        <option id="55-dt-m">55 min</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="col-md-2 col-xs-12 p-3">
                                <label for="auto" class="form-label h4">Auto Start</label>
                                <select class="form-select bg-dark text-light" id="auto" required="">
                                    <option></option>
                                    <option id="MANUAL">手動開始 Start Manually</option>
                                    <option id="AUTO">自動開始 Start Automatically</option>
                                </select>
                            </div>
                            <div className="col-md-2 col-xs-12 px-4">
                                <button onClick={handleDoneClick} className="button-rainbow my-5 h5" style={{'width': '100%'}}>
                                    Done
                                </button>
                            </div>
                        </div>
                    </section>
                </form>
            )}
            {displayVisible && (
                <section visible={displayVisible} for="timer-display" className="text-center align-items-center">
                    <section id="info" className="display-1 mb-5">
                        { selectedLanguage === '中文 Chinese' && yearSelection.slice(0, yearSelection.indexOf(' ')) }
                        { selectedLanguage === '英文 English' && yearSelection.slice(yearSelection.indexOf(' ')+1) }
                        <br/>
                        { selectedLanguage === '中文 Chinese' && selectedSubject.slice(0, selectedSubject.indexOf(' ')) }
                        { selectedLanguage === '英文 English' && selectedSubject.slice(selectedSubject.indexOf(' ')+1) }
                        <br/>
                        { selectedLanguage === '中文 Chinese' && (selectedPaper && selectedPaper.slice(0, selectedPaper.indexOf(' '))) }
                        { selectedLanguage === '英文 English' && (selectedPaper && selectedPaper.slice(selectedPaper.indexOf(' ')+1)) }
                        { selectedPaper && <br/> }
                        { examTime }
                        <br/>
                    </section>
                    <section id="time-display" className="px-5 mt-5">
                        <section id="progress-bar" className="row my-5">
                            <div className="row align-items-center">
                                <div className="col-xs-4 col-md-2">
                                    <button onClick={handleStartClick} className="button-rainbow h5" style={{'width': '100%'}}>
                                        Start
                                    </button>
                                </div>
                                <div id="exam-time-left-info" className="col-xs-4 col-md-8 display-4 text-info">
                                    { selectedLanguage === '中文 Chinese' && "剩餘時間 " }
                                    { selectedLanguage === '英文 English' && "Remaining Time " }
                                    { timeLeft }
                                </div>
                                <div className="col-xs-4 col-md-2">
                                    <button onClick={handleFinishClick} className="button-rainbow h5" style={{'width': '100%'}}>
                                        Finish
                                    </button>
                                </div>
                            </div>
                            <div id="time-left-bar" className="progress flex-row-reverse my-3">
                                <div className="progress-bar time-left progress-bar-striped progress-bar-animated bg-info" style={{width: 100+'%'}} />
                            </div>
                        </section>
                        <section id="announcement" className="display-6 my-5">
                            考試時間尚餘十五分鐘。請考生確保在試卷及答題紙上寫上姓名、班別及學號。
                        </section>
                        <section id="clock" className="row mt-5">
                            <div className="col-xs-1 col-md-4"></div>
                            <div className="col-xs-10 col-md-4 my-5"><Clock2 /></div>
                            <div className="col-xs-1 col-md-4"></div>
                        </section>
                    </section>
                </section>
            )}   
            
        </main>
    );
}