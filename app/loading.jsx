export default function Loading() {
    return (
      <main className="text-center"> 
      <div className="hidden  relative lg:flex h-[1000px] w-full items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-blue-100 to-blue-300 rounded-full animate-spin"></div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
      </main>
    )
  }