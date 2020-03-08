import React from 'react';
import { Link } from 'react-router-dom';
import './headerLogo.styles.css';
import SFRlogo from '../../img/SFRlogo.png';
import Social from './../Navibar/social';

const HeaderLogin = () => {
    return(
        <div className="header-wrapper">
            <div className="navbrand">
                <Link to="/" >
                    <img src={SFRlogo} alt="logo" />
                </Link>
            </div>
            <div>
                <Social />
            </div>
        </div>
    )
}

export default HeaderLogin;