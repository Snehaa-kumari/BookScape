import React from 'react'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <>
      <div className=''>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-gray-900 dark:text-white">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className="mt-5" >
        <label name="email" htmlFor="email">Email</label><br />
        <input id="email" name="email" className='w-100 border rounded-md px-3 outline-none mt-2 py-1' type="email" placeholder='Enter your email'/>


    </div>
    <div className="mt-5" >

         <label  htmlFor="password">Password</label><br />
        <input id="password" name="password" className='w-100 border rounded-md px-3 outline-none mt-2 py-1' type="password" placeholder='Enter your password'/>
    </div>
    <div className='mt-5 flex justify-around'>
        <button  className='bg-red-800 w-20 h-8 rounded-xl cursor-pointer hover:bg-red-900 text-gray-200 '>Login</button>

        <p>Not Registered?
            <Link to= "/Signup" className='text-blue-600 cursor-pointer underline'> signup </Link></p>
    </div>
  </div>
</dialog>
      </div>
    </>
  )
}
