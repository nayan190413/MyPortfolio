import React from 'react';
import "../App.css";
import { Accordion, Card } from 'react-bootstrap';

const Accodion=(props)=>{
    return(<>
    <Accordion className="my-1">
          <Card className="cardcol">
            <Accordion.Toggle as={Card.Header} eventKey="0" >
              {props.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="cardbut">{props.text}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
    </>);
}
export default Accodion;  