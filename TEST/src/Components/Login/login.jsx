import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './login.css'

const Login = () => {
    const [data, setData] = useState({
        
        email: "",
        password: ""
    })
    const [error, setError] = useState("")
    

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://localhost/api/auth";
            const { data: res } = await axios.post(url, data)
            localStorage.setItem("token",res.data)
            window.location='/'
           
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }

    return (
        <div className="login_container">
            <div className="login_form_container">
                <div className="left">

                <form className="form_container" onSubmit={handleSubmit}>
                        <h1>Login to Your Account</h1>
                    
                        <input
                            type="email"
                            placeholder='Email'
                            name='email'
                            onChange={handleChange}
                            value={data.email}
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            className="input"
                        />
                        {error && <div className="error_msg">{error}</div>}
                        <button type='submit' className="green_btn">
                            Sign Up
                        </button>
                    </form>
                    
                </div>
                <div className="right">
                <h1>New Here?</h1>
                    <Link to='/signup'>
                        <button type='button' className="white_btn">
                            Sign Up
                        </button>
                    </Link>
                    <form className="form_container" onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder='First Name'
                            name='firstName'
                            onChange={handleChange}
                            value={data.firstName}
                            className="input"
                        />
                        <input
                            type="text"
                            placeholder='Last Name'
                            name='lastName'
                            onChange={handleChange}
                            value={data.lastName}
                            className="input"
                        />
                        <input
                            type="email"
                            placeholder='Email'
                            name='email'
                            onChange={handleChange}
                            value={data.email}
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            className="input"
                        />
                        {error && <div className="error_msg">{error}</div>}
                        <button type='submit' className="green_btn">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default  Login
