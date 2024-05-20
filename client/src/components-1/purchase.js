import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Purchase = () => {
    const [data,setData] = useState({
        email : '',
        cart : '',
        quantity : '',
        address : ''
    })
    const {email,cart,quantity,address} = data;
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/purchase",data).then(
            res => {alert(res.data)}
        )
    }
    return(
        <div>
            <Link to="/home" className="btn btn-primary">Home</Link>
            <center>
            <h1 id="h1">Purchasing</h1>
            <fieldset>
                <form onSubmit={submitHandler} id="form">
                    <input type="email" placeholder="Enter consumer email" name="email" value={email} onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <input type="text" placeholder="Enter your cart" name="cart" value={cart} onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <input type="text" placeholder="Enter quantity/kgs/liters/dozens" name="quantity" value={quantity} onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <input type="text" placeholder="Enter your Address" name="address" value={address} onChange={changeHandler} id="input" className="btn btn-light" required/><br/>
                    <button type="submit" id="button" className="btn btn-warning">Buy</button>
                </form>
            </fieldset>
            </center>
        </div>
    )
}
export default Purchase;