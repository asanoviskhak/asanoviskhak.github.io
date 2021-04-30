import React, { Component, useEffect } from 'react'

import Cursor from './cursor/cursor';
const Home=()=>{
    useEffect(() => {
        const cursor = new Cursor(document.querySelector(".cursor"));
    }, [])
    
    return (
        <>
        <div className="div2">
            <div className="main-content" >
                <div className="title">ISKHAK ASANOV</div>
                <div className="cursor-item title2">
                    WEB DEVELOPER 
                    BASED IN ULSAN,
                    SOUTH KOREA
                </div>
            </div>
        </div>
        </>
    )
    
}
export default Home;
