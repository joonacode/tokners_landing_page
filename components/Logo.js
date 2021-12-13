import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className='flex items-center'>
      <Image src='/logo.svg' width={40} height={40} alt='logo' />
      <h5 className='font-extrabold text-xl ml-1'>Tokners</h5>
    </div>
  );
};

export default Logo;
