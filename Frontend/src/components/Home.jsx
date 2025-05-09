import React from 'react'


export default function Home() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
           <div className='space-y-12'>
           <h1 className="text-4xl font-bold mb-0">
      Hello, welcome to <span className="text-red-700">BookScape!</span>
    </h1>

    <h2 className="text-3xl font-semibold mt-0">
      Discover books that inspire, inform, and ignite curiosity.
    </h2>
            <p className='text-xl'>From heartwarming tales to thought-provoking reads, BookScape brings you a world of books that educate, entertain, and inspire. No matter your taste or interest, you'll always find your next great read here.</p>
            <div className="space-y-2">
      <label htmlFor="email" className="block text-lg font-medium text-gray-700">
      </label>
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
        <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full focus:outline-none"
        />
      </div>
      <div className="validator-hint text-sm text-red-500 hidden">Enter valid email address</div>
    </div>
        </div>
        <button className="btn btn-neutral mt-6">Join</button>
           </div>
           
        
           <div className='w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-5 order-1'>
          <img
            className='w-full max-w-md mx-auto'
            src="book.png"
            alt="Books on a shelf"
          />
        </div>
      </div>
    </>
  )
}
