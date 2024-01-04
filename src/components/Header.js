import React , {useState}  from 'react'
import Logo from "../assets/Logo.png"
import cartImage from "../assets/cartImage.jpg"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import {FaBars, FaTimes } from 'react-icons/fa'
const Header = () => {
    const productData = useSelector((state) => state.metal.productData);
    const userInfo = useSelector((state) => state.metal.userInfo);
    const [isOpen , setisOpen] = useState(false)
  
  return (
    <div className='shadow-md w-full bg-white fixed top-0 left-0 z-50'>
        <div className='md:px-10 py-4 px-7 md:flex flex items-center justify-between bg-white'>
            
            <div className='flex items-center'>
                <img className="w-12 h-12" src={Logo} alt="Logo" />
            </div>          
            <div onClick={() => setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
              {
                isOpen ? <FaTimes /> : <FaBars />
              }
            </div>
            
                <ul className={` md:flex text-2xl pl-9 md:static md:pl-0 md:items-center md:pb-0 pb-12 absolute md:z-auto z-[-1] left-0 w-full transition-all bg-white duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'} `}>
                    <Link to="/">
                    <li className='my-7 md:my-0 md:ml-8 text-black font-semibold hover:text-gray-400 hover:underline undeline-offset-2 decoration-[3px] cursor-pointer duration-300'>Home</li>
                    </Link>
                    <Link to="./about">
                    <li className='my-7 md:my-0 md:ml-8 text-black font-bold hover:text-gray-400 hover:underline undeline-offset-2 decoration-[3px] cursor-pointer duration-300'>Services</li>
                    </Link>
                    <Link to="/">
                    <li className='my-7 md:my-0 md:ml-8 text-black font-bold hover:text-gray-400 hover:underline undeline-offset-2 decoration-[3px] cursor-pointer duration-300'>Shop</li>
                    </Link>
                    <Link to="/contact">
                    <li className='my-7  md:my-0 md:ml-8 text-black font-bold hover:text-gray-400 hover:underline undeline-offset-2 decoration-[3px] cursor-pointer duration-300'>Contact</li>
                    </Link>
                
                <div className='flex items-center justify-between '>
                <Link to="/cart">
                <div className='relative'>
                    <img  className="w-16 top-1"src={cartImage} alt='cartImage'/>
                    <span className='absolute w-10 top-7 left-3 text-sm flex items-center justify-center font-bold font-titleFont'>{productData.length}</span>
                </div>
                </Link>
                <Link to="/login">
               <img
              className="w-12 h-12 "
              src={
                userInfo
                  ? userInfo.image
                  :"https://png.pngtree.com/png-clipart/20220913/ourmid/pngtree-login-button-png-image_6163957.png"
              }
              alt="userLogo"
            />
          </Link>
          {userInfo && (
            <p className=" text-xl font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
          
        </div>
        </ul>
        </div>   
    </div>

  )
}

export default Header