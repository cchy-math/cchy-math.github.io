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
                    <div class="col-xs-1 col-lg-4">
                    </div>
                    <div class="col-xs-10 col-lg-4">
                        <NavLink to="/">
                            <button className="button-rainbow my-5" style={{'width': '100%'}}>
                                <h5>News</h5>
                            </button>
                        </NavLink>
                        <NavLink to="/math-drills-S123">
                            <button className="button-rainbow my-5" style={{'width': '100%'}}>
                                <h5>Math Drills S1-S3</h5>
                            </button>
                        </NavLink>
                        <NavLink to="/math-drills-DSEMathCore">
                            <button className="button-rainbow my-5" style={{'width': '100%'}}>
                                <h5>Math Drills DSE Math (Compulsory Part)</h5>
                            </button>
                        </NavLink>
                    </div>
                    <div class="col-xs-1 col-lg-4">
                    </div>
                </div>
            </div>
        </main>
    );
}