
import React,{Component} from 'react';
import ScriptTag from 'react-script-tag';
import main from '../main';
export default class Intro extends Component{
    render(){
        return (
            <div className="box content">
                <span className="main_name" id="main_title"><span id="placehold" className="hidden">Hello world!</span> </span>
                <ScriptTag src={main} />
                {/* <span className="main_name" id="blinker">|</span> */}
            </div>
        );
    
    }
}