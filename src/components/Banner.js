import React, {useState} from 'react'
import { HiArrowRight, HiArrowLeft} from "react-icons/hi";
import bed from "../assets/bed.jpeg";
import table from "../assets/table.jpeg";
import shelve from "../assets/shelve.jpeg";
import garden from "../assets/garden_furniture.jpeg"

const Banner = () => {
    const [currentSlide, setCurrentSlide]=useState(0)
    const data = [
        bed,
        table,
        shelve,
        garden
    ];

    const prevSlide =() =>{
     setCurrentSlide(currentSlide === 0 ? 3:(prev)=>prev-1) 
    };
    const nextSlide =() =>{
     setCurrentSlide(currentSlide === 3 ? 0:(prev)=>prev+1) 
        };     
  return (

    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h=[650px] relative'>
            <div 
            style ={{transform: `translateX(-${currentSlide * 100}vw)`}} 
            className='w-[400vw] h-[89vh] flex transition-transform duration-1000'>
                <img className="w-screen h-full object-cover opacity-7" src={data[0]} 
                alt="imgone"
                loading='priority' 
                />
                
                <img className="w-screen h-full object-cover opacity-7" src={data[1]} 
                alt="imgtwo"
                loading='priority' 
                />
                <img className="w-screen h-full object-cover opacity-6 " src={data[2]} 
                alt="imgthree"
                loading='priority' 
                />
                <img className="w-screen h-full object-cover opacity-7" src={data[3]} 
                alt="imgfour"
                loading='priority' 
                />
            </div>
            <div class="absolute top-[80px] px-4 py-5 md:top-[150px] md:px-5 md:py-5 bg-gray-500/70 w-full shadow-lg">
      <h1 class="text-black font-semibold text-3xl md:text-5xl text-center"> Welcome </h1>
      <p class=" text-xl text-black pt-4 text-center px-5 md:text-3xl">
      Welcome to metal art dessign ltd. You can enjoy our handmade products like bespoke coffee tables, beds , garden furniture and BBQs. You can trust our experience .
Olso we offer services in your place for repair garage doors, gates, house doors. Feel free to contact us!
      </p>
    </div>
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-20 bottom-20'>
                <div  onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                    <HiArrowLeft />
                </div>
                <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                    <HiArrowRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner