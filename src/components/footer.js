
import React,{Component} from 'react';

export default class Footer extends Component{
    render(){
        return (
                <div className="box footer">
                    <ul className="social">
                        <li><a rel="noreferrer" target="_blank" href="https://github.com/asanoviskhak/">GITHUB</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/asanovpersonal/">FACEBOOK</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/iskhak-a-080466136/">LINKEDIN</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://t.me/iskhakasanov">TELEGRAM</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/iskhak_asanov/">INSTAGRAM</a></li>
                        <li><a rel="noreferrer" target="_blank" href="/">©redits</a></li>
                    </ul>
                    {/* <span className="credits">
                        <a href="https://www.flaticon.com/" title="Flaticon"> | Thanks to awesome icons</a>
                    </span> */}
                </div>
                
        )
    }
}




