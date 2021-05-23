import React, { Component } from 'react'
import Kettik from "./images/kettik-work.png"
// import Ulsan from './images/ulsan.mp4'
export default class CursorImg extends Component {
    render() {
        return (
            <div className="cursor">
                <div className="cursor-media">
                    
                    <svg height="100" width="100">
                        <circle cx="50" cy="50" r="40" stroke-width="3" fill="#000000" opacity="0.85"/>
                    </svg>
                    {/* <video id="Ulsan" src={"videos/ulsan.mp4"} preload="auto" autoplay loop ></video>
                    <img id="Bulut" src={Kettik} alt="Bulut" /> */}
                    
                </div>
            </div>
        )
    }
}
