import Link from 'next/link';
import React from 'react';
import { Logo } from '.';

const Navbar = () => {
  return (
    <div className='py-5 relative z-40'>
      <div className='flex items-center justify-between mx-auto px-8'>
        <div className='flex items-center'>
          <Logo />
          <div className='flex items-center ml-20'>
            <Link href='/'>
              <a className='mr-5 text-sm'>Our Team</a>
            </Link>
            <Link href='/'>
              <a className='mr-5 text-sm'>Tokens</a>
            </Link>
            <Link href='/'>
              <a className='mr-5 text-sm'>Connect Wallet</a>
            </Link>
            <Link href='/'>
              <a className='mr-5 text-sm'>Lightpaper</a>
            </Link>
          </div>
        </div>
        <div className='flex items-center'>
          <Link href='/'>
            <a className='mr-5 text-sm'>Sign In</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
