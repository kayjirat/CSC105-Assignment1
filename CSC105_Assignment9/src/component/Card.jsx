import React from "react";
import "../styles/card.css"

function Card(user) {
    const{name, job, hobby} = user;

      return (
        <div className="card-container">
            <p className="card-name">{name}</p>
            <p className="card-job">{job}</p>
            <p className="card-hobby">{hobby}</p>
        </div>

      );
}

export default Card;