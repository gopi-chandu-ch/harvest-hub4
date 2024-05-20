import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
    const [count,setCount] = useState(0);
    const [orders,setOrders] = useState(null)
    const[data,setData] = useState({
        email : '',
        password : ''
    })
    const {email,password} = data;
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/orders',data).then(
            res => {setOrders(res.data[count])}
        )
    }
    return(
        <div>
            <Link to="/home" className="btn btn-primary">Home</Link>
            <center>
            <fieldset>
                <form onSubmit={submitHandler}> 
                    <input type="email" placeholder="email" name="email" value={email} onChange={changeHandler} id="input" className="btn btn-light"required/><br/>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={changeHandler} id="input" className="btn btn-light" required/><br/><hr/>
                    <button type="submit" id="button" className="btn btn-primary">Show orders</button>
                </form>
            </fieldset>
            <button onClick={() => setCount(count-1)} className="btn btn-warning" id="button1">preview</button>
            <button onClick={() => setCount(count+1)} className="btn btn-info" id="button1">next</button>
            {
                orders && 
                    <h4 id="h11" className="text-dark">Item : {orders.cart}</h4>
            }
            {
                orders && 
                <h4 id="h11">Quantity : {orders.quantity}</h4>
            }
            {
                orders && 
                <h4 id="h11">Address : {orders.address}</h4>
            }
            
            <h1 className="text-danger">You don't have orders yet !!</h1>
            </center>
        </div>
    )
}
export default Orders;