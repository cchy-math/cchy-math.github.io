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
        <div class="col-2 col-md-3">
          <NavLink to="menu"><button className="button-rainbow">Menu</button></NavLink>
        </div>
        <div class="col-8 col-md-6">
        CCHY MATH
        </div>
        <div class="col-2 col-md-3">
        </div>
      </div>
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" />
      </div>
    </header>
  );
}