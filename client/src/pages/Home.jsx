import React, { useState } from 'react'
// import 'homeStyle.css'

const Home = () => {
  const[todos,setTodos]=useState([])
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-700 '>Welcome to my Auth App</h1>
      <p className='mb-4 text-slate-800'>This is a Full stack web Application built with the MERN(MONGODB,EXPRESS,REACT JS,NODE JS) stack.It includes authentication features that allow users to signup ,login ,and logout and provides access to protected routes only for authenticated users</p>
    </div>
   
  );
}

export default Home
