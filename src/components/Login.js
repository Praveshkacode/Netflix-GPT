import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignIn,setIsSignIn]=useState(true)
    const toggleSignInForm =()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_medium.jpg"
        alt="background" />
        </div>
        <form className='absolute w-3/12 p-12 bg-black bg-opacity-75 my-36 mx-auto right-0 left-0 text-white'>
            <h1 className='font-bold text-3xl p-4'>{
            isSignIn?'Sign In':'Sign Up'
        }</h1>
            {!isSignIn&&<input type="text" placeholder="Name" className='p-4 my-4 w-full bg-gray-700'/>}
            <input type="text" placeholder="Email" className='p-4 my-4 w-full bg-gray-700'/>
            <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-slate-700'/>
            <button className='p-4 my-6 bg-red-500 w-full rounded-lg' type="submit">
            {
            isSignIn?'Sign In':'Sign Up'
            }
            </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{
            isSignIn?"Don't have an account ? Sign Up":"Already have an account , Sign In"
            } </p>    
        </form>
    </div>
  )
}

export default Login
