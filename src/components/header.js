
import React,{Component} from 'react';

export default class Header extends Component{
    render(){
        return (
            
            <div className="box header">
                <ul>
                    <li className="i-portfolio"><a href="#">PORTFOLIO</a></li>
                    <li className="i-profile"><a href="#">PROFILE</a></li>
                    <li className="i-contact"><a href="mailto:iskhak@iskhakasan.tech">CONTACT</a></li>
                </ul>      
            </div>

        );
    }
}