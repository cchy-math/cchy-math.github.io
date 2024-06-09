import React, {useEffect, useState} from "react";
import "../../components/button/button.css"
import "../../components/button/button.js"
import "../../components/clock/clock.css"
import "../../components/clock/clock.js"
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
    const [yearSelection, setYearSelection] = useState('');
    const [selectedSubject, setSelectedSubject] = useState(''); 
    const [selectedPaper, setSelectedPaper] = useState(''); 
    const yearList = [
        ["年級", "Year"],
        ["中一", "S1"],
        ["中二", "S2"], 
        ["中三", "S3"],
        ["中四", "S4"],
        ["中五", "S5"],
        ["中六", "S6"]
      ];
    const handleYearChange = (e) => {
        setYearSelection(e.target.value);
    };
    const handleSubjectChange = (e) => {
        setSelectedSubject(e.target.value);
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
    }, [selectedSubject]) 
    const [startHour, setStartHour] = useState(''); 
    const handleStartHourChange = (e) => {
        setStartHour(e.target.value);
    }
    const [startMin, setStartMin] = useState(''); 
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
    return (
        <main className="container">
            <div className="HeaderHeight"></div>
            <div className="h1 text-center">Timer Settings</div>
            <form>
                <section className="p-3">
                    <div className="row p-3">
                        <div className="col-md-2 col-xs-12 p-3">
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
                        <div className="col-md-4 col-xs-12 p-3">
                            <label for="paper" class="form-label h4">Paper</label>
                            <select onChange={handlePaperChange} class="form-select bg-dark text-light" id="paper" required="">
                                {paperOptions}
                            </select>
                        </div>
                        <div className="col-md-2 col-xs-12 p-3">
                            <label for="display" class="form-label h4">Language</label>
                            <select class="form-select bg-dark text-light" id="display" required="">
                                <option id="displayChi">中文 Chinese</option>
                                <option id="displayEng">英文 English</option>
                                <option id="displayBoth">中英對照 Chinese-English Parallel</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section className="p-3">
                    <div className="row p-3">
                        <div className="col-md-2 col-xs-12 p-3">
                            <label for="starting-time" class="col form-label h4">Starting Time</label>
                            <div className="row">
                                <select onChange={handleStartHourChange} class="col mx-3 form-select bg-dark text-light" id="starting-time-hour" required="">
                                    <option id="8-st-h">08</option>
                                    <option id="9-st-h">09</option>
                                    <option id="10-st-h">10</option>
                                    <option id="11-st-h">11</option>
                                    <option id="12-st-h">12</option>
                                    <option id="13-st-h">13</option>
                                    <option id="14-st-h">14</option>
                                    <option id="15-st-h">15</option>
                                    <option id="16-st-h">16</option>
                                    <option id="17-st-h">17</option>
                                    <option id="18-st-h">18</option>
                                </select>
                                <select onChange={handleStartMinChange} class="col mx-3 form-select bg-dark text-light" id="starting-time-min" required="">
                                    <option id="0-st-m">00</option>
                                    <option id="5-st-m">05</option>
                                    <option id="10-st-m">10</option>
                                    <option id="15-st-m">15</option>
                                    <option id="20-st-m">20</option>
                                    <option id="25-st-m">25</option>
                                    <option id="30-st-m">30</option>
                                    <option id="35-st-m">35</option>
                                    <option id="40-st-m">40</option>
                                    <option id="45-st-m">45</option>
                                    <option id="50-st-m">50</option>
                                    <option id="55-st-m">55</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2 col-xs-12 p-3">
                            <label for="duration" class="form-label h4">Duration</label>
                            <div className="row">
                                <select onChange={handleDurationHourChange} class="col mx-3 form-select bg-dark text-light" id="duration-hour" required="">
                                    <option id="0-dt-h">0 hour</option>
                                    <option id="1-dt-h">1 hour</option>
                                    <option id="2-dt-h">2 hour</option>
                                    <option id="3-dt-h">3 hour</option>
                                    <option id="4-dt-h">4 hour</option>
                                </select>
                                <select onChange={handleDurationMinChange} class="col mx-3 form-select bg-dark text-light" id="duration-min" required="">
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
                        <div className="col-md-4 col-xs-12 p-3">
                            <label for="remaining-time" class="form-label h4">Remaining Time</label>
                            <select class="form-select bg-dark text-light" id="remaining-time" required="">
                                <option id="no-reminder">沒有剩餘時間提示 No Remaining Time Reminder</option>
                                <option id="15+5-reminder">時間剩餘15分鐘及5分鐘時提示 Remind when 15 minutes left and 5 minutes left</option>
                            </select>
                        </div>
                        <div className="col-md-2 col-xs-12 p-3">
                            <label for="auto" class="form-label h4">Auto Start</label>
                            <select class="form-select bg-dark text-light" id="auto" required="">
                                <option id="MANUAL">手動開始 Start Manually</option>
                                <option id="AUTO">自動開始 Start Automatically</option>
                            </select>
                        </div>
                        <div className="col-md-2 col-xs-12 px-4">
                            <button className="button-rainbow my-5 h5" style={{'width': '100%'}}>
                                Done
                            </button>
                        </div>
                    </div>
                </section>
            </form>
            <div for="timer-display" className="text-center align-items-center display-6">
                <section id="info" className="">
                    {yearSelection.slice(0, yearSelection.indexOf(' '))}
                    <br/>
                    {selectedSubject.slice(0, selectedSubject.indexOf(' '))}
                    <br/>
                    {selectedPaper.slice(0, selectedPaper.indexOf(' '))}
                    <br/>
                    {startHour}:{startMin} - {calculateEndTime(startHour, startMin, durationHour, durationMin)}
                    <br/>
                    {yearSelection.slice(yearSelection.indexOf(' ')+1)}
                    <br/>
                    {selectedSubject.slice(selectedSubject.indexOf(' ')+1)}
                    <br/>
                    {selectedPaper.slice(selectedPaper.indexOf(' ')+1)}
                    <br/>
                    {startHour}:{startMin} - {calculateEndTime(startHour, startMin, durationHour, durationMin)}
                </section>
                <section id="progress-bar">

                </section>
                <section id="clock">

                </section>
            </div>
        </main>
    );
}