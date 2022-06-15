import React from 'react'
import Github from '../images/github.png'

export default function Footer() {
    return (
        <div className='footer'>
            <a href='https://github.com/h-jaffery'><img src={Github} alt='githubicon'/></a>
            <p>	&copy; Hasnain Jaffery 2022</p>
        </div>
    )
}