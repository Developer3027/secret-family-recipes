import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleBtn, ...otherProps }) => {
    return(
        <button className={`${ isGoogleBtn ? 'is-google-btn' : '' } custom-button`} { ...otherProps }>
            {children}
        </button>
    )
}

export default CustomButton;