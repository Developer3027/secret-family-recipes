import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utilis';
import './headerLogo.styles.css';
import SFRlogo from '../../img/SFRlogo.png';

const HeaderLogin = ({currentUser}) => {
    return(
        <div className="header-wrapper">
            <div className="navbrand">
                <Link to="/" >
                    <img src={SFRlogo} alt="logo" />
                </Link>
            </div>
            <div >
                {
                    currentUser 
                    ?   <Link to="/" ><div className="head-wrapper" onClick={ () => auth.signOut() }>Log Out</div></Link>
                    :   <Link to="/login"><div className="head-wrapper">Log In</div></Link>
                }
            </div>
        </div>
    )
}

export default HeaderLogin;