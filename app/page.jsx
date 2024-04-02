import Form from "./componets/Form"

export default function Home() {
  return (
    <div className="flex w-full h-screen" style={{
      backgroundImage: `linear-gradient(-25deg, #3182CE, #EBF8FF, #90CDF4)`
    }}>
      <div className="w-full flex items-center justify-center lg:w-1/2 ">
      <Form />
      </div>
      <div className="hidden  relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-blue-100 to-blue-300 rounded-full animate-pulse"></div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  )
}
