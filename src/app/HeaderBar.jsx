import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/button/button.css'
import '../components/button/button.js'
import '../components/scrollbar/scrollbar.css'
import '../components/scrollbar/scrollbar.js'

export default function HeaderBar() {
  return (
    <header>
      <div class="row align-items-center">
        <div class="col">
          <NavLink to="menu"><button className="button-rainbow p-1 m-1 col-1" style={{'width': '25%', 'height': '100%'}}>Menu</button></NavLink>
        </div>
        <div class="col">
        CCHY MATH
        </div>
        <div class="col">
        </div>
      </div>
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" />
      </div>
    </header>
  );
}