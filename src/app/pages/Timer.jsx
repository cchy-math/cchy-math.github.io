import React, {useEffect, useState, useRef} from "react";
import "../../components/button/button.css"
import "../../components/button/button.js"
import "../../components/clock/clock.css"
import "../../components/clock/clock.js"
import { S12subjectData } from "./S12-subject-data.js";
import { S3subjectData } from "./S3-subject-data.js";
import { DSEsubjectData } from "./DSE-subject-data.js";
import { lang_papers } from "./lang-papers.js";
import { math_papers } from "./math-papers.js";
import { two_papers } from "./two-papers.js";
import { va_papers } from "./va-papers.js";
import { no_paper } from "./no-paper.js";
export default function Timer() {
    const [yearSelection, setYearSelection] = useState('');
    const [selectedSubject, setSelectedSubject] = useState(''); 
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
    const [subjectOptions, setSubjectOptions] = useState([]);
    const subjectData = useRef();
    useEffect(() => {
        if(yearSelection === 'S1' || yearSelection === 'S2') {
            subjectData.current = S12subjectData;
        } else if(yearSelection === 'S3') {
            subjectData.current = S3subjectData; 
        } else {
            subjectData.current = DSEsubjectData;
        }
        // map over subjectData to generate <option> elements
        const subjectOptions = subjectData.current.map((subject) => (
            <option 
            value={subject.value}
            >
            {subject.chi_name} {subject.eng_name}
            </option>
        ));
        // re-render subject dropdown
        setSubjectOptions(subjectOptions);
    }, [yearSelection])
    const [paperOptions, setPaperOptions] = useState([]);
    const paperData = useRef();
    useEffect(() => {
        if(selectedSubject === 'CHI' || selectedSubject === 'ENG') {
            paperData.current = lang_papers;
        } else if(selectedSubject === 'MATH' || selectedSubject === 'MACO' || selectedSubject === 'M1' || selectedSubject === 'M2') {
            paperData.current = math_papers; 
        } else if(selectedSubject === 'VA') {
            paperData.current = va_papers; 
        } else if(selectedSubject.slice(0, 2) === 'S3' || selectedSubject.slice(0, 2) === 'PE' || selectedSubject.slice(0, 3) === 'S12' || selectedSubject.slice(0, 3) === 'TSA' || selectedSubject.slice(0, 3) === 'EDB') {
            paperData.current = no_paper; 
        } else {
            paperData.current = two_papers;
        }
        // map over paperData to generate <option> elements
        const paperOptions = paperData.current.map((paper) => (
            <option 
                value={paper.value}
            >
                {paper.chi_name} {paper.eng_name}
            </option>
        ));
        // re-render paper dropdown
        setPaperOptions(paperOptions);
    }, [selectedSubject]) 
    const [buttonClicked, setButtonClicked] = useState(false);
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
                                        <option value={year[1]}>
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
                            <select class="form-select bg-dark text-light" id="paper" required="">
                                {paperOptions}
                            </select>
                        </div>
                        <div className="col-md-2 col-xs-12 p-3">
                            <label for="display" class="form-label h4">Language</label>
                            <select class="form-select bg-dark text-light" id="display" required="">
                                <option value="CHI">中文 Chinese</option>
                                <option value="ENG">英文 English</option>
                                <option value="BOTH">中英對照 Chinese-English Parallel</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section className="p-3">
                    <div className="row p-3">
                        <div className="col-md-2 col-xs-12 p-3">
                            <label for="starting-time" class="col form-label h4">Starting Time</label>
                            <div className="row">
                                <select class="col mx-3 form-select bg-dark text-light" id="starting-time-hour" required="">
                                    <option value="8">08</option>
                                    <option value="9">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                </select>
                                <select class="col mx-3 form-select bg-dark text-light" id="starting-time-min" required="">
                                    <option value="30">30</option>
                                    <option value="35">35</option>
                                    <option value="40">40</option>
                                    <option value="45">45</option>
                                    <option value="50">50</option>
                                    <option value="55">55</option>
                                    <option value="0">00</option>
                                    <option value="5">05</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2 col-xs-12 p-3">
                            <label for="duration" class="form-label h4">Duration</label>
                            <div className="row">
                                <select class="col mx-3 form-select bg-dark text-light" id="duration-hour" required="">
                                    <option value="0">0 hour</option>
                                    <option value="1">1 hour</option>
                                    <option value="2">2 hour</option>
                                    <option value="3">3 hour</option>
                                    <option value="4">4 hour</option>
                                </select>
                                <select class="col mx-3 form-select bg-dark text-light" id="duration-min" required="">
                                    <option value="5">5 min</option>
                                    <option value="10">10 min</option>
                                    <option value="15">15 min</option>
                                    <option value="20">20 min</option>
                                    <option value="25">25 min</option>
                                    <option value="30">30 min</option>
                                    <option value="35">35 min</option>
                                    <option value="40">40 min</option>
                                    <option value="45">45 min</option>
                                    <option value="50">50 min</option>
                                    <option value="55">55 min</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 p-3">
                            <label for="remaining-time" class="form-label h4">Remaining Time</label>
                            <select class="form-select bg-dark text-light" id="remaining-time" required="">
                                <option value="NO">沒有剩餘時間提示 No Remaining Time Reminder</option>
                                <option value="YES">時間剩餘15分鐘及5分鐘時提示 Remind when 15 minutes left and 5 minutes left</option>
                            </select>
                        </div>
                        <div className="col-md-2 col-xs-12 p-3">
                            <label for="auto" class="form-label h4">Auto Start</label>
                            <select class="form-select bg-dark text-light" id="auto" required="">
                                <option value="MANUAL">手動開始 Start Manually</option>
                                <option value="AUTO">自動開始 Start Automatically</option>
                            </select>
                        </div>
                        <div className="col-md-2 col-xs-12 px-4">
                            <button className="button-rainbow my-5" style={{'width': '100%'}}>
                                <h5>Done</h5>
                            </button>
                        </div>
                    </div>
                </section>
            </form>
            <div for="Display" className="text-center">
                
            </div>
        </main>
    );
}