import React from 'react';
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '' })
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


                    <CustomButton type="submit">Log In</CustomButton>
                </form>
            </div>
        )
    }
}

export default LoginForm;