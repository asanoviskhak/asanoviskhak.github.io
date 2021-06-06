import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import Cursor from './cursor/cursor';
import { Link } from "react-router-dom";
const Home=()=>{
    useEffect(() => {
        const cursor = new Cursor(document.querySelector(".cursor"));
    }, [])
    const transition = { duration: 0.6, ease: [0.45, 0.15, 0.25, 0.95] };
    return (
        <>
        <motion.div className="div2" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay:.2, ...transition}}} exit={{opacity:0}}>
            <div className="main-content" >
                <Link to='/me'><div className="title cursor-item">ISKHAK ASANOV</div></Link>
                <div className="title2">
                <span className="cursor-item-link with-image" data-image="Bulut" >WEB DEVELOPER </span>
                    BASED IN <span className="cursor-item-link with-image" data-image="Ulsan" >ULSAN, </span>
                    SOUTH KOREA
                </div>
            </div>
        </motion.div>
        </>
    )
    
}
export default Home;
