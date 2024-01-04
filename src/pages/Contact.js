import React from 'react'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook , FaInstagram} from "react-icons/fa";


const Contact = () => {
  return (
    <div className='antialiased bg-gray-200'>
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-600 w-full max-w-4xl p-8 rounded-xl shadow-lg overflow-hidden text-white'>         
            <div className='flex flex-col space-y-8 justify-between'>
                <div>
                  <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>                
                </div>
                <div className='flex flex-col space-y-4'>
                  <div className='inline-flex space-x-2 items-center'>
                      <IoIosCall className='text-xl text-teal-300 hover:text-white hover:text-2xl'/>
                      <span className='text-3xl'>+44 7526563987</span>
                  </div>
                  <div className='inline-flex space-x-2 items-center'>
                      <IoMdMail className='text-xl text-teal-300 hover:text-white hover:text-2xl'/>
                      <span className='text-3xl'>info@metal_art_dessign.co.uk</span>
                  </div>
                  <div className='inline-flex space-x-2 items-center'>
                     <FaLocationDot className='text-xl text-teal-300 hover:text-white hover:text-2xl'/>
                     <span className='text-3xl'>Horley</span>
                  </div>
                </div>
                <div className='flex space-x-4 text-lg'>
              <a href='/'><FaFacebook /></a>
              <a href='https://www.instagram.com/metal_art_dessign/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'><FaInstagram /></a>
                </div> 
             </div> 
             <div className='relative'> 
             <div className='absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28'></div> 
             <div className='absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-28'></div>          
               <div className=' relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
                <form action='' className='flex flex-col space-y-4'>
                <div>
                <label for='' className='text-sm'>Your name</label>
                <input type='text' placeholder='Your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none mt-2 focus:ring-2 focus:ring-teal-600'/>
                </div>
                <div>
                <label for='' className='text-sm'>Email Address</label>
                <input type='email' placeholder='Your email address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2  mt-2 outline-none focus:ring-2 focus:ring-teal-600'/>
                </div>
                <div>
                <label for='' className='text-sm'>Message</label>
                <textarea placeholder='Your message' rows='4' className='ring-1 ring-gray-300  mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-600'></textarea>
                </div>
                <button className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>send message</button>
              </form>
            </div>   
            </div>      
          </div>
          </div>

   </div>
    
    
  )
}

export default Contact