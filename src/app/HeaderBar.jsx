import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/button/button.css'
import '../components/button/button.js'
import '../components/scrollbar/scrollbar.css'
import '../components/scrollbar/scrollbar.js'

export default function HeaderBar() {
  return (
    <header class="px-4">
      <div class="row align-items-center">
        <div class="col-lg-3 col-xs-2">
          <NavLink to="menu"><button className="button-rainbow">Menu</button></NavLink>
        </div>
        <div class="col-lg-6 col-xs-8">
        CCHY MATH
        </div>
        <div class="col-lg-3 col-xs-2">
        </div>
      </div>
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" />
      </div>
    </header>
  );
}