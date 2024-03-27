import { Button1 } from './button1'
export default function Form() {
  return (
    <div className='  bg-white w-[75%] h-[75%] rounded-3xl border-2 border-gray-200 items-center justify-center' 
    style={{
      boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
      backgroundImage: `linear-gradient(-25deg, #f7fdff, #edeef8)`,
    }}>
    <h1 className='text-5xl font-semibold mt-60 text-center'>Welcome Back</h1>
    <div className='flex space-x-4 items-center justify-center'>
        <ButtonAsChild />
        <Button1 />
      </div>
    </div>
  )
}
