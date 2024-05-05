import React from 'react';
import '../../components/button/button.css'
import '../../components/button/button.js'
import '../../components/clock/clock.css'
import '../../components/clock/clock.js'
import { Link, NavLink, HeaderLink, Routes, Route } from 'react-router-dom';

export default function ClockDisplay() {
    return (
        <main className="container">
            <div className="HeaderHeight"></div>
            <div className="container">
                <div class="row align-items-center">
                    <div class="col">
                    </div>
                    <div class="col">
                        <NavLink to="/math"><button className="button-rainbow m-3" style={{'width': '100%'}}>News</button></NavLink>
                        <NavLink to="/math"><button className="button-rainbow m-3" style={{'width': '100%'}}>Exersice</button></NavLink>
                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>
        </main>
    );
}