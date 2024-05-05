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
                    <div class="col-5">
                    </div>
                    <div class="col-2">
                        <NavLink to="/math"><button className="button-rainbow" style={{'width': '100%'}}>News</button></NavLink>
                        <br/>
                        <NavLink to="/math"><button className="button-rainbow" style={{'width': '100%'}}>Coming Soon</button></NavLink>
                    </div>
                    <div class="col-5">
                    </div>
                </div>
            </div>
        </main>
    );
}