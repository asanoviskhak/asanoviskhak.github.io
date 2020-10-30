
import React,{Component} from 'react';
import Works from './works';
export default class Portfolio extends Component{
    render(){
        return (
            
            <div className="box">
            <h3 className="p-title">My works:</h3>
                <div className="portfolio">
                    <Works/>
                    <script async src="https://comments.app/js/widget.js?3" data-comments-app-website="ImC35nOh" data-limit="6"/>
                </div>
                
            </div>
        )
    }
}