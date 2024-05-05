import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/button/button.css'
import '../components/button/button.js'
import '../components/scrollbar/scrollbar.css'
import '../components/scrollbar/scrollbar.js'

export default function HeaderBar() {
  return (
    <header class="px-4">
      <div class="row">
        <div class="col mt-1">
          <NavLink to="menu"><button className="button-rainbow mt-2">Menu</button></NavLink>
        </div>
        <div class="col">
          <p class="h2 mt-2">
            CCHY
          </p>
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