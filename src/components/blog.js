import React,{useEffect, useState} from 'react';
import Cursor from './cursor/cursor';
import { motion } from "framer-motion";
import './styles/blog.scss'
export default function Portfolio(){
    //let pfolio = []
    const [state, setState] = useState(true);
    const [blog, setBlog] = useState([{}]);
    const transition = { duration: 0.6, ease: [0.45, 0.15, 0.25, 0.95] };
    useEffect( () => {
        const cursor = new Cursor(document.querySelector(".cursor"));
        let tester = []
        fetch('https://api.telegra.ph/getPageList?access_token=c0a7505bf761d53fa81d36da5a6ff99e4da885fdbc24b34c6d9bde144d80&limit=12')
        .then(blob => blob.json())
        .then(data=>{
            data.result.pages.map((value)=>(
                tester.push({title:value.title, url: value.url, type:"Telegraph", views: value.views, author: value.author_name, path:value.path})
            ));
            JSON.stringify(tester);
            setBlog(tester);
            setState(false);
            //console.log(data);
            return data;
        }).catch(e=>{
            console.log(e);
            return e;
        });
     }, [blog]) //Empty array for deps.

    if (state){
        return <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay:.2, ...transition}}} exit={{opacity:0}} className="div2 blog-list"> <h3>Loading....</h3></motion.div>;
    }
    return (
        <motion.div className="div2" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay:.2, ...transition}}} exit={{opacity:0}}>
            <div className="blog-list">
                {
                    blog.map((blog)=>(
                        <a href={blog.url} rel="noreferrer" target="_blank"><div className="blog cursor-item-link">
                            <h3>{blog.title}</h3>
                            {/* <a className="blog-link" href={blog.url} target="_blank">View post →</a> */}
                        </div></a>
                    ))
                }
            </div>
        </motion.div>
    )
}
