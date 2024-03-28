"use client"

import Link from 'next/link';
import { Button1 } from '../componets/button1'
import { useState } from 'react'
import Validation from '../componets/Validation'

export default function CreateNewPassword() {
  const[values, setValues] = useState({
    password: '',
})
const [errors, setErrors] = useState({})
function handleInput(event){
const newObj = {...values, [event.target.name]: event.target.value}
setValues(newObj)
}
function handleValidation(event){
event.preventDefault();
setErrors(Validation(values));
}
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{
      backgroundImage: `linear-gradient(-25deg, #3182CE, #EBF8FF, #90CDF4)`,
    }}>
        <form onSubmit={handleValidation}>
      <div className='bg-white px-24 py-20 rounded-3xl border-3 border-gray-300 ' style={{
        boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
        backgroundImage: `linear-gradient(-25deg, #E5E7EB, #D1D5DB)`
      }}>
        <h1 className='text-5xl font-semibold text-center mb-6'>Create New  Password</h1>
        <p className='font-medium text-lg text-black mb-8'>Enter your password</p>
        <div>
          <div className="mb-4">
          <label classname='text-lg font-medium'>Old Password</label>
            <input 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your Password'
            type='password'  onChange={handleInput}
            />
          {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            <label classname='text-lg font-medium'>New Password</label>
            <input 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your Password'
            type='password'  onChange={handleInput}
            />
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            <label classname='text-lg font-medium'>Validate new Password</label>
            <input 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your Password'
            type='password'  onChange={handleInput}
            />
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
          </div>
          <div className='mt-3 flex flex-col'>
          <Button1 bgColor="bg-blue-300" buttonText="Submit" linkHref=""/>  
        </div>
        </div>
      </div>
      </form>
    </div>
  );
}
