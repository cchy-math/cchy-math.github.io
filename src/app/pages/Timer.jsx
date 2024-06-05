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
                    <label for="secondary form" class="form-label">Form</label>
                    <select class="col m-3 form-select bg-dark text-light" id="secondary form" required="">
                        <option value="1">S1</option>
                        <option value="2">S2</option>
                        <option value="3">S3</option>
                        <option value="4">S4</option>
                        <option value="5">S5</option>
                        <option value="6">S6</option>
                    </select>
                    <label for="subject" class="form-label">Subject</label>
                    <select class="col m-3 form-select bg-dark text-light" id="subject" required="">
                        <option value="1">S1</option>
                        <option value="2">S2</option>
                        <option value="3">S3</option>
                        <option value="4">S4</option>
                        <option value="5">S5</option>
                        <option value="6">S6</option>
                    </select>
                </div>
                
            </section>
            <section>

            </section>
        </main>
    );
}