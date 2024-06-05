import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
const Service = () => {
  return (
    <div
    className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
            <p className='text-neutralDGrey '>We have been working with 500+ clients</p>

            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <img src={logo1} alt="" className='md:w-1/6' />
                <img src={logo2} alt="" className='md:w-1/6'/>
                <img src={logo3} alt="" className='md:w-1/6' />
                <img src={logo4} alt="" className='md:w-1/6' />
                <img src={logo1} alt="" className='md:w-1/6' />
                


            </div>
        </div>
    </div>
  )
}

export default Service