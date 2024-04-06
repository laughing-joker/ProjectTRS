'use client'
import React from 'react'
import Link from 'next/link'
import {DropdownMenuDemo} from './Drop-down';
import { BiSolidGridAlt } from "react-icons/bi";
import { BiSolidHome } from "react-icons/bi";
import { BiSolidBell } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
export default function Navbar() {
  return (
    <header className='mx-auto flex items-center justify-between p-0 w-full h-10'>
      <nav className='h-50 w-full'>
          <div className='p-10'>
            <div className='border-b-2 mt-10'>
            <div className='flex justify-between'>
              <div>
              <BiSolidGridAlt style={{
                width : '25px', height: '25px', cursor:'pointer',
              }}
              />
            </div>
            <div className='flex'>
            <Link href="./Home"><BiSolidHome style={{
                width : '25px', height: '25px', cursor:'pointer',
              }}/></Link>  
              <BiSolidBell style={{
                width : '25px', height: '25px', cursor:'pointer',
              }}/>
              <BiSolidUser style={{
                width : '25px', height: '25px', cursor: 'pointer'
              }}/> 
            </div>
            </div>
            </div>
          </div>
        </nav>
    </header>
    
  )
}
