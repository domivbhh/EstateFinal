// import React from 'react'
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


export default function Signin() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate=useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success === false) {
        setError(true);
        return;
      }

      setError(false);
      navigate('/')
    } catch (err) {
      setLoading(false);
      setError(true);
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
      </form>
      <div className="flex gap-2 mt-5">
        <p>No account?</p>
        <Link to="/signup">
          <span className="text-blue-700">Sign-up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error && "Something went Wrong!"}</p>
    </div>
  );
}
