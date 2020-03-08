import React from 'react';
import { Link } from 'react-router-dom';
import { Logout, LogIn, Twitter } from '../AppComponents/AllBtn';
import './navi.css';


const Social = () => {
    return(
        <div className="social-wrap">
            <div className="social-nav">
                <Twitter />
            </div>
            <div className="social-log-nav">
                <Link to="/login">
                    <LogIn />
                </Link>

                <Logout />
            </div>
        </div>
    )
}
export default Social;