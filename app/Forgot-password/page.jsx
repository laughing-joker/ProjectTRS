import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{
      backgroundImage: `linear-gradient(-25deg, #3182CE, #EBF8FF, #90CDF4)`,
    }}>
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
            />
          </div>
          <div className='mt-3 flex flex-col'>
            <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-300 text-white text-lg font-bold'>Submit</button>
        </div>
          <div className=' mt-7 text-center text-base text-blue-300'>
            <span className='text-black'>Already have an account? </span>
            <Link href="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
