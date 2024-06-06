import React, {useEffect, useState} from 'react';
import '../../components/button/button.css'
import '../../components/button/button.js'
import '../../components/clock/clock.css'
import '../../components/clock/clock.js'
import { S12subjectData } from "./S12-subject-data.js";
import { S3subjectData } from "./S3-subject-data.js";
import { DSEsubjectData } from "./DSE-subject-data.js";
export default function Timer() {
    const [form, setForm] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedPaper, setSelectedPaper] = useState('');
    let subjectData;
    if(form === '1' || form === '2') {
        subjectData = S12subjectData;
    }
    else if(form === '3'){
        subjectData = S3subjectData; 
    }
    else {
        subjectData = DSEsubjectData; 
    };
    const handleSubjectChange = (e) => {
        setSelectedSubject(e.target.value);
        setSelectedPaper(''); 
    }
    useEffect(() => {
        setSelectedPaper('');
    }, [selectedSubject]);
    return (
        <main className="container">
            <div className="HeaderHeight"></div>
            <section className="p-3">
                <div className="row p-3">
                    <div className="col-1 col-xs-12 p-3">
                        <label for="secondary form" class="form-label h4">Form</label>
                        <select class="form-select bg-dark text-light" id="secondary form" required="" value={form} onChange={e => setForm(e.target.value)}>
                            <option value="1">S1</option>
                            <option value="2">S2</option>
                            <option value="3">S3</option>
                            <option value="4">S4</option>
                            <option value="5">S5</option>
                            <option value="6">S6</option>
                        </select>
                    </div>
                    <div className="col-4 col-xs-12 p-3">
                        <label for="subject" class="form-label h4">Subject</label>
                        <select class="form-select bg-dark text-light" id="subject" onChange={handleSubjectChange} required="">
                            {subjectData && subjectData.map((data, key) => {
                                return (
                                    <option value={data.subject}>
                                        {data.chi_name+" "+data.eng_name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="col-3 col-xs-12 p-3">
                        <label for="paper" class="form-label h4">Paper</label>
                        <select class="form-select bg-dark text-light" id="paper" required="">
                        {subjectData.find(sub => sub.subject === selectedSubject) &&
                            subjectData.find(sub => sub.subject === selectedSubject).papers.map(paper => (
                            <option value={paper}>{paper.chi_name} {paper.eng_name}</option> 
                        ))}
                        </select>
                    </div>
                    <div className="col-2 col-xs-12 p-3">
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
                    <div className="col-2 col-xs-12 p-3">
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
                </div>
            </section>
            <section>
                <div className="row p-3">
                    <div className="col-3 col-xs-12 p-3">
                        <label for="display" class="form-label h4">Display</label>
                        <select class="form-select bg-dark text-light" id="display" required="" value={form} onChange={e => setForm(e.target.value)}>
                            <option value="CHI">中文 Chinese</option>
                            <option value="ENG">英文 English</option>
                            <option value="BOTH">雙語切換 Switch</option>
                        </select>
                    </div>
                    <div className="col-5 col-xs-12 p-3">
                        <label for="remaining-time" class="form-label h4">Remaining Time</label>
                        <select class="form-select bg-dark text-light" id="remaining-time" required="" value={form} onChange={e => setForm(e.target.value)}>
                            <option value="NO">沒有剩餘時間提示 No Remaining Time Reminder</option>
                            <option value="15+5">時間剩餘15分鐘及5分鐘時提示 Remind when 15 minutes left and 5 minutes left</option>
                        </select>
                    </div>
                    <div className="col-4 col-xs-12 p-3">
                        <label for="auto" class="form-label h4">Auto Start</label>
                        <select class="form-select bg-dark text-light" id="auto" required="" value={form} onChange={e => setForm(e.target.value)}>
                            <option value="MANUAL">手動開始 Start Manually</option>
                            <option value="AUTO">自動開始 Start Automatically</option>
                        </select>
                    </div>
                </div>
            </section>
        </main>
    );
}