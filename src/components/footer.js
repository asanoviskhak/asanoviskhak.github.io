
import React,{Component} from 'react';
import GetInTouch from '../components/images/getInTouch.svg'

export default class Footer extends Component{
    render(){
        return (
            <>
            <div className="div3">
                <div className="footer">
                    <ul className="cursor-item-link">
                        <li className="footer-link"><a className="link" href="https://github.com/asanoviskhak">github</a></li>
                        <li className="footer-link"><a className="link" href="https://t.me/iskhakasanov">telegram</a></li>
                        <li className="footer-link"><a className="link" href="https://instagram.com/iskhak_asanov">instagram</a></li>
                        <li className="footer-link"><a className="link" href="https://www.linkedin.com/in/iskhak-a-080466136/">linkedin</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="div4">
                <a href="mailto:hello@iskhakasan.tech">
                <div className="git-div cursor-item">
                    <img typeof="svg" alt="get in touch" className="git" src={GetInTouch} ></img>
                </div>
                </a>
            </div>
        </>    
        )
    }
}




