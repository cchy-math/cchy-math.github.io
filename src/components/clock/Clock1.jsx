import './clock.css'
import './clock.js'

function Clock1() {
    return (
        <div className="clock1">
            <div className="clock1-body">
                <div className="sec-hand"><div className="sec"></div></div>
                <div className="min-hand"><div className="min"></div></div>
                <div className="hr-hand"><div className="hr"></div></div>
            </div>
        </div>
    );
}

export default Clock1;