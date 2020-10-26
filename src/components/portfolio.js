
import React,{Component} from 'react';
import { Card, Badge } from 'react-bootstrap';
import email_min from './images/email-min.png';
export default class Portfolio extends Component{
    render(){
        return (

            <div className="box portfolio">
                <div className="work">
                <Card >
                    <Card.Img variant="top" src={email_min} />
                    <Card.Body>
                    <Badge variant="secondary">UI/UX</Badge>
                    <Card.Title><h3>Work #1</h3></Card.Title>
                    <Card.Text>
                        <h5>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </h5>
                    </Card.Text>
                    <a href="#">Go somewhere</a>
                    </Card.Body>
                </Card>
                </div>
                <div className="work">
                <Card>
                    <Card.Img variant="top" src={email_min} />
                    <Card.Body>
                    <Card.Title><h3>Work #2</h3></Card.Title>
                    <Card.Text>
                        <h5>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </h5>
                    </Card.Text>
                    <a href="#">Go somewhere</a>
                    </Card.Body>
                </Card>
                </div>
                <div className="work">
                <Card >
                    <Card.Img variant="top" src={email_min} />
                    <Card.Body>
                    <Card.Title><h3>Work #3</h3></Card.Title>
                    <Card.Text>
                        <h5>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </h5>
                    </Card.Text>
                    <a href="#">Go somewhere</a>
                    </Card.Body>
                </Card>
                </div>
                <div className="work">
                <Card >
                    <Card.Img variant="top" src={email_min} />
                    <Card.Body>
                    <Card.Title><h3>Work #4</h3></Card.Title>
                    <Card.Text>
                        <h5>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </h5>
                    </Card.Text>
                    <a href="#">Go somewhere</a>
                    </Card.Body>
                </Card>
                </div>
            </div>

        )
    }
}