import React from 'react';
import { useState } from 'react'
import '../Login/Login.css'
import Form from '../Form/Form';


const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    let lists = [
        {
            description: "Username",
            type: "text",
            placeholder: "",
            value: username,
            setValue: setUsername,
        },
        {
            description: "Email",
            type: "text",
            placeholder: "",
            value: email,
            setValue: setEmail,
        },
        {
            description: "Password",
            type: "password",
            placeholder: "",
            value: password,
            setValue: setPassword,
        },
        {
            description: "Confirm Password",
            type: "password",
            placeholder: "",
            value: confirmPassword,
            setValue: setConfirmPassword,
        },
    ]

    return(
        <div className="login">
            <div className="loginForm">
                <h2 className="heading">
                    Sign Up
                </h2>
                <form>
                    <Form lists = {lists}/>
                </form>
                <br/>
                <div className="row button">
                    <button>
                        Sign Up
                    </button>
                </div><br/><br/>
                <p className="last-line">By signing up, you are agreeing with our Terms & Conditions</p>                
            </div>
        </div>
    )
}

export default SignupForm;