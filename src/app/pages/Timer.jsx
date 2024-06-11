import React, {useEffect, useState} from "react";
import "../../components/button/button.css"
import "../../components/button/button.js"
import "../../components/clock/clock.css"
import "../../components/clock/clock.js"
import "../../components/scrollbar/scrollbar.css"
import "../../components/scrollbar/scrollbar.js"
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
    const [announcement15, setAnnouncement15] = useState(false);
    const [announcement5, setAnnouncement5] = useState(false);
    const [announcement0, setAnnouncement0] = useState(false);
    const [formVisible, setFormVisible] = useState(true);
    const [displayVisible, setDisplayVisible] = useState(false);
    const [startVisible, setStartVisible] = useState(true);
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
    const [autoStart, setAutoStart] = useState(false); 
    const handleStartingMethodChange = (e) => {
        if(e.target.value === '自動開始 Start Automatically'){
            setAutoStart(true);
        }else{
            setAutoStart(false);
        }
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
        setStartVisible(false);
        let hLeft = Number(durationHour.slice(0, durationHour.indexOf(' ')));
        let mLeft = Number(durationMin.slice(0, durationMin.indexOf(' ')));
        let sLeft = 0;
        let date  = new Date();
        let hNow = date.getHours();
        let mNow = date.getMinutes();
        let endTimeMin = hNow*60 + mNow + hLeft*60 + mLeft;
        let endH = Math.floor(endTimeMin/60);
        let endM = endTimeMin - endH*60;
        if(hNow < 10) hNow = "0" + hNow;
        if(mNow < 10) mNow = "0" + mNow;
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
                setAnnouncement5(false);
                setAnnouncement0(true);
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
                document.querySelector(".time-left").className = "progress-bar progress-bar-striped progress-bar-animated time-left bg-success";
                document.querySelector("#exam-time-left-info").className = "col-xs-4 col-lg-8 display-5 text-success";
                document.querySelector(".progress.time-left-bar").className = "progress time-left-bar time-left-bar-success flex-row-reverse my-3 p-0";
            }
            if(barWidth >=barWidth5 && barWidth <barWidth15) {
                document.querySelector(".time-left").className = "progress-bar progress-bar-striped progress-bar-animated time-left bg-warning";
                document.querySelector("#exam-time-left-info").className = "col-xs-4 col-lg-8 display-5 text-warning";
                document.querySelector(".time-left-bar").className = "progress time-left-bar time-left-bar-warning flex-row-reverse my-3 p-0";
                setAnnouncement15(true);
            }
            if(barWidth >=0 && barWidth < barWidth5) {
                document.querySelector(".time-left").className = "progress-bar progress-bar-striped progress-bar-animated time-left bg-danger";
                document.querySelector("#exam-time-left-info").className = "col-xs-4 col-lg-8 display-5 text-danger";
                document.querySelector(".time-left-bar").className = "progress time-left-bar time-left-bar-danger flex-row-reverse my-3 p-0";
                setAnnouncement15(false);
                setAnnouncement5(true);
            }     
        }, 1000);
    }
    useEffect(() => {
        let interval = switchLanguage && setInterval(() => {
          if(selectedLanguage === '中文 Chinese') {
            setSelectedLanguage('英文 English');
          } else {
            setSelectedLanguage('中文 Chinese');
          }
        }, 10000);
      
        return () => clearInterval(interval);
      }, [selectedLanguage, switchLanguage]);
    const handleDoneClick = () => {
        setFormVisible(false); 
        setDisplayVisible(true);
        if(autoStart){
            setStartVisible(false);
        }else{
            setStartVisible(true);
        }
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
    useEffect(() => {
        let interval = setInterval(() => {
            let date = new Date();
            if(autoStart && Number(date.getHours()) === Number(startHour) && Number(date.getMinutes()) === Number(startMin) && Number(date.getSeconds()) === 0) {
                handleStartClick();
                return;
            }
        }, 1000);
        return () => clearInterval(interval);
      }, [autoStart, startHour, startMin]);                    
    return (
        <main className="container">
            {formVisible && (
                <>
                <div className="HeaderHeight"></div>
                <form className="" visible={formVisible}>
                    <div className="h1 text-center">Timer Settings</div>
                    <section className="p-3 justify-content-center">
                        <div className="row p-3 justify-content-center">
                            <div className="col-lg-1 col-xs-12 p-3">
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
                            <div className="col-lg-4 col-xs-12 p-3">
                                <label for="subject" class="form-label h4">Subject</label>
                                <select onChange={handleSubjectChange}  class="form-select bg-dark text-light" id="subject" equired="">
                                    {subjectOptions}
                                </select>
                            </div>
                            <div className="col-lg-3 col-xs-12 p-3">
                                <label for="paper" class="form-label h4">Paper</label>
                                <select onChange={handlePaperChange} class="form-select bg-dark text-light" id="paper" required="">
                                    {paperOptions}
                                </select>
                            </div>
                            <div className="col-lg-2 col-xs-12 p-3">
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
                            <div className="col-lg-2 col-xs-12 p-3">
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
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>00</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                        <option>05</option>
                                        <option>06</option>
                                        <option>07</option>
                                        
                                    </select>
                                    :
                                    <select onChange={handleStartMinChange} class="col mx-3 form-select bg-dark text-light" id="starting-time-min" required="">
                                        <option></option>
                                        {minuteOptions}
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2 col-xs-12 p-3">
                                <label for="duration" class="form-label h4">Duration Time</label>
                                <div className="row h3">
                                    <select onChange={handleDurationHourChange} class="col mx-3 form-select bg-dark text-light" id="duration-hour" required="">
                                        <option></option>
                                        <option>0 hour</option>
                                        <option>1 hour</option>
                                        <option>2 hour</option>
                                        <option>3 hour</option>
                                        <option>4 hour</option>
                                    </select>
                                    :
                                    <select onChange={handleDurationMinChange} class="col mx-3 form-select bg-dark text-light" id="duration-min" required="">
                                        <option></option>
                                        <option>0 min</option>
                                        <option>5 min</option>
                                        <option>10 min</option>
                                        <option>15 min</option>
                                        <option>20 min</option>
                                        <option>25 min</option>
                                        <option>30 min</option>
                                        <option>35 min</option>
                                        <option>40 min</option>
                                        <option>45 min</option>
                                        <option>50 min</option>
                                        <option>55 min</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="col-lg-2 col-xs-12 p-3">
                                <label for="auto" class="form-label h4">Auto Start</label>
                                <select onChange={handleStartingMethodChange} class="form-select bg-dark text-light" id="auto" required="">
                                    <option></option>
                                    <option id="MANUAL">手動開始 Start Manually</option>
                                    <option id="AUTO">自動開始 Start Automatically</option>
                                </select>
                            </div>
                            <div className="col-lg-2 col-xs-12 px-4">
                                <button onClick={handleDoneClick} className="button-rainbow my-5 h5" style={{'width': '100%'}}>
                                    Done
                                </button>
                            </div>
                        </div>
                    </section>
                </form>
                </>
            )}
            {displayVisible && (
                <section visible={displayVisible} for="timer-display" className="text-center align-items-center">
                    <section id="exam-info-display" className="display-1 vw-100 pt-5">
                        <div className="HeaderHeight"/>
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
                    
                    <section id="time-info-display" className="vw-100 px-4 pb-3">
                        <section id="announcement-display" className="h1 align-items-center">
                            { announcement15 && selectedLanguage === '中文 Chinese' && "考試時間尚餘十五分鐘。請考生確保在試卷及答題紙上寫上姓名、班別及學號。" }
                            { announcement15 && selectedLanguage === '英文 English' && "You have 15 minutes left. Make sure you have written your name, class and class number on the Question papers and the Answer Sheets."}
                            { announcement5 && selectedLanguage === '中文 Chinese' && "考試時間尚餘五分鐘。請考生確保在試卷及答題紙（或補充答題紙）上寫上姓名、班別及學號。將不必要的文字、草稿及圖形劃去。當考試完結，宣布「停止作答」後，考生不可再改動試卷及答題紙內的內容。" }
                            { announcement5 && selectedLanguage === '英文 English' && "You have 5 minutes left. Make sure you have written your name, class and class number on the Question papers and the Answer Sheets. Cross out all unwanted materials. You will NOT be allowed to work on your Question papers and the Answer Sheets after the 'Stop working' announcement."}
                            { announcement0 && selectedLanguage === '中文 Chinese' && `現在時間是${examTime.split(" - ")[1]}。考試完結，停止作答。請放下所有文具。考生須安坐靜候，待得到指示後才可收拾個人物件。在離開試場前，切勿交談。將試卷及答題紙由後面傳上，傳卷時請將自己的答題紙放於其他考生的答題紙之上。`}
                            { announcement0 && selectedLanguage === '英文 English' && `The time now is ${examTime.split(" - ")[1]}. Time is up. Stop working. Put down all your stationery. Be seated quietly. Do not pack your personal belongings until you are told to do so. You should not talk before leaving this examination room. Now pass the answer sheets to the front with yours on the top, then the Question Papers.`}
                        </section>
                        <section id="bar" className="row px-5 pb-5">
                            <div className="progress time-left-bar time-left-bar-info flex-row-reverse my-3 p-0">
                                <div className="progress-bar progress-bar-striped progress-bar-animated time-left bg-info" style={{width: 100+'%'}} />
                            </div>
                            <div className="row align-items-center">
                                <div className="col-xs-4 col-lg-2">
                                {startVisible && 
                                    <button visible={startVisible} onClick={handleStartClick} className="button-rainbow h5" style={{'width': '50%'}}>
                                        Start
                                    </button>
                                }
                                </div>
                                <div id="exam-time-left-info" className="col-xs-4 col-lg-8 display-5 text-info">
                                    { selectedLanguage === '中文 Chinese' && "剩餘時間 " }
                                    { selectedLanguage === '英文 English' && "Remaining Time " }
                                    { timeLeft }
                                    
                                </div>
                                <div className="col-xs-4 col-lg-2">
                                   
                                </div>
                            </div>
                        </section>
                        <section id="time-display" className="row px-5">
                            <div className="col-xs-2 col-lg-4 px-3"></div>
                            <div className="col-xs-8 col-lg-4 px-3"><Clock2 /></div>
                            <div className="col-xs-2 col-lg-4 px-3"></div>
                        </section>
                    </section>
                </section>
            )}
        </main>
    );
}