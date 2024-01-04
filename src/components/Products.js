import React from 'react'
import ProductCart from './ProductCart'
import storeItems from "../data/items.json"
const Products = ( { _id, title, oldPrice, price, description, image }) => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center hover:text-red-500'>
                Shopping Everyday
            </h1>
            <span className='w-20 h=[3px] bg-black'></span>
            <p className='max-w-[400px] text-gray-600 text-center text-xl hover:scale-125 duration-500 md:max-w-[700px] md:text-2xl lg:text-3xl'>
           Welcome to my shop where everything is handmade and available to be custom made as well, according to your needs!
            </p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10'>
          {storeItems.map(item => (
            < ProductCart  {...item} key={item._id} product={item} />
          ))}
          
        </div>

    </div>
  )
}

export default Products