import axios from "axios";
import React,{useState} from "react";
import { Link } from "react-router-dom";
const Addconsumer = () => {
    const [data,setData] = useState({
        name:'',
        address:'',
        email:'',
        password:'',
        vegetables:'',
        fruits:''
    })
    const {name,address,email,password,vegetables,fruits} = data;
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e => {
        axios.post('http://localhost:5000/addconsumer',data).then(
            res => alert(res.data)
        )
    }
    return(
        <div>
             <Link to="/home" className="btn btn-primary">Home</Link>
             <center>
            <h1 id="h1">Adding your profile !!</h1>
            <fieldset>
                <form onSubmit={submitHandler} id="form">
                    <input type="text" placeholder="Enter name" name="name" value={name} onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <input type="text" placeholder="Enter address" name="address" value={address} onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <input type="email" placeholder="Email" name="email" value={email} onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <input type="text" placeholder="Enter vegetables" name="vegetables" value={vegetables} onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <input type="text" placeholder="Enter fruits" name="fruits" value={fruits} onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <button type="submit" id="button" className="btn btn-primary">Add</button> 
                </form>
            </fieldset>
            </center>
        </div>
    )
}
export default Addconsumer;