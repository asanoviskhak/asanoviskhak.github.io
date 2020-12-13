
import React,{Component} from 'react';
import GetInTouch from '../components/images/getInTouch.svg'

export default class Footer extends Component{
    render(){
        return (
            <>
            <div className="div3">
                <div className="footer">
                <hr className="horizontal-line"></hr>
                <ul className="cursor-item-link">
                    <li><a className="link" href="https://github.com/asanoviskhak">github</a></li>
                    <li><a className="link" href="https://github.com/asanoviskhak">github</a></li>
                    <li><a className="link" href="https://github.com/asanoviskhak">github</a></li>
                    <li><a className="link" href="https://github.com/asanoviskhak">github</a></li>
                    <li><a className="link" href="https://github.com/asanoviskhak">github</a></li>
                </ul>
                </div>
            </div>
            
            <div className="div4">
                <div className="git-div">
                    <img typeof="svg" className="git" src={GetInTouch} ></img>
                </div>
            </div>
        </>    
        )
    }
}




