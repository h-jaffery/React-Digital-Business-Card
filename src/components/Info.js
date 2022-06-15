import React from 'react'
import PersonImage from '../images/testimage.png'

export default function Info() {
    return(
        <div className='info'>
            <img src={PersonImage} alt='not me'/>
            <h1>Hasnain Jaffery</h1>
            <h2>Student</h2>
            <h3>hasnainjafery.website</h3>
        </div>
    )
}