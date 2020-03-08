import React from 'react';
import './LoginPanel.styles.scss';

import LoginForm from '../components/Login/LoginForm.component';
import RegisterForm from '../components/RegisterForm/registerForm.component';

const LoginPanel = () => {

    return(
        <div className="log-panel-wrapper">
                <LoginForm />
                <RegisterForm />
        </div>
    )
}

export default LoginPanel;