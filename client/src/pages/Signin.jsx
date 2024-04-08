// import React from 'react'
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { signInStart,signInFailure,signInSuccess } from "../redux/user/userSlice";
import {useDispatch,useSelector} from 'react-redux';
import OAuth from "../components/OAuth";



export default function Signin() {
  const [formData, setFormData] = useState({});
  const{loading,error}=useSelector((state)=>state.user)//name in the createSlice method
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        dispatch(signInStart())

      const res = await fetch('api/auth/signin',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data)
      
      
      if (data.success === false) {
        dispatch(signInFailure(data.error));
        return;
      }

      dispatch(signInSuccess(data));
      navigate('/')
         
      

    } catch (err) {
      dispatch(signInFailure(err))
    }
    
   
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Signin</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      
        <input
          onChange={handleChange}
          type="email"
          placeholder="email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
        >
          {loading ? "Loading" : "sign-in"}
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>No account?</p>
        <Link to="/signup">
          <span className="text-blue-700">Sign-up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5"> {error ? error || "Something went Wrong!" :''}</p>
    </div>
  );
}
