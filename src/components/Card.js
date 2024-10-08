import React from 'react';

export default function Card(props) {
  return(
    <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card-image"/>
      <div className="card-content">
        <div className="card-location">
          <p className="p-location">{props.location}</p>
          <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <p className="p-date">{props.startDate} - {props.endDate}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
