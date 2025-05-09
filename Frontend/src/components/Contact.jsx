import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Contact() {


  return (
    <>
    <Navbar/>
      <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20'>

        <div className='flex flex-col items-center justify-center mt-20 dark:mt-12'>
        <form  className='bg-slate-100 w-full max-w-md px-8 py-6 rounded-xl shadow mt-15 mb-8'>
            <h1 className='text-sm font-bold text-center md:text-2xl mt-4 mb-4 dark:text-gray-800'>Contact Me</h1>

            <div className='mb-4'>
              <label className='block text-gray-700 mb-1'>Full Name</label>
              <input 
                className='shadow rounded-lg py-2 px-2 w-full dark:text-gray-800'
                type="text"
                name="name"
                placeholder='Enter your name'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 mb-1'>Email</label>
              <input 
                className='shadow rounded-lg py-2 px-2 w-full dark:text-gray-800'
                type="email"
                name="email"
                placeholder='Enter your email'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 mb-1'>Phone Number</label>
              <input
                className='shadow rounded-lg py-2 px-2 w-full dark:text-gray-800'
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 mb-1'>Message</label>
              <textarea
                className='shadow rounded-lg py-2 px-2 w-full dark:text-gray-800'
                name="message"
                rows="4"
                placeholder='Enter your message'
                required
              />
            </div>

            <button className='text-white bg-black rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 text-xl' type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}
