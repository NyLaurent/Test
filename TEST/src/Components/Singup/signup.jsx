import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import './signup.css'

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://localhost/api/users";
            const { data: res } = await axios.post(url, data)
            navigate("/login")
            console.log(res.message)
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
        <div className="signup_container">
            <div className="signup_form_container">
                <div className="left">
                    <h1>Welcome back</h1>
                    <Link to='/login'>
                        <button type='button' className="white_btn">
                            Sign In
                        </button>
                    </Link>
                </div>
                <div className="right">
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

export default Signup
