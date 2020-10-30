import React,{useState} from 'react';
import { Card, Badge } from 'react-bootstrap';
import email_min from './images/email-min.png';

var pfolio = new Map();
pfolio=[
    "achimera",{
        "image": "",
        "type":"Full-stack",
        "title":"Website for Achimera",
        "description": "Website to show the table with the list of those who need a help or who can help in the pandemic situation.",
        "url":"https://achimera.team"
    },
    "leaf",{
        "image": "",
        "type":"Full-stack",
        "title":"Website for Leaf OCS",
        "description": "Introductory website for the Organic Cleaning company in Bellevue, Washington.",
        "url":"https://leafocs.com"
    },
    "ask",{
        "image": "",
        "type":"Full-stack",
        "title":'Website for Consulting Company "Ask"',
        "description": "Website where customers are able to contact with company's staff, alongside learn about programs the company offer.",
        "url":"https://ask.kg"
    },
    "achimera",{
        "image": "",
        "type":"UI/UX",
        "title":'Carpooling application "KETTIK"',
        "description": 'UI and UX design for mobile app "KETTIK", currently deprecated',
        "url":"#"
    },
    
]

export default function Works() {
    const [state, setState] = useState(0);
    return (
        pfolio.map((value)=>(
            (value.title) ?
            <div>
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
                            <button className="buttn" onClick={()=>{(state===1)?setState(0):setState(1)}}><a rel="noreferrer" target="_blank" href={value.url}>View site</a></button>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
                : 
                ""
        ))
    )
}