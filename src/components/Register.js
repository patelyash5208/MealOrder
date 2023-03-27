import React, { useState } from 'react'
import { NavLink , useNavigate} from 'react-router-dom'

function Register() {
    const [user,setuser]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate();
    const registration=async()=>{
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
             "email":user.email,
             "password":user.password
           });
           
           let response = await fetch("https://localhost:7238/api/Users", { 
             method: "POST",
             body: bodyContent,
             headers: headersList
           });
           
           let data = await response.json();
           console.log(data);
           return data
           

    }
    const handleChange=(e)=>{
        setuser((pre)=>({
          ...pre,[e.target.name]:e.target.value
        }))
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        registration().then(() => navigate("/"));
      }
  return (
    <>
    <h2 className="d-flex justify-content-center">REGISTER</h2>
    <div className='container m-3' >
      <form >
        <div className="mb-3"><input className="form-control" type="email" name="email" onChange={handleChange} value={user.email} placeholder="Enter Email" /></div>
        <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Enter Password" onChange={handleChange} value={user.password}/></div>
        <div className="mb-3">
          <NavLink className="btn btn-primary shadow d-block w-100"  to="/"type='button' onClick={handleSubmit}>ADD</NavLink>
          </div>
      </form>
    </div>
    </>
  )
}

export default Register