import React,{Component} from 'react';
import { Card, Badge } from 'react-bootstrap';
import email_min from './images/email-min.png';

var pfolio = new Map();
pfolio=[
    "achimera",{
        "image": email_min,
        "type":"Full-stack",
        "title":"Website for Achimera",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content",
        "url":"#"
    },
    "bulut",{
        "image": email_min,
        "type":"Full-stack",
        "title":"Hello World!",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content",
        "url":"#"
    },
    "achimera",{
        "image": email_min,
        "type":"Full-stack",
        "title":"Website for Achimera",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content",
        "url":"#"
    },
    "achimera",{
        "image": email_min,
        "type":"Full-stack",
        "title":"Website for Achimera",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content",
        "url":"#"
    },
    
]

export default class Works extends Component{
    render(){
        return (
            pfolio.map((value)=>(
                (value.title) ?
                    <div className="work">
                        <Card>
                            <Card.Img variant="top" src={value.image} />
                            <Card.Body>
                                <Card.Title><h4>{value.title}</h4></Card.Title>
                                <Badge variant="secondary">{value.type}</Badge>
                                <Card.Text>
                                    <h5>
                                    {value.description}
                                    </h5>
                                </Card.Text>
                                <button className="buttn"><a href={value.url}>View site</a></button>
                            </Card.Body>
                        </Card>
                    </div>
                    : 
                    ""
            ))
        )
    }
}