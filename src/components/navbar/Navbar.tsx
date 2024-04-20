"use client"

import React, { Dispatch, SetStateAction } from 'react'
import UserProfile from './UserProfile';
import ThemeSwitch from './ThemeSwitch';
import { GrMenu } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { usePathname } from 'next/navigation';
interface Props {
  // todo: change types
  currentUser?: any;
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>
}

const Navbar: React.FC<Props> = ({ currentUser, menu, setMenu }: Props) => {
  const pathname = usePathname();
  const isCoursePage = pathname.startsWith('/courses/');

  return (
    <div className='shadow-md px-2 z-40 sticky top-0 backdrop-blur-lg'>
      <div className='flex items-center justify-between p-2'>
        <div onClick={() => setMenu(!menu)} className='p-2 rounded-full hover:bg-secondary-800 cursor-pointer'>
          {!isCoursePage ? <GrMenu className='text-xl' />:"LMS"}
        </div>
        <div className='flex gap-3 items-center'>
          <ThemeSwitch />
          <div className='rounded-full cursor-pointer hover:bg-secondary-800 p-2'><IoMdNotificationsOutline className='text-xl' /></div>
          <UserProfile currentUser={currentUser} />
        </div>
      </div>
    </div>
  )
}

export default Navbar