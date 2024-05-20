import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [data,setData] = useState({
        username : '',
        email : '',
        password : '',
        confirmpassword : ''
    })
    const {username,email,password,confirmpassword} = data
    const changeHandler = e =>  {
        setData({...data,[e.target.name]:e.target.value})
    }
   const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:5000/register",data).then(
            res => {console.log(res.data)}
        )
    }
    
    return(
        <div>
            <center>
            <h1 id="h1">harvest hub</h1>
            <fieldset id="fieldset">
                <form onSubmit={submitHandler} id="form">
                    <input type="text" placeholder="Enter Username" value={username} name="username" onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <input type="email" placeholder="Enter valid Email" value={email} name="email" onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <input type="password" placeholder="Create Password" value={password} name="password" onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <input type="password" placeholder="Confirm Password" value={confirmpassword} name="confirmpassword" onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <button type="submit" id="button" className="btn btn-primary">Create</button><br/>
                    <p> Do you have an Account? <Link to="/login">Sign in</Link></p><hr/>
                </form>
            </fieldset>
            </center>
        </div>
    )
}
export default Register;