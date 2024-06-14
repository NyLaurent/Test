import React from 'react'
import { useState } from 'react'
import './signup.css'
import axios from 'axios'
import useNavigate from 'react-router-dom'

const signup = () => {
    const[data,setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""

    })
    const
    const navigate = useNavigate();

    const handleChange = ({
        currentTarget:input
    })=>{
        sendData({...data,[input.name]:input.value})
    }

    const handleSubmit =async(e)=>{
        e.preventDefault();
        try{
            const url ="https://localhost:/api/users";
            const {data:res}= await axios.post(url,data)
            navigate("/login")
            console.log(res.message)

        }catch(error){
            if(error.response && 
                error.response.status >= 400 &&
                error.response.status<=500

            )
            

        }
    }
  return (
    <div className={styles.signup_container}>
        <div className={styles.signup.form_container}>
            <div className={styles.left}>
                <h1>Welcome back</h1>
                <Link to='/login'>
                <button type='button' className={styles.white_btn}>

                    Sign In
                </button>
                </Link>
            </div>
            <div className={styles.right}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input 
                    type="text"
                    placeholder='First Name'
                    name='firstName'
                    onChange={handleChange}
                    value={data.firstName}
                    className={styles.input}
                     />
                        <input 
                    type="text"
                    placeholder='Last Name'
                    name='lastName'
                    onChange={handleChange}
                    value={data.lastName}
                    className={styles.input}
                     />
                        <input 
                    type="email"
                    placeholder='Email'
                    name='email'
                    onChange={handleChange}
                    value={data.email}
                    className={styles.input}
                     />
                        <input 
                    type="password"
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}
                    value={data.password}
                    className={styles.input}
                     />
                     <button type='submit' className={styles.green_btn}>
                        Sign Up
                     </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default signup