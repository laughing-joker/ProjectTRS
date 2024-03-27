import { Button1 } from './button1'
export default function Form() {
  return (
    <div className=' bg-white w-[75%] h-[75%] rounded-3xl border-3 border-gray-300 items-center justify-center' 
    style={{
      boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
      backgroundImage: `linear-gradient(-25deg, #E5E7EB, #D1D5DB)`,
    }}>
    <h1 className='text-5xl font-semibold mt-60 text-center'>Welcome</h1>
    <div className='flex space-x-4 items-center justify-center'>
    <Button1 bgColor="bg-blue-300" buttonText="Login" linkHref="/login" />
    <Button1 bgColor="bg-blue-300" buttonText="Register Now" linkHref="/Registration" />
      </div>
    </div>
  )
}
