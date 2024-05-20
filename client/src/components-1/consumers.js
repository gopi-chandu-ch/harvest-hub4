import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Consumers = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/consumers').then(
      res => { setData(res.data)}
    )
  },[])
  return(
    <div>
      <Link to="/home" className='btn btn-primary'>Home</Link>
      
      <ul type="bullet">
      {data.map(item => (<li><fieldset id='fieldsetC'>
        <p id='nli' className='text-dark'>{item.name}</p><br/>
        <p id='eli' className='text-primary'>{item.email}</p>
        <p id='eli' className='text-secondary'>{item.address}</p><hr/>
        <h4 className='text-success'>Vegetables</h4> <p className='text-secondary'>{item.vegetables}</p>
        <h4 className='text-warning'>Fruits</h4> <p className='text-secondary'>{item.fruits}</p>
        </fieldset></li>))}
      </ul>
    </div>
  )
}

export default Consumers;
