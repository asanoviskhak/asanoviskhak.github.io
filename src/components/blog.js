import React,{useEffect, useState} from 'react';

const proxy = "https://cors-anywhere.herokuapp.com/";


let port = []
export default function Portfolio(){
    //let pfolio = []
    const [state, setState] = useState(true);
    const [pfolio, setPfolio] = useState([{}]);
    
    useEffect( () => {
        let tester = []
        fetch(proxy+'https://api.telegra.ph/getPageList?access_token=c0a7505bf761d53fa81d36da5a6ff99e4da885fdbc24b34c6d9bde144d80&limit=12')
        .then(blob => blob.json())
        .then(data=>{
            data.result.pages.map((value)=>(
                tester.push({title:value.title, url: value.url, type:"Telegraph", views: value.views, author: value.author_name, path:value.path})
            ));
            JSON.stringify(tester);
            setPfolio(tester);
            setState(false);
            //console.log(data);
            return data;
        }).catch(e=>{
            console.log(e);
            return e;
        });
     }, [pfolio]) //Empty array for deps.

    if (state){
        return <div className="div2 blog-list"> <h3>Loading....</h3></div>;
    }
    return (
        <div className="div2">
            <div className="blog-list">
                {
                    pfolio.map((blog)=>(
                        <a href={blog.url} target="_blank"><div className="blog">
                            <h3>{blog.title}</h3>
                            {/* <a className="blog-link" href={blog.url} target="_blank">View post →</a> */}
                        </div></a>
                    ))
                }
            </div>
        </div>
    )
}
