import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {motion, useTransform, useViewportScroll} from 'framer-motion'
import Cursor from './cursor/cursor';
import Bulut from "./images/bulut-work.png";
export default function PortfolioDetails() {
    const [allowScroll, setAllowScroll] = useState(false)
    const ImageDetails = {
        width: "500px",
        height: "370px"
      }
    const transition = {duration:1.4, ease:[.6, .05, -.05, .9]}

    const {scrollYProgress} = useViewportScroll();
    const scaleImage = useTransform(scrollYProgress, [0,1], [1, 1.05])
    const {workId} = useParams()
    useEffect(() => {
        const cursor = new Cursor(document.querySelector(".cursor"));
        if (!allowScroll){
            document.querySelector("body").classList.add("no-scroll");
        }else{
            document.querySelector("body").classList.remove("no-scroll");
        }
    }, [allowScroll])
//     border-bottom-left-radius: 256px;
//   border-top-right-radius: 256px;
    return (
        <motion.div onAnimationComplete={()=>setAllowScroll(true)} className="div2" initial='initial' animate='animate' exit='exit'>
            <div className="portfolio">
                <motion.div animate={{height:"100%", marginBottom:"50px"}}  className="project-detail">
                    <motion.div 
                        className="project-detail-img cursor-item" 
                        initial={{width:550, height:420, borderBottomLeftRadius:"256px", borderTopRightRadius:"256px"}}
                        animate={{
                            width:"119%",height:"340px", borderBottomLeftRadius:"128px", borderTopRightRadius:"128px", position:"absoulte", x:"-19%",
                            transition: {delay:.2, ...transition}
                        }}
                        >
                    <div className="detail-img"  >
                        <motion.img style={{scale: scaleImage}} initial={{scale:1.05}} animate={{y:-400, transition: {delay:.2, ...transition}}}  src={Bulut} alt={workId}/>
                    </div>
                    </motion.div>
                    
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay:.6, ...transition}}}>
                        <h1>{workId}</h1>
                        <p>There we are going to have our details</p>
                </motion.div>
            </div>
        </motion.div>
    )
}
