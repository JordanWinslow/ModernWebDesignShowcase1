import React from "react"
import "./Card.css"

/* USING () INSTEAD OF {} IN AN ARROW FUNCTION IS AN IMPLICIT RETURN. */
const Card = props => (
  <div className="Card">
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
)

export default Card
