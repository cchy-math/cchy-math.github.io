import React from 'react';
import {
    Bank2,
    BoundingBoxCircles,
    Box,
    Clouds,
    Discord,
    Download,
    EnvelopeFill,
    Facebook,
    FileEarmarkText,
    Github,
    Google,
    Instagram,
    Meta,
    MortarboardFill,
    MusicNoteList,
    PencilFill,
    Tv,
    Twitter,
    Windows,
    Youtube
} from 'react-bootstrap-icons';

import '../../components/icon/icon.css'
import '../../components/icon/icon.js'

export default function CardIcon() {
    return (
        <div class="row mb-2">
            <div class="col-md-4">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">
                            World
                        </strong>
                        <h3 class="mb-0">
                            Featured post
                        </h3>
                        <div class="mb-1 text-muted">
                            Nov 12
                        </div>
                        <p class="card-text mb-auto">
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                        </p>
                        <a href="#" class="stretched-link">
                            Continue reading
                        </a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <svg class="bd-placeholder-img" width="177" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
                
