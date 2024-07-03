import React from 'react'
import { Link } from 'react-router-dom'
import { accessUrl } from "./spotify";


const Login = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <Link to={accessUrl} className='bg-green-600 py-2 px-3 text-3xl rounded-lg text-white font-bold'>Login</Link>
        <p className='font-bold'>powered by <span className='text-green-600'>spotify</span></p>
    </div>
  )
}

export default Login