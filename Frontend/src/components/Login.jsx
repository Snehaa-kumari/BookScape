import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:4001/user/login", formData)
      .then((res) => {
        if (res.data && res.data.user) {
          toast.success('Login successful');
 const { _id, email } = res.data.user;
          localStorage.setItem("Users", JSON.stringify({ _id, email }));
          
          setTimeout(() => {
           
          },3000)
          window.location.href = "/"; 
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        } else {
          toast.error("Error: " + err.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-gray-900 dark:text-white">
          <form method="dialog">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          </form>

          <h3 className="font-bold text-lg">Login</h3>

          <form onSubmit={onSubmit}>
            <div className="mt-5">
              <label htmlFor="email">Email</label><br />
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='w-100 border rounded-md px-3 outline-none mt-2 py-1'
                type="email"
                placeholder='Enter your email'
                required
              />
            </div>

            <div className="mt-5">
              <label htmlFor="password">Password</label><br />
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className='w-100 border rounded-md px-3 outline-none mt-2 py-1'
                type="password"
                placeholder='Enter your password'
                required
              />
            </div>

            <div className='mt-5 flex justify-around'>
              <button
                type='submit'
                className='bg-red-800 w-20 h-8 rounded-xl cursor-pointer hover:bg-red-900 text-gray-200'>
                Login
              </button>

              <p>
                Not Registered?
                <Link to="/Signup" className='text-blue-600 cursor-pointer underline'> Signup </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
