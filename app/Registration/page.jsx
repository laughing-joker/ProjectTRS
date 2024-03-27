import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{
      backgroundImage: `linear-gradient(-25deg, #3182CE, #EBF8FF, #90CDF4)`,
    }}>
      <div className='bg-white rounded-3xl border-2 border-gray-200 p-8' style={{
        boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
        minWidth: '320px', // Set a minimum width to prevent the form from stretching too wide
        maxWidth: '500px', // Set a maximum width to limit the form width
      }}>
        <h1 className='text-5xl font-semibold text-center mb-6'>Sign Up</h1>
        <p className='font-medium text-lg text-gray-500 mb-8'>Enter your details.</p>
        <div>
          <div className="mb-4">
            <label className='text-lg font-medium block mb-1'>First name</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent'
              placeholder='Enter your First Name' 
            />
          </div>
          <div className="mb-4">
            <label className='text-lg font-medium block mb-1'>Last name</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent'
              placeholder='Enter your Last Name' 
              type='text'
            />
          </div>
          <div className="mb-4">
            <label className='text-lg font-medium block mb-1'>Email</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent'
              placeholder='Enter your Email' 
              type='email'
            />
          </div>
          <div className="mb-4">
            <label className='text-lg font-medium block mb-1'>Nida Number</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent'
              placeholder='Enter your Nida Number'
              type='text'
            />
          </div>
          <div className="mb-4">
            <label className='text-lg font-medium block mb-1'>Username</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent'
              placeholder='Enter your Username'
              type='text'
            />
          </div>
          <div className="mb-4">
            <label className='text-lg font-medium block mb-1'>Password</label>
            <input 
              className='w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent'
              placeholder='Enter your Password'
              type='password'
            />
          </div>
          <div className='mb-4 flex items-center'>
            <input 
              type="checkbox" 
              id='remember'
              className='mr-2'
            />
            <label className='font-medium text-base' htmlFor="remember">Accept terms and conditions</label>
          </div>
          <div className='flex justify-center'>
            <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 px-6 rounded-xl bg-blue-500 text-white text-lg font-bold'>Sign up</button>
          </div>
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
