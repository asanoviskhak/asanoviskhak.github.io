import React, {useEffect} from 'react'
import { motion } from "framer-motion";
import Cursor from './cursor/cursor';
import './styles/me.scss'

export default function Me() {    
    const transition = { duration: 0.6, ease: [0.45, 0.15, 0.25, 0.95] };
    useEffect(() => {
        const cursor = new Cursor(document.querySelector(".cursor"));
    }, [])
    return (        
        <motion.div className="div2" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay:.2, ...transition}}} exit={{opacity:0}}>
            
            <div className="about-list">
                
                <div className="about">
                    <p>Full name</p>
                    <h2>Iskhak Asanov</h2>
                </div>
                <div className="about">
                    <p>Education</p>
                    <h2>• UNIST</h2>
                    <h4 className="about-sub">BS in Computer Science</h4>
                    <p className="about-meta">2017.9 - 2022.7 | South Korea</p>
                    <hr/>
                    <h2>• Sema</h2>
                    <h4>Kyrgyz-Turkish lyceum</h4>
                    <p>2012.9 - 2017.7 | Kyrgyzstan</p>
                </div>
                <div className="about">
                    <p>Experience</p>
                    <h2>• Bilerman</h2>
                    <h4 className="about-sub">Frontend Engineer</h4>
                    <p>2021.1 - Current | Remote</p>
                    <hr/>
                    <h2>• Juice Inc.</h2>
                    <h4 className="about-sub">Frontend Engineer</h4>
                    <p>2021.1 - 2021.6 | South Korea</p>
                    <hr/>
                    <h2>• Idea LLC.</h2>
                    <h4 className="about-sub">Frontend Engineer Intern</h4>
                    <p>2019.1 - 2019.7 | Kyrgyzstan</p>
                </div>
                <a href="./files/IskhakAsanovCV.pdf" className="cursor-item-link" download>
                    <div className="about invert">
                        <p>CV</p>
                        <h2>• Download ↧</h2>
                    </div>
                </a>                     
            </div>
        
        </motion.div>
    
    )
}
