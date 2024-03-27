import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{
      backgroundImage: `linear-gradient(-25deg, #3182CE, #EBF8FF, #90CDF4)`,
    }}>
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200 '>
        <h1 className='text-5xl font-semibold'>Welcome Back</h1>
        <p className='font-medium text-lg text-gray-500 mt-5'>Welcome back! Please enter your details.</p>
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
        <div className='mt-8 flex flex-col gap-x-4'>
            <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-300 text-white text-lg font-bold'>Sign in</button>
            <button className='mt-5 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-300 text-white text-lg font-bold'><Link href="/Registration">Sign Up</Link></button>
        </div>
        </div>
    </div>
    </div>
  )
}
