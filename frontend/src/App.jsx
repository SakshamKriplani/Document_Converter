
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import image from '../hindiiconn.jpeg'
import Button from './Button.jsx'
import { Link } from 'react-router-dom'

function App() {
  

  return (
    <div className='w-full h-screen bg-gray-900'>
       <div className='nav max-w-7xl mx-auto  h-16 flex items-center justify-center text-2xl font-bold bg-gray-600 '>
    <div className='flex items-center'>
     <span>I</span>
  <i className="ri-heart-2-fill text-red-600 ml-2 text-3xl"></i>
  <img className='w-[5vw] h-[6vh] object-contain overflow-hidden text-4xl' src={image} alt="Hindi Icon" />
  
</div>
     <div className='logo text-2xl  w-[13vw]  pt-3   ml-[20%] text-white '>Convert PDF</div>
 <div className=' text-2xl  w-[13vw] ml-[20%] text-white  '>Convert Image</div>
</div>

<div className='max-w-7xl mx-auto text-4xl text-white ml-[22%] mt-10 font-bold'>Every tool you need to work with PDFs in one place
  </div>
   <div className='text-xl font-gray-300 ml-[25%]  text-white pt-5'>Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! </div>
 
 <div className='buttons flex space-x-10 mt-10 ml-[23%]'>
  <Button data="All" />
  <Button data="WorkFlow" />
  <Button data="Convert PDF" />
  <Button data="Optimize PDF" />
  <Link to="/convertimage">
  <Button data="Convert Image" />
  </Link>
  
  </div>

       </div>
    
  )
}

export default App
