import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    return (
        <header>
            <FontAwesomeIcon icon={faEarthEurope} /> My Travel Journal
        </header>
    )

}