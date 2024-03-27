import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-between h-screen" style={{
      backgroundImage: `linear-gradient(-25deg, #3182CE, #EBF8FF, #90CDF4)`,
    }}>
      <div className='bg-white rounded-3xl border-3 border-gray-200 py-20 ' style={{
        boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
        backgroundImage: `linear-gradient(-25deg, #E5E7EB, #D1D5DB)`,
      }}>
        <h1 className='text-5xl font-semibold text-center mb-6'>Sign Up</h1>
        <p className='font-medium text-lg text-black mb-8'>Enter your details.</p>
        <div className=' justify-between '>
          <div className= "flex">
            <div className="">
            <label className='text-md font-medium '>First name</label>
            <input 
              className='w-full h-10 border-2 border-gray-100 rounded-xl p-1 bg-transparent'
              placeholder='Enter your First Name' 
            />
            </div>
            <div className=" ml-10">
            <label className='text-md font-medium block mb-1'>last name</label>
            <input 
              className='w-full h-10 border-2 border-gray-100 rounded-xl p-1 bg-transparent'
              placeholder='Enter your First Name' 
            />
            </div>
          </div>
          <div className="flex">
            <label className='text-lg font-medium block '>E-mail</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent'
              placeholder='Enter your First Name' 
            />
            <label className='text-lg font-medium block mb-1'>Nida Number</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent'
              placeholder='Enter your First Name' 
            />
          </div>
          <div className="flex">
            <label className='text-lg font-medium block '>Username</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent'
              placeholder='Enter your First Name' 
            />
            <label className='text-lg font-medium block mb-1'>Password</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent'
              placeholder='Enter your First Name'
              type='password' 
            />
          </div>
          {/* Other input fields */}
          
          {/* Sign up button */}
          <div className='flex justify-center'>
            <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 px-6 rounded-xl bg-blue-500 text-white text-lg font-bold'>Sign up</button>
          </div>
          {/* Log in link */}
          <div className='mt-4 text-center'>
            <span className='text-gray-500'>Already have an account? </span>
            <Link href="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
