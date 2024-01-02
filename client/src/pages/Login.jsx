import React, { useState } from 'react'
import "./Register.css"
import {    Link, useNavigate } from "react-router-dom"
import axios from "axios"
import {useDispatch} from "react-redux"
import { showLaoding, hideLoading } from '../fetures/alertSlice'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [user, setuser ] = useState({
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

const submitHandler = async(e) => {
  e.preventDefault()
  try {
    dispatch(showLaoding())
    console.log(user);
    const res = await axios.post(`http://localhost:8080/api/v1/user/login`, user)
    dispatch(hideLoading())
    if(res.data.success) {
        localStorage.setItem("token", res.data.token)
        console.log("Login Successfully");
        navigate("/")
    } else {
      dispatch(hideLoading())
        console.log("Login failed");
    }

} catch(e) {
  dispatch(hideLoading())
    console.log(e);
}
}
  return (
    < div className="registration form">
        <div className="container">
        <input type="checkbox" id="check"/>
        <div className="login form">
        <header>Login</header>
        <form action="#" onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your name" name='email' value={user.email}  onChange={handelChange}/>
        <input type="password" placeholder="Enter your password" name='password' value={user.password} onChange={handelChange}/>
            <a href="#">Forgot password?</a>
            <input type="submit" className="button" value="Login" />
        </form>
        <div className="signup">
            <span className="signup">Don't have an account?
            <label htmlFor="check" > <Link to="/register">   Register </Link></label>
            </span>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Login
