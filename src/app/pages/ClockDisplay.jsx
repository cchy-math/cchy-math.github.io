import '../../components/clock/clock.css'
import '../../components/clock/clock.js'
import { Link, NavLink, HeaderLink, Routes, Route } from 'react-router-dom';
import ClockDisplay1 from './ClockDisplay1.jsx';
import ClockDisplay2 from './ClockDisplay2.jsx';

export default function ClockDisplay() {
    return (
        <main className="container col-lg-10 col-9">
            <div className="HeaderHeight"></div>
            <div className="container">
                <h1>Clock Display</h1>
                <div className="card" style={{'width': '100%'}}>
                    <div className="card-header text-center h4">
                        <p className="invisible">Invisible Text</p>
                    </div>
                    <div className="row px-5">
                        <div className="clock1 col">
                            <div class="clock1-body">
                                <div class="sec-hand"><div class="sec"></div></div>
                                <div class="min-hand"><div class="min"></div></div>
                                <div class="hr-hand"><div class="hr"></div></div>
                            </div>
                        </div>
                        <div className="clock2 col">
                            <div class="clock2-body">
                                <div class="wrapper">
                                    <div class="display"><div class="time"></div></div>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <p className="invisible">Invisible Text</p>
                    </div>
                </div>
                <div className="HeaderHeight"></div>
                <h2>Clock</h2>
                <div className="row">
                    <NavLink to="clockdisplay1"><button className="button-rainbow m-3 col-3" style={{'aspect-ratio': '5'}}>Clock 1</button></NavLink>
                    <NavLink to="clockdisplay2"><button className="button-rainbow m-3 col-3" style={{'aspect-ratio': '5'}}>Clock 2</button></NavLink>
                </div>
                <Routes>
                    <Route path="clockdisplay1" element={<ClockDisplay1 />} />
                    <Route path="clockdisplay2" element={<ClockDisplay2 />} />
                </Routes>
            </div>
        </main>
    );
}