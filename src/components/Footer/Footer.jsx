import React from 'react';
import { Input } from '../../components'
import plusSolid from '../../assets/plus-solid.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-add_button">
                <img src={plusSolid} alt="Upload" className="footer-add_button-icon" />
            </div>
            <Input />
        </div>
    )
}

export default Footer