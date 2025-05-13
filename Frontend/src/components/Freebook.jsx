import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";
import Cards from './cards'; 
import { useState } from "react";
import { useEffect } from "react";


export default function Freebook() {
   const [book, setBook] = useState([]);
  useEffect(() =>{
     const getBook = async()=>{
      try {
         const res = await axios.get("http://localhost:4001/book");
        
         const data = res.data.filter((data) => data.category === "Free")
          console.log(data)
         setBook(data)
      } catch (error) {
        console.error("Error", error)
      }
     }
     getBook();
  }, [])
    // const filterData = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <>
        

        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  my-10'>
            <h1 className='font-semibold text-xl pb-2 text-red-800'>Free Courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi modi alias eaque itaque recusandae non, repellat officiis voluptas libero nihil, beatae ipsum! Vitae tempora voluptates eius sequi? Ex explicabo itaque magni harum quod!</p>

            <div className="slider-container">
      <Slider {...settings}>
         {book.map((item) => (
               <Cards item={item} key={item.id}/>
         ))}
      </Slider>
    </div>
         </div>
        </>
    );
}

