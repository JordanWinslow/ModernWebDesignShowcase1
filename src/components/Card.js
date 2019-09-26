import React from "react"
import "./Card.css" // This demonstrates how to use external CSS files instead of styled-components, though I prefer styled-components.

const Card = props => (
  <div className="Card">
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
)

export default Card
