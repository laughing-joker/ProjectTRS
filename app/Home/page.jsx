import React from 'react'
import Navbar from '../componets/Navbar'
import {TableDemo} from '../componets/Table'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Baseline } from 'lucide-react'
export default function page() {
  return (
    <div className='bg-gray-50  w-full h-screen'>
      <div>
      <Navbar/>  
    </div>
    <div className='Main-content'>
    <div className='flex justify-evenly'>
    <div className='box-border bg-white shadow-md'
    style={{
      width: '600px',
      height: '300px',
      marginTop: '28px',
      marginLeft: '20px',
      display: 'flex',
      borderBottomRightRadius: '5px',
      borderTopRightRadius: '5px', 
      backgroundColor: '#90CDF4', 
    }}>
      <h2 className='mt-48'>
      <Avatar style={{
        
      }}>
  <AvatarImage src="" />
  <AvatarFallback className='font-base text-black'>FN</AvatarFallback>
</Avatar>
<p className='font-Rubik font- font-black text-xl '>Filoteus Ngonyani</p>
<p className='font-Rubik font-extrabold  text-3xl'>Account id:274368</p>
      </h2>
    </div>
    <div className=' bg-white shadow-md h-screen'
    style={{
      width: '600px',
      height: '300px',
      marginTop: '28px',
      marginLeft: '20px',
      display: 'flex',
      borderBottomLeftRadius: '5px',
      borderTopLeftRadius: '5px',
      backgroundColor: '#90CDF4', 
    }}>
      <h2 className='mt-56'>
      <p className='font-Rubik font- font-black text-3xl '>Balance:</p>
      <p className='font-Inconsolata font-extrabold text-3xl'>0000</p>
      </h2>
    </div>
    </div>
    <div className='w-full h-screen'>
    </div>
    </div>
    </div>
  )
}
