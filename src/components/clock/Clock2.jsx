import './clock.css'
import './clock.js'

function Clock2() {
    return (
        <div className="clock2">
            <div className="clock2-body">
                <div className="wrapper">
                    <div className="display"><div className="time"></div></div>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default Clock2;