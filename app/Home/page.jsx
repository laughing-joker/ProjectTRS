import React from 'react'
import Navbar from '../componets/Navbar'
export default function page() {
  return (
    <div className="flex flex-col  h-screen" style={{
      backgroundImage: `linear-gradient(-25deg, #3182CE, #EBF8FF, #90CDF4)`,
    }}>
      <Navbar className="space-between"/>
<p>body</p>
    </div>
  )
}
