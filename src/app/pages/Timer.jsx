import React from 'react';
import '../../components/button/button.css'
import '../../components/button/button.js'
import '../../components/clock/clock.css'
import '../../components/clock/clock.js'
import { Link, NavLink, HeaderLink, Routes, Route } from 'react-router-dom';

export default function Timer() {
    return (
        <main className="container">
            <div className="HeaderHeight"></div>
            <section className="p-3">
                <div className="row p-3">
                    <div className="col-1 p-3">
                        <label for="secondary form" class="form-label h4">Form</label>
                        <select class="form-select bg-dark text-light" id="secondary form" required="">
                            <option value="1">S1</option>
                            <option value="2">S2</option>
                            <option value="3">S3</option>
                            <option value="4">S4</option>
                            <option value="5">S5</option>
                            <option value="6">S6</option>
                        </select>
                    </div>
                    <div className="col-4 p-3">
                        <label for="subject" class="form-label h4">Subject</label>
                        <select class="form-select bg-dark text-light" id="subject" required="">
                            <option value="CHI">中國語文 Chinese Language</option>
                            <option value="ENG">英國語文 English Language</option>
                            <option value="MACO">數學必修部分 Mathematics Compulsory Part</option>
                            <option value="M1">數學延伸部分單元（一） Mathematics Extended Part Modules 1</option>
                            <option value="M2">數學延伸部分單元（二） Mathematics Extended Part Modules 2</option>
                            <option value="CSD">公民與社會發展 Citizenship and Social Development</option>
                            <option value="PHY">物理 Physics</option>
                            <option value="CHEM">化學 Chemistry</option>
                            <option value="BIO">生物 Biology</option>
                            <option value="ECON">經濟 Economics</option>
                            <option value="BAFS">企業、會計與財務概論 Business, Accounting & Financial Studies</option>
                            <option value="ICT">資訊及通訊科技 Information & Communication Technology</option>
                            <option value="THS">旅遊與款待 Tourism & Hospitality Studies</option>
                            <option value="CLIT">中國文學 Chinese Literature</option>
                            <option value="GEO">地理 Geography</option>
                            <option value="CHIS">中國歷史 Chinese History</option>
                            <option value="HIST">歷史 History</option>
                            <option value="VA">視覺藝術 Visual Arts</option>
                            <option value="MATH">數學 Mathematics</option>
                            <option value="SCI">科學 Science</option>
                            <option value="IH">綜合人文 Integrated Humanities</option>
                            <option value="PTH">普通話 Putonghua</option>
                        </select>
                    </div>
                    <div className="col-4 p-3">
                        <label for="paper" class="form-label h4">Paper</label>
                        <select class="form-select bg-dark text-light" id="paper" required="">
                            <option value="1">-</option>
                        </select>
                    </div>
                    <div className="col-2 p-3">
                        <label for="starting-time" class="form-label h4">Starting Time</label>
                        <select class="form-select bg-dark text-light" id="starting-time" required="">
                            <option value="1">-</option>
                        </select>
                    </div>
                    <div className="col-1 p-3">
                        <label for="time" class="form-label h4">Time</label>
                        <select class="form-select bg-dark text-light" id="time" required="">
                            <option value="1">-</option>
                        </select>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </main>
    );
}