import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='mx-auto'>
      <img
        src='/gradient.svg'
        alt='gradient'
        className='absolute top-[0] right-[-100px] z-10'
      />
      <div className='flex items-center z-20 relative'>
        <div className='w-[45%] pl-[10%] mt-[-150px]'>
          <p className='font-bold mb-5 text-[#00B4EC]'>At Tokners we are</p>
          <h1
            className='font-extrabold mb-8'
            style={{ fontSize: 42, lineHeight: 1.1 }}
          >
            Reimagining social media through the power of the blockchain.
          </h1>
          <p className='text-[#DDE2FF] opacity-50 font-light'>
            We are creating social media 3.0 with influencers, celebrities and
            creators being able to launch their own digital currency by simply
            creating a profile with media content posted as Non fungible Tokens
            that can be owned and traded on the Tknrs network
          </p>
        </div>
        <div className='flex-1 relative'>
          <div className='w-full h-full '>
            <img
              className='mt-[-100px]'
              src='/banner3.png'
              alt='banner'
              objectFit='cover'
              objectPosition={'center'}
              layout='fill'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
