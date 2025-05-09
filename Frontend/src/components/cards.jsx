import React from 'react'

export default function Cards({  item }) {
  return (
    <>
      <div className='mt-4 my-3 dark:bg-gray-900 dark:text-white '>
      <div className="card bg-base-100 w-96 shadow-xl mt-8 hover:scale-105 duration-200 dark:bg-gray-900 dark:text-white">
  <figure>
    <img className='h-[400px]'
      src={item.image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge bg-green-800 text-gray-100">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between mt-6">
      <div className="text-green-800 text-xl">${item.price}</div>
      <div className=" hover:bg-green-800 cursor-pointer hover:text-white duration-200 px-2 py-1 rounded-full border-[2px]">Buy Now</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}
