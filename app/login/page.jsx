"use client"

import Link from 'next/link'
import { Button1 } from '../componets/button1'
import { CheckboxDemo } from '../componets/Checkbox'
import { useState } from 'react'
import Validation from '../componets/Validation'
export default function Login() {
  const[values, setValues] = useState({
    
    username: '',
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
        <div className='bg-white px-40 py-20 rounded-3xl border-3 border-gray-300 'style={{
      boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
      backgroundImage: `linear-gradient(-25deg, #E5E7EB, #D1D5DB)`,
    }}>
        <h1 className='text-5xl font-semibold'>Welcome Back</h1>
        <p className='font-medium text-lg text-black mt-5'>Welcome back! Please enter your details.</p>
        <div className='mt-8' >
        <div>
            <label classname='text-lg font-medium'>Username</label>
            <input 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your Username'
            onChange={handleInput} 
            />
            {errors.username && <p style={{color: "red"}}>{errors.username}</p>}
            <label classname='text-lg font-medium'>Password</label>
            <input 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your Password'
            type='password'  onChange={handleInput}
            />
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            </div>
            <div className='mt-8 flex justify-between items-center'>
            <div>
                <CheckboxDemo Text={'Remember me'}/>
            </div>
            <button className='font-medium text-base text-blue-300'><Link href="/Forgot-password">Forgot password</Link></button>
            </div>
        </div>
        <div className='mt-8 flex flex-col mr-5 space-y-5'>
            <Button1 bgColor="bg-blue-300" buttonText="Login" linkHref=""/>
            <Button1 bgColor="bg-blue-300" buttonText="Sign up" linkHref="Registration"/>
        </div>
        </div>
      </form>
    </div>
  )
}
