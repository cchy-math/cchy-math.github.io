import React from 'react';
import '../components/scrollbar/scrollbar.css'
import '../components/scrollbar/scrollbar.js'

export default function HeaderBar() {
    return (
		<header>
            Home Page
            <div class="progress">
				<div class="progress-bar progress-bar-striped progress-bar-animated" />
			</div>
        </header>
	);
}