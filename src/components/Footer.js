import React from 'react'
import {MdLocationOn} from "react-icons/md"
import { BsPersonFill, BsPaypal } from "react-icons/bs"
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.png"
import QR from "../assets/instagram QR code.jpeg"
import paymentLogo from "../assets/paymentLogo.jpeg"
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaHome,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4'>
            <div className='flex flex-col gap-7 items-center'>
                <img className="w-16 mt-4" src={Logo} alt="logoImg" />
                <p className=' text-sm tracking-wide  hover:text-white duration-300 cursor-pointer'>@ MetalArtDessign.co.uk</p>
                <img className="w-36" src={paymentLogo} alt="paymentlogo" />
                <div className='flex gap-10 text-lg text-gray-500'>
                    
                    < FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                    < FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                    <Link to="https://www.instagram.com/metal_art_dessign/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                    < FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                    </Link>
                </div>
            </div>
            <div className='text-base  flex flex-col gap-7 mb-2'>
                <h2 className='text-3xl pt-20 md:pt-5  font-semibold text-center text-white mb-2'>Contact Us</h2>            
                <p className='font-bold text-center  hover:text-white duration-300 cursor-pointer'>Phone:  07526563987</p>
                <p className='font-bold text-center hover:text-white duration-300 cursor-pointer'>Address:  Horley</p>
                <p className='font-bold text-center hover:text-white duration-300 cursor-pointer'>Email:  info@metal-art-dessign.co.uk</p>       
            </div>
            <div className='text-base flex flex-col gap-4 mb-2'>
                <h2 className='text-center text-3xl pt-20 md:pt-5 font-semibold text-white mb-2'>Profile</h2>
                <p className='flex items-center justify-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPersonFill /></span>My account</p>
                <p className='flex items-center justify-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal /></span>Checkout</p>
                <p className='flex items-center justify-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome /></span>Order tracking</p>
                <p className='flex items-center justify-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn /></span>Help & Support</p>
            </div>
            <div className='flex flex-col justify-center mt-8 bg-blue-500'>
                <input 
                className=' border px-4 mt-5 text-xl text-center text-black'
                placeholder='e-mail'
                type='text'
                />
                <button className='text-xl border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
                <img className="flex flex-row justify-center px-2 ml-[180px] md:ml-[60px] w-[150px] md:w-[200px] md:h-[150px]"src={QR} alt='qr code'/>
            </div>
        </div>
        <div>
            <p className='flex justify-center mt-12 text-center text-gray-700'>MetalArtDessign Ltd is registered in England and Wales under the company registration number 15175619.
        </p>
        <p className='flex justify-center mt-12 text-gray-700'>Copyright 2023 Made by Lukas</p>
        </div>
    </div>
  )
}

export default Footer