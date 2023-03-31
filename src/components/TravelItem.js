import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function TravelItem(props) {
    const location = <FontAwesomeIcon icon={faLocationDot} />;

    return (
        <div className="divTravelItem">
            <div className="imgContainer"><img src={props.imageUrl} alt={props.title} /></div>
            <div className="infoContainer">
                <p>
                    <span className='spanLocation'>{location} {props.location}</span> &nbsp;
                    <a className='aLinks' href={props.googleMapsUrl}>View on Google Maps</a>
                </p>
                <h1>{props.title}</h1>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}