import React from 'react'
import './Footer.css'
import LogoFooter from '../assets/img/Vector Smart Object.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='subfooter'>
                <div className='subbox'>
                    <p>Best solutions from</p>
                    <img src={LogoFooter} alt="LogoFooter" />
                </div>
                <div className='subbox'>
                    <h3>DOL Max Overlaminate Films</h3>
                    <h3>Why us</h3>
                    <h3>Enquire now</h3>
                </div>
            </div>
            <div className='subfooter'>
                <div className='footdivide'>
                    <ul>
                        <li>Avery Dennison Overlaminate</li>
                        <li>Avery Dennison Overlaminate Films</li>
                        <li>Avery Dennison Digital Overlaminate Films</li>
                        <li>Avery Dennison DOL Max</li>
                    </ul>
                </div>
                <div className='footdivide'>
                    <ul>
                        <li>Overlaminate</li>
                        <li>Overlaminate Films</li>
                        <li>Digital Overlaminate Films</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer