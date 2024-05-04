import '../../components/clock/clock.css'
import '../../components/clock/clock.js'

export default function ClockDisplay1() {
    return (
        <main className="container col-lg-10 col-9">
            <div className="HeaderHeight"></div>
            <div className="container">
                <h1>Clock 1</h1>
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
                    </div>
                    <div className="card-footer">
                        <p className="invisible">Invisible Text</p>
                    </div>
                </div>
            </div>
        </main>
    );
}