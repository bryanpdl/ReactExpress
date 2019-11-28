import React from 'react';
import './Cards.css';

const Card = props => (
    <div className="Card">
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </div>
)


export default Card;