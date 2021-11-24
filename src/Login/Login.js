import React from 'react';
import { useState } from 'react'
import './Login.css'
import Form from '../Form/Form'
import {Link} from 'react-router-dom'
// import * as AiIcons from 'react-icons/ai'
// import * as RiIcons from 'react-icons/ri'


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let lists = [
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
    ]

    return(
        <div className="login">
            <div className="loginForm">
                <h2 className="heading">
                    Login
                </h2>
                <form>
                    <Form lists = {lists}/>
                </form>
                <br/><br/>

                <div className="row button">
                    <button>
                        Login
                    </button>
                </div>
                <br/><br/>
                <p className="last-line">Don't have an account? <Link to="/signup" className="signup-link">Sign Up.</Link></p>
            </div>
        </div>
    )
}

export default LoginForm;