import React,{useContext,useEffect,useState} from "react";
import { store } from "../App";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const Home = () => {
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:5000/home",{
            headers : {
                'x-token' : token
            }
        }).then(res => {setData(res.data)}).catch(res => {console.error(res.err)})
    },[])
    if(!token){
        return <Navigate to="/login"/>
    }
    return(
        <div>
            <button onClick={() => {setToken(null)}}className="btn btn-danger" id="Link">Log out</button>
            {
                data && 
                   <h1 className="text-success" id="h11">welcome : {data.username}</h1>
            }
           <hr/> 
           <center>
           <div id="form">
            <Link to="/consumers" className="btn btn-secondary" id="button">Consumers</Link><br/>
            <Link to="/addconsumer" className="btn btn-warning" id="button">Add Consumer</Link><br/>
            <Link to="/purchase" className="btn btn-success" id="button">Purchase</Link><br/>
            <Link to="/orders" className="btn btn-info" id="button">Orders</Link>
            </div>
            </center>
        </div>
    )
}
export default Home;