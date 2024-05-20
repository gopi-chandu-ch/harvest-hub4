import React,{useState,useContext} from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from '../App'


const Login = () => {
    const [token,setToken] = useContext(store);
    const [data,setData] = useState({
        email : '',
        password : ''
    })
    const {email,password} = data;
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/login",data).then(
            res => {setToken(res.data.token)}
        )
    }
    if(token){
        return <Navigate to="/home"/>
    }
    return(
        <div id="div">
           <center><h1 id="h1">harvest hub</h1>
            <fieldset id="fieldset">
                <form onSubmit={submitHandler} id="form">
                    <input type="email" placeholder="Email" value={email} name="email" onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <input type="password" placeholder="Password" value={password} name="password" onChange={changeHandler} className="btn btn-light" id="input" required/><br/>
                    <button type="submit" className="btn btn-primary" id="button">Login</button><br/>
                    <p>if you don't have account <Link to="/register">Sign up</Link></p><hr/>
                </form>
            </fieldset>
            </center>
        </div>
    )
}
export default Login;