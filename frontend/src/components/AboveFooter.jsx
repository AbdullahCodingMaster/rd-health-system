import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { SlEnvolopeLetter } from "react-icons/sl";

const AboveFooter = () => {
  return (
    <div className='bg-primary px-[130px] py-8 text-white'>
      {/* Top two divs */}
      <div className='flex justify-between items-center mb-8'>
        <div className='flex-1 justify-center items-center'>
          <h3 className='text-3xl font-bold flex item-center gap-5 '> <SlEnvolopeLetter 
          className=' text-secondary rounded-lg  text-4xl'/>
          Subscribe to News Letter</h3>
          
          <p className='ml-[55px]'>Stay in touch with us to get latest news and special offers </p>
        </div>
        <div className='flex-1'>
         
          <div className='flex mt-4 gap-5'>
            <input
              type='email'
              placeholder='Enter  Email'
              className='px-4 py-2 w-full rounded-l-md text-black'
            />
            <button className='bg-secondary px-4 py-2  text-white'>
             Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom three divs */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-[100px]'>
        <div className='flex items-center'>
          <FaMapMarkerAlt  className='mr-3 text-4xl text-secondary' />
          <div>
            <h4 className=' text-2xl font-bold'>Address</h4>
            <p>123 Main Street, City, Country</p>
          </div>
        </div>

        <div className='flex items-center'>
          <FaPhoneAlt className='mr-3 text-4xl text-secondary' />
          <div>
            <h4 className='text-2xl fonta-bold'>Call Us</h4>
            <p>+123 456 789</p>
          </div>
        </div>

        <div className='flex items-center'>
          <FaEnvelope  className='mr-3 text-secondary text-4xl' />
          <div>
            <h4 className='text-2xl font-bold '>Email Us</h4>
            <p>info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboveFooter
