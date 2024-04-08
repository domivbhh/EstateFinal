import React from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {
  const user=useSelector((state)=>state.user)
  console.log(user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
    <form className='flex flex-col gap-4'>
      <img src={user.currentUser.profilePicture} alt="profile"  className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'/>
      <input defaultValue={user.currentUser.username} type="text" id='username' placeholder='username' className='bg-slate-100 rounded-lg p-3' />
      <input defaultValue={user.currentUser.email} type="text" id='email' placeholder='email' className='bg-slate-100 rounded-lg p-3' />
      <input type="text" id='password' placeholder='password' className='bg-slate-100 rounded-lg p-3' /><button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
    </form>      
    <div className='flex justify-between mt-5'>
      <span className='text-red-700 cursor-pointer'>Delete</span>
      <span className='text-red-700 cursor-pointer'>Sign out</span>
    </div>
    </div>
  )
}

export default Profile
