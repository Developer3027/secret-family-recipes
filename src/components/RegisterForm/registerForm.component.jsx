import React from 'react';

import FormInput from './../inputs/form-input.components';
import CustomButton from './../Custom-Button/Custom-Button.component';

import { auth, createUserProfileDocument } from './../../firebase/firebase.utilis';
import './registerForm.styles.scss';

class RegisterForm extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword) {
            alert("Those passwords do not match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument( user, { displayName });

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        }catch (error) {
            console.error('error creating user in register form', error.message);
        }
    }


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {

        const { displayName, email, password, confirmPassword } = this.state

        return(
            <div className="register-form-wrapper">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form className="register-form" onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                        required
                        type="text"
                        name="displayName"
                        label="Display Name"
                        value={displayName} 
                        onChange={this.handleChange} />
                    
                    <FormInput 
                        required
                        type="email"
                        name="email"
                        label="Email"
                        value={email} 
                        onChange={this.handleChange} />
                    
                    <FormInput 
                        required
                        type="password"
                        name="password"
                        label="Password"
                        value={password} 
                        onChange={this.handleChange} />

                    <FormInput 
                        required
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={confirmPassword} 
                        onChange={this.handleChange} />
                    
                    <CustomButton type="submit" >Register</CustomButton>
                </form>
            </div>
        )
    }
}

export default RegisterForm;
