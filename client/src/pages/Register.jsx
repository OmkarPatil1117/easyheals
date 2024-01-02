import React, { useState } from 'react'
import {    Link, useNavigate } from "react-router-dom"
import "./Register.css"
import axios from "axios"
import {useDispatch} from "react-redux"
import { showLaoding, hideLoading } from '../fetures/alertSlice'

const Register = () => {  
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [user, setuser ] = useState({
        name : "",
        email : "",
        password : "",
    })

const handelChange = (e) => {
    const { name, value } = e.target
    setuser({
        ...user,
        [name] : value
    })
}

const submitHandler =  async(e) => {
    e.preventDefault()
    try {
        dispatch(showLaoding())
        const res = await axios.post(`http://localhost:8080/api/v1/user/register`, user)
        dispatch(hideLoading())
        if(res.data.success) {
            console.log("Register Successfully");
            navigate("/login")
        } else {
            dispatch(hideLoading())
            console.log("Registration failed");
        }

    } catch(e) {
        console.log(e);
    }
}


  return (
    < div className="registration form">
    <div className="container">
    <input type="checkbox" id="check"/>
    <div className="login form">
    <header>Register</header>
    <form action="#" onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your name" name='name' value={user.name}  onChange={handelChange}/>
        <input type="text" placeholder="Enter your email" name='email' value={user.email} onChange={handelChange}/>
        <input type="password" placeholder="Enter your password" name='password' value={user.password} onChange={handelChange}/>
        <input type="password" placeholder="Re-Enter your password" name='reEnterPassword' value={user.reEnterPassword} onChange={handelChange}/>
        <input type="submit" className="button" value="Register" />
    </form>
    <div className="signup">
            <span className="signup">Already have an account  
            <label htmlFor="check" > <Link to="/login">   Login </Link> </label>
            </span>
        </div>
    </div>
</div>
</div>
  )
}

export default Register
