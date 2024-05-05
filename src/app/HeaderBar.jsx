import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/button/button.css'
import '../components/button/button.js'
import '../components/scrollbar/scrollbar.css'
import '../components/scrollbar/scrollbar.js'

export default function HeaderBar() {
  return (
    <header>
      CCHY MATH
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" />
      </div>
    </header>
  );
}