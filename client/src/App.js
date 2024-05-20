import React,{useState,createContext} from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Nav from "./components/nav";
import Register from "./components/register";
import Login from "./components/login";
import Addconsumer from "./components-1/addconsumer";
import Consumers from "./components-1/consumers";
import Purchase from "./components-1/purchase";
import Orders from "./components-1/orders";
import Home from "./components-1/home"



export const store = createContext();

const App = () => {
  const [token,setToken] = useState(null);
  return(
    <store.Provider value={[token,setToken]}>
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/register" Component={Register}/>
        <Route path="/login" Component={Login}/>

       <Route path="/home" Component={Home}/>
        <Route path="/addconsumer" Component={Addconsumer}/>
        <Route path="/consumers" Component={Consumers}/>
        <Route path="/purchase" Component={Purchase}/>
        <Route path="/orders" Component={Orders}/>


      </Routes>
      </BrowserRouter>
    </div>
    </store.Provider>
  )
}
export default App;