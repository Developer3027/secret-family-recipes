import React from 'react';
import { Link } from 'react-router-dom';
import { Logout, LogIn, Twitter } from '../AppComponents/AllBtn';
import { auth } from '../../firebase/firebase.utilis';
import './navi.css';


const Social = ({ currentUser }) => {
    return(
        <div className="social-wrap">
            <div className="social-nav">
                <Twitter />
            </div>
            <div className="social-log-nav">
                {
                    currentUser 
                    ?   <Logout onClick={ alert('yep') } />
                    :   <LogIn />
                }
                
            </div>
        </div>
    )
}
export default Social;