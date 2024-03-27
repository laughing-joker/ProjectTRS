import Link from 'next/link'
import { Button1 } from '../componets/button1'

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{
      backgroundImage: `linear-gradient(-25deg, #3182CE, #EBF8FF, #90CDF4)`,
    }}>
        <div className='bg-white px-40 py-20 rounded-3xl border-3 border-gray-300 'style={{
      boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
      backgroundImage: `linear-gradient(-25deg, #E5E7EB, #D1D5DB)`,
    }}>
        <h1 className='text-5xl font-semibold'>Welcome Back</h1>
        <p className='font-medium text-lg text-black mt-5'>Welcome back! Please enter your details.</p>
        <div className='mt-8' >
        <div >
            <label classname='text-lg font-medium'>Username</label>
            <input 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your Username' 
            />
            <div>
            <label classname='text-lg font-medium'>Password</label>
            <input 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your Password'
            type='password' 
            />
            </div>
            <div className='mt-8 flex justify-between items-center'>
            <div>
                <input 
                type="checkbox" 
                id='remember'
                />
                <label className='ml-2 font-medium text-base' for="remember">Remember me</label>
            </div>
            <button className='font-medium text-base text-blue-300'><Link href="/Forgot-password">Forgot password</Link></button>
            </div>
        </div>
        <div className='mt-8 flex flex-col m-2'>
            <Button1 bgColor="bg-blue-300" buttonText="Login" linkHref=""/>

            <Button1 bgColor="bg-blue-300" buttonText="Sign up" linkHref="Registration"/>
        </div>
        </div>
    </div>
    </div>
  )
}
