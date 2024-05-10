import React from 'react';
import '../../components/button/button.css'
import '../../components/button/button.js'
import '../../components/clock/clock.css'
import '../../components/clock/clock.js'
import { Link, NavLink, HeaderLink, Routes, Route } from 'react-router-dom';

export default function Menu() {
    return (
        <main className="container">
            <div className="HeaderHeight"></div>
            <div className="container">
                <div class="row align-items-center">
                    <div class="col-4">
                    </div>
                    <div class="col-4">
                        <NavLink to="/page"><button className="button-rainbow my-3" style={{'width': '100%'}}><h5>News</h5></button></NavLink>
                        <br/>
                        <NavLink to="/math-drills"><button className="button-rainbow my-3" style={{'width': '100%'}}><h5>Math Drills</h5></button></NavLink>
                    </div>
                    <div class="col-4">
                    </div>
                </div>
            </div>
        </main>
    );
}