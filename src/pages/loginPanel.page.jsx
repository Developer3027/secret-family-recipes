import React from 'react';
import './LoginPanel.styles.scss';

import LoginForm from '../components/Login/LoginForm.component';

const LoginPanel = () => {

    return(
        <div className="log-panel-wrapper">
                <LoginForm />
        </div>
    )
}

export default LoginPanel;