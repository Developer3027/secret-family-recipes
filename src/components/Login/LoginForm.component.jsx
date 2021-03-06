import React from 'react';
import { auth, signInWithGoogle } from './../../firebase/firebase.utilis';

import './loginForm.styles.scss';
import FormInput from '../inputs/form-input.components';
import CustomButton from './../Custom-Button/Custom-Button.component';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword( email, password );
            this.setState({ email: '', password: '' })
        }catch (error){
            console.error('error on login: ', error.message);
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className="log-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            
                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                        required
                        type="email"
                        name="email"
                        label="email"
                        value={ this.state.email } 
                        handleChange={ this.handleChange } />

                    <FormInput
                        required
                        name="password"
                        type="password"
                        label="password"
                        value={ this.state.password } 
                        handleChange={ this.handleChange }/>

                    <div className="buttons">
                        <CustomButton type="submit">Log In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleBtn >Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;