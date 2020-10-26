
import React,{Component} from 'react';

export default class Intro extends Component{
    render(){
        return (
            <div className="box content">
                <span className="main_name" id="main_title"><span id="placehold" className="hidden">Hello world!</span> </span>
                {/* <span className="main_name" id="blinker">|</span> */}
            </div>
        );
    
    }
}