import './clock.css'
import './clock.js'

function Clock1() {
    return (
        <div className="clock1">
            <div class="clock1-body">
                <div class="sec-hand"><div class="sec"></div></div>
                <div class="min-hand"><div class="min"></div></div>
                <div class="hr-hand"><div class="hr"></div></div>
            </div>
        </div>
    );
}

export default Clock1;