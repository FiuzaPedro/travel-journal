import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import images from '../data/images';

export default function TravelItem(props) {
    function changeImg(e) {
        let currentThumbClicked = e.target.alt.split(' ')[0];
        let currentImg = document.getElementById(currentThumbClicked);
        currentImg.style.opacity = '0';
        setTimeout(() => {
            currentImg.setAttribute('src', e.target.src);
            currentImg.style.opacity = '1';
        }, 500);

    }
    const location = <FontAwesomeIcon icon={faLocationDot} />;
    const imagesInfo = images.map((value) => {
        return (
            <div className='thumbnailsContainer'>
                {value.title === props.title ? <img className='imgThumb' src={value.imageSrc} alt={value.title} onClick={changeImg} /> : ''}
            </div>
        )
    })
    return (
        <div className="divTravelItem">
            <div className="imgContainer"><img className='imgLarge' id={props.title.split(' ')[0]} src={props.imageUrl} alt={props.title} /></div>
            <div className="infoContainer">
                <p>
                    <span className='spanLocation'>{location} {props.location}</span> &nbsp;
                    <a className='aLinks' href={props.googleMapsUrl}>View on Google Maps</a>
                </p>
                <h1>{props.title}</h1>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>

                {imagesInfo}
            </div>

        </div>
    );
}