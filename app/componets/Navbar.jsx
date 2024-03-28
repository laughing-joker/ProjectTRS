import React from 'react'
import Link from 'next/link'
import {DropdownMenuDemo} from './Drop-down';
import { BiSolidGridAlt } from "react-icons/bi";
import { BiSolidHome } from "react-icons/bi";
import { BiSolidBell } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
export default function Navbar() {
  return (
    <nav>
          <div className='mt-2 flex  w-full justify-between border-b-4  border-blue-300  border-solid md:border-dotted'>
            <div>
              <BiSolidGridAlt style={{
                width : '25px', height: '25px', cursor:'pointer',
              }}/>
            </div>
            <div className='flex align-center relative' style={{ 
            }}>
            <BiSolidHome className='space-between' style={{
                width : '25px', height: '25px', cursor:'pointer',
              }}/>
            <BiSolidBell style={{
                width : '25px', height: '25px', cursor:'pointer',
              }}/>
            <BiSolidUser style={{
                width : '25px', height: '25px', cursor:'pointer',
              }}/>
              <DropdownMenuDemo />
            </div>

          </div>
        </nav>
  )
}
