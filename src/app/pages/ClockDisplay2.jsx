import '../../components/clock/clock.css'
import '../../components/clock/clock.js'

export default function ClockDisplay2() {
    return (
        <main className="container col-lg-10 col-9">
            <div className="HeaderHeight"></div>
            <div className="container">
                <h1>Clock 2</h1>
                <div className="card" style={{'width': '100%'}}>
                    <div className="card-header text-center h4">
                        <p className="invisible">Invisible Text</p>
                    </div>
                    <div className="row px-5">
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
            </div>
        </main>
    );
}