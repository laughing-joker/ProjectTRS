"use client"

import Link from 'next/link';
import { Button1 } from '../componets/button1'
import { CheckboxDemo } from '../componets/Checkbox'
import { useState } from 'react'
import Validation from '../componets/Validation'

export default function SignUp() {
  const[values, setValues] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    Nidanumber: '',


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
    <div className="flex flex-col items-center justify-between h-screen" style={{
      backgroundImage: `linear-gradient(-25deg, #3182CE, #EBF8FF, #90CDF4)`,
    }}>
      <form onSubmit={handleValidation}>
      <div className='bg-white rounded-3xl border-3 border-gray-200 px-16 py-20 mt-20' style={{
        boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
        backgroundImage: `linear-gradient(-25deg, #E5E7EB, #D1D5DB)`,
      }}>
        <h1 className='text-5xl font-semibold text-center mb-5'>Sign Up</h1>
        <p className='font-medium text-lg text-black mb-8'>Enter your details.</p>
        <div className=' justify-between '>
          <div className= "flex flex-row w-full space-x-16">
            <div className="">
            <label className='text-md font-medium '>First name:</label>
            <input 
              className='w-full h-10 border-2 border-gray-100 rounded-xl p-1 bg-transparent'
              placeholder='Enter your First Name' 
              onChange={handleInput}
            />
            {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
            </div>
            <div className="">
            <label className='text-md font-medium '>Last name:</label>
            <input 
              className='w-full h-10 border-2 border-gray-100 rounded-xl p-1 bg-transparent'
              placeholder='Enter your Last Name'
              onChange={handleInput}
            />
            {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
            </div>
          </div>
          <div className= "flex flex-row w-full space-x-16">
            <div className="">
            <label className='text-md font-medium '> Nida Number: </label>
            <input 
              className='w-full h-10 border-2 border-gray-100 rounded-xl p-1 bg-transparent'
              placeholder='Enter your Nida-Number' 
              onChange={handleInput}
            />
            {errors.Nidanumber && <p style={{color: "red"}}>{errors.Nidanumber}</p>}
            </div>
            <div className="">
            <label className='text-md font-medium '> E-mail: </label>
            <input 
              className='w-full h-10 border-2 border-gray-100 rounded-xl p-1 bg-transparent'
              placeholder='Enter your E-mail' 
              onChange={handleInput}
            />
            {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
            </div>
          </div><div className= "flex flex-row w-full space-x-16">
            <div className="">
            <label className='text-md font-medium '> Username: </label>
            <input 
              className='w-full h-10 border-2 border-gray-100 rounded-xl p-1 bg-transparent'
              placeholder='Enter your Username' 
              onChange={handleInput}
            />
            {errors.username && <p style={{color: "red"}}>{errors.username}</p>}
            </div>
            <div className="">
            <label className='text-md font-medium '> Password: </label>
            <input 
              className='w-full h-10 border-2 border-gray-100 rounded-xl p-1 bg-transparent'
              placeholder='Enter your Password' 
              type='password'
              onChange={handleInput}
            />
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            </div>
          </div>
          <div className='mt-1 ml-1 flex justify-between items-center'>
                <CheckboxDemo Text={'Accept terms and condition'}/>
            </div>
          
          {/* Sign up button */}
          <div className='flex justify-center mt-1'>
            <Button1 bgColor="bg-blue-300" buttonText="Sign up" linkHref=""/>
          </div>
          {/* Log in link */}
          <div className='mt-1 text-center'>
            <span className='text-black'>Already have an account? </span>
            <Link href="/login" className='text-blue-300'>
              Log in
            </Link>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}
