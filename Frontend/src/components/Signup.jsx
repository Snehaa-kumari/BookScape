import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from "./Login"

export default function Signup() {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="relative shadow-xl p-10 rounded-xl dark:bg-gray-700 dark:text-white w-[500px]">
          
          {/* Header with "Register" and ✕ */}
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-lg">Register</h3>
            <button 
              className="text-xl font-bold text-gray-600 hover:text-red-600"
              onClick={() => navigate('/')}
            >
              ✕
            </button>
          </div>

          <div className="mt-2">
            <label htmlFor="name">Name</label><br />
            <input  id="name" name="name" className='w-full border rounded-md px-3 outline-none mt-2 py-1' type="text" placeholder='Enter your name' />
          </div>

          <div className="mt-5">
            <label htmlFor="email">Email</label><br />
            <input id="email" name="email" className='w-full border rounded-md px-3 outline-none mt-2 py-1' type="email" placeholder='Enter your email' />
          </div>

          <div className="mt-5">
            <label htmlFor="password">Password</label><br />
            <input id="password" name="password" className='w-full border rounded-md px-3 outline-none mt-2 py-1' type="password" placeholder='Enter your password'  />
          </div>

          <div className="mt-5">
            <label htmlFor="cpassword">Confirm Password</label><br />
            <input id="cpassword" name="cpassword" className='w-full border rounded-md px-3 outline-none mt-2 py-1' type="password" placeholder='Confirm password' />
          </div>

          <div className='mt-5 flex justify-around'>
            <button type='submit' className='bg-red-800 w-20 h-8 rounded-xl cursor-pointer hover:bg-red-900 text-gray-200'>SignUp</button>
            <p>Already have an account?{" "}
              <button className='text-blue-600 cursor-pointer underline' onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>
              <Login/>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
