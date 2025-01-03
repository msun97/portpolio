import Link from 'next/link';
import React from 'react';
import { FiAlignJustify } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className='fixed top-0 left-0 bg-gray40 w-20 h-screen flex justify-center'>
        <FiAlignJustify className='text-gray90 w-12 h-12 mt-[12px]'/>
        <ul className='fixed top-0 left-[-376px] bg-gray40 w-80 h-screen flex flex-col gap-[80px] p-10 text-5xl'>
            <li><Link href='#about'>ABOUT ME</Link></li>
            <li><Link href='#project'>PROJECT</Link></li>
            <li><Link href='#contact'>CONTACT</Link></li>
        </ul>
    </nav>
  );
};

export default Nav;
