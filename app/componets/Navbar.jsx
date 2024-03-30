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
    <header className='bg-dark-background sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-blue-300 p-8 '>
      <nav>
          <div className=''>
            <div>
              <BiSolidGridAlt style={{
                width : '25px', height: '25px', cursor:'pointer',
              }}/>
            </div>
            <div className='flex align-center relative' style={{ 
            }}>
            <Link href="./Home"><BiSolidHome className='space-between' style={{
                width : '25px', height: '25px', cursor:'pointer',
              }} /></Link>
            <BiSolidBell style={{
                width : '25px', height: '25px', cursor:'pointer',
              }}/>
              <DropdownMenuDemo text={<BiSolidUser style={{
                width : '25px', height: '25px', 
              }}/>} className=""/>
            </div>

          </div>
        </nav>
    </header>
    
  )
}
