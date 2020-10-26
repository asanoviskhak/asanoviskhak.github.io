
import React,{Component} from 'react';
import Typewriter from 'typewriter-effect';

export default class Intro extends Component{
    render(){
        return (
            <div className="box content">
                <span className="main_name" id="main_title">
                    <Typewriter 
                        options={{
                            strings: ['Hey there!', 'Welcome to my page!', 'If you want to see my works, please go to Portfolio ...', 'And if you want to contact me, just go to Contact page'],
                            autoStart: true,
                            delay: 100,
                            deleteSpeed: 10,
                            loop: true,
                        }}
                    />                  
                </span>
                {/* <span className="main_name" id="blinker">|</span> */}
            </div>
        );
    }
}