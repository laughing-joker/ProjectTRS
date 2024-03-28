"use client"

import Link from 'next/link';
import { Button1 } from '../componets/button1'
import { useState } from 'react'
import Validation from '../componets/Validation'

export default function ForgotPassword() {
  const[values, setValues] = useState({
    email: '',
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
        <h1 className='text-5xl font-semibold text-center mb-6'>Forgot Password</h1>
        <p className='font-medium text-lg text-black mb-8'>Enter your details.</p>
        <div>
          <div className="mb-4">
            <label className='text-lg font-medium block mb-1'>Email</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent'
              placeholder='Enter your E-mail'
              onChange={handleValidation}
            />
            {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
          </div>
          <div className='mt-3 flex flex-col'>
          <Button1 bgColor="bg-blue-300" buttonText="Submit" linkHref=""/>  
        </div>
          <div className=' mt-7 text-center text-base text-blue-300'>
            <span className='text-black'>Already have an account?</span>
            <Link href="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}
