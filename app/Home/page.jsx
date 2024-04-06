import React from 'react'
import Navbar from '../componets/Navbar'
import {TableDemo} from '../componets/Table'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Baseline } from 'lucide-react'
export default function page() {
  return (
    <div className='bg-gray-100 w-full h-screen'>
      <div>
      <Navbar/>  
    </div>
    <div className='Main-content'>
    <div className='flex justify-evenly'>
    <div className=' bg-white shadow-md h-screen w-screen'
    style={{
      width: '600px',
      height: '300px',
      marginTop: '28px',
      marginLeft: '20px',
      display: 'flex',
      borderBottomRightRadius: '5px',
      borderTopRightRadius: '5px', 
      backgroundImage: `linear-gradient(-25deg, #3182CE, #EBF8FF, #90CDF4)`, 
    }}>
      <h2>
      <Avatar className='mt-60 ml-5 bg-grey-300'>
  <AvatarImage src="" />
  <AvatarFallback>FN</AvatarFallback>
</Avatar>
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
      backgroundImage: `linear-gradient(-25deg, #3182CE, #EBF8FF, #90CDF4)`, 
    }}><p className='text-center'>hello</p>
    </div>
    </div>
    <div className='w-full h-screen'>
      <TableDemo style={{}}/>
    </div>
    </div>
    </div>
  )
}
