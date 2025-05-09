import React from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import list from "../data/list.json";
import Cards from './cards';
import { Link } from "react-router-dom";

export default function Course() {

  return (
    <>
      <div><Navbar /></div>
         <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 min-h-screen dark:bg-gray-900 dark:text-white'>
           <div className='mt-[120px] dark:mt-17 items-center justify-center text-center'>
            <h1 className='text-2xl  md:text-4xl'><span className='text-red-800'>Welcome!</span> we're happy to have you Here!!</h1>
            <p className='mt-12'>Welcome to our platform — a space built for dreamers, doers, and lifelong learners. We believe that growth begins with curiosity and is fueled by community, creativity, and commitment. Whether you're just starting out or already on your path, you'll find the tools, support, and inspiration you need right here. Dive into hands-on projects, connect with passionate minds, and unlock your full potential. This is more than just a place to learn — it's where ideas become action, and ambition turns into achievement. We're truly excited to have you with us on this journey. Let's create something incredible together!</p>
          <Link to="/">
                <button className='bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-900 duration-300 mt-6'>Back</button>
          </Link>
           </div>
           <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-5'>
              {
                list.map((item) =>(
                    <Cards key={item.id} item={item}/>
                ))
              }
           </div>
         </div>
      <Footer /> 
    </>
  )
}
