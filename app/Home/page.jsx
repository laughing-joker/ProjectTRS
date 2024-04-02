import React from 'react'
import Navbar from '../componets/Navbar'
export default function page() {
  return (
    <div className='bg-gray-100 w-full h-screen'>
      <div>
      <Navbar/>  
    </div>
    <div className='Main-content'>
    <div className='flex flex-col justify-between'>
    <div className=' bg-white shadow-md rounded-md h-screen'
    style={{
      width: '600px',
      height: '300px',
      marginTop: '28px',
      marginLeft: '20px',
      display: 'flex',
      borderRadius: '5px',
    }}><p className='text-center'>hello</p>
    </div>
    <div className=' bg-white shadow-md rounded-md h-screen'
    style={{
      width: '600px',
      height: '190px',
      marginTop: '18px',
      marginLeft: '20px',
      display: 'flex',
      borderRadius: '5px',
    }}><p className='text-center'>hello</p>
    </div>
    </div>
    </div>
    </div>
  )
}
