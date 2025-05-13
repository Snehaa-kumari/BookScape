import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from "./Login"
import axios from "axios";
import toast from 'react-hot-toast';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.cpassword) {
      alert("Passwords do not match");
      return;
    }

    axios.post("http://localhost:4001/user/signup", formData)
      .then((res) => {
        if (res.data && res.data.user) {
          toast.success('SignUp successful');
          navigate("/");
          
        }
       const { _id, name, email } = res.data.user;
    localStorage.setItem("Users", JSON.stringify({ _id, name, email }));

      })
      .catch((err) => {
        if(err.response){
        toast.error("Error: " + err.response.data.message);
   } });
  };
     
  return (
    <div className='flex h-screen items-center justify-center'>
      <form 
        className="relative shadow-xl p-10 rounded-xl dark:bg-gray-700 dark:text-white w-[500px]"
        onSubmit={onSubmit}
      >
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-bold text-lg">Register</h3>
          <button 
            type="button"
            className="text-xl font-bold text-gray-600 hover:text-red-600"
            onClick={() => navigate('/')}
          >
            ✕
          </button>
        </div>

        <div className="mt-2">
          <label htmlFor="name">Name</label><br />
          <input 
            id="name" name="name" value={formData.name}
            onChange={handleChange}
            className='w-full border rounded-md px-3 outline-none mt-2 py-1' 
            type="text" placeholder='Enter your name' 
            required
          />
        </div>

        <div className="mt-5">
          <label htmlFor="email">Email</label><br />
          <input 
            id="email" name="email" value={formData.email}
            onChange={handleChange}
            className='w-full border rounded-md px-3 outline-none mt-2 py-1' 
            type="email" placeholder='Enter your email' 
            required
          />
        </div>

        <div className="mt-5">
          <label htmlFor="password">Password</label><br />
          <input 
            id="password" name="password" value={formData.password}
            onChange={handleChange}
            className='w-full border rounded-md px-3 outline-none mt-2 py-1' 
            type="password" placeholder='Enter your password' 
            required
          />
        </div>

        <div className="mt-5">
          <label htmlFor="cpassword">Confirm Password</label><br />
          <input 
            id="cpassword" name="cpassword" value={formData.cpassword}
            onChange={handleChange}
            className='w-full border rounded-md px-3 outline-none mt-2 py-1' 
            type="password" placeholder='Confirm password' 
            required
          />
        </div>

        <div className='mt-5 flex justify-around'>
          <button 
            type='submit'
            className='bg-red-800 w-20 h-8 rounded-xl cursor-pointer hover:bg-red-900 text-gray-200'>
            SignUp
          </button>

          <p>
            Already have an account?{" "}
            <button 
              type="button"
              className='text-blue-600 cursor-pointer underline' 
              onClick={() => document.getElementById('my_modal_3').showModal()}>
              Login
            </button>
            <Login/>
          </p>
        </div>
      </form>
    </div>
  )
}
