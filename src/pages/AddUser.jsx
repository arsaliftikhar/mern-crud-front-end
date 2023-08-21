import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const AddUser = () => {

  const data = {name:"",email:"",age:""};
  const [inputData,setInputData] = useState(data);
  const navigate = useNavigate();

  const handleData = (e)=>{
    setInputData({...inputData,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    axios.post("http://192.168.100.2:5000/create-user",inputData)
    .then((response)=>{
      console.log(response)
      if(response.data)
      {
        navigate("/");
      }
      
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className='container'>
        <div className="row">
          <div className="offset-sm-2 col-sm-8">
              <div className="card mt-5">
                <div className="card-header">
                  <h3>Register user</h3>
                </div>
                <div className="card-body">
                  <form action="">
                    <input className='form-control mb-3' value={inputData.name} onChange={handleData} name='name' type="text" placeholder='Enter name' />
                    <input className='form-control mb-3' value={inputData.email} onChange={handleData} name='email' type="email" placeholder='Enter email' />
                    <input className='form-control mb-3' value={inputData.age} onChange={handleData} name='age' type="number" placeholder='Enter age' />
                    <input className='btn btn-success' onClick={handleSubmit} type="button" value="Register"/>
                  </form>
                </div>
                <div className="card-footer">
                  <Link to="/" className='btn btn-primary'>Back</Link>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AddUser