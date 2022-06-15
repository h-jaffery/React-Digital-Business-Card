import React from 'react'
import PersonImage from '../images/testimage.png'
import Mail from '../images/mail.svg'
import LinkedIn from '../images/linkedin.svg'

export default function Info() {
    return(
        <div className='info'>
            <img src={PersonImage} alt='not me'/>
            <h1>Hasnain Jaffery</h1>
            <h2>Computer Science Student</h2>
            <h3>hasnainjaffery.website</h3>
            <div className='info--buttons'>
                <a href='mailto: hasnain.jafferyy@gmail.com'>
                    <button type="button" className='email--button'>
                        <img src={Mail} alt='mail' className='button--icon'></img>
                        <span>Email</span>
                    </button>
                </a>
                <a href='https://www.linkedin.com/in/hasnain-jaffery/'>
                    <button type="button" className='linkedin--button'>
                        <img src={LinkedIn} alt='mail' className='button--icon'></img>
                        <span>LinkedIn</span>
                    </button>
                </a>
            </div>
        </div>
    )
}