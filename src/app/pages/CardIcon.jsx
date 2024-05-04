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
        <div className="card" style={{'width': '100%'}}>
            <div className="card-header text-center h4">
                <p className="invisible">Invisible Text</p>
            </div>
            <ul className="container">
                <div className="row">
                    <li className="col-1">
                        <a href="https://mail.google.com/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <EnvelopeFill className="bi" />
                            Gmail
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://www.office.com/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <Windows className="bi" />
                            CUHK Mail
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://portal.cuhk.edu.hk/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <MortarboardFill className="bi" />
                            CUSIS
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://blackboard.cuhk.edu.hk/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <PencilFill className="bi" />
                            BlackBoard
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://www.gradescope.com/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <Bank2 className="bi" />
                            Gradescope
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://www.math.cuhk.edu.hk/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <Meta className="bi" />
                            CUHK MATH
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://drive.google.com/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <Google className="bi" />
                            Google Drive
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <Youtube className="bi" />
                            YouTube
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://console.cloud.google.com/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <Clouds className="bi" />
                            Google Cloud
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://discord.com/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <Discord className="bi" />
                            Discord
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <Facebook className="bi" />
                            Facebook
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://github.com/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <Github className="bi" />
                            GitHub
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://www.geogebra.org/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <BoundingBoxCircles className="bi" />
                            Geogebra
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://www.math3d.org/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <Box className="bi" />
                            Math3D
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://vdoc.pub/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <FileEarmarkText className="bi" />
                            VDOC.PUB Library
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://acgsecrets.hk/" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <Tv className="bi" />
                            ACG Secrets.HK
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://loader.to/en58/youtube-wav-converter.html" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <Download className="bi" />
                            YouTube to .wav
                        </div>
                        </a>
                    </li>
                    <li className="col-1">
                        <a href="https://wiwi.video" target="_blank" rel="noreferrer">
                        <div className="icon">
                            <MusicNoteList className="bi" />
                            Wiwi Video
                        </div>
                        </a>
                    </li>
                </div>
            </ul>
            <div className="card-footer">
                <p className="invisible">Invisible Text</p>
            </div>
        </div>
    );
}
                
