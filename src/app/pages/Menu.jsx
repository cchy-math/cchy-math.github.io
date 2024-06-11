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
                <div className="row align-items-center p-5">
                    <div className="col-xs-1 col-lg-4">
                    </div>
                    <div className="col-xs-10 col-lg-4 p-3">
                        <NavLink to="/">
                            <button className="button-rainbow my-5" style={{'width': '100%'}}>
                                <h5>News</h5>
                            </button>
                        </NavLink>
                        <NavLink to="/math-drills-S123">
                            <button className="button-rainbow my-5" style={{'width': '100%'}}>
                                <h5>S1-S3 Math</h5>
                            </button>
                        </NavLink>
                        <NavLink to="/math-drills-DSEMathCore">
                            <button className="button-rainbow my-5" style={{'width': '100%'}}>
                                <h5>DSE Math (Compulsory Part)</h5>
                            </button>
                        </NavLink>
                        <NavLink to="/timer">
                            <button className="button-rainbow my-5" style={{'width': '100%'}}>
                                <h5>Timer</h5>
                            </button>
                        </NavLink>
                    </div>
                    <div className="col-xs-1 col-lg-4">
                    </div>
                </div>
            </div>
        </main>
    );
}