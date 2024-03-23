import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'


function GameCard(props) {
    return (
        
        <Link key={props.idx} to={"/games/"+ (props.idx + 1)}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description || "Jogo Legal"}
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
        
      );
}

export default GameCard