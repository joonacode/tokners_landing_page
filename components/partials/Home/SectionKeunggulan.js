import React from 'react';

const SectionKeunggulan = () => {
  return (
    <div className='grid grid-cols-2 mt-20'>
      <img src='/what_make_us_different.svg' alt='tes' />
      <div
        className='h-[800px] bg-white center text-[#0F1320] flex justify-center items-center flex-col  pl-24 pr-[20%]'
        style={{ borderRadius: '300px 0 0 0' }}
      >
        <div className='relative top-[-20px]'>
          <h2 className='text-4xl font-bold mb-7'>What makes us different?</h2>
          <p className='mb-5 font-bold opacity-50'>
            We would only launch tokens with the express permission of the
            creators.{' '}
          </p>
          <p className='font-light mb-5 opacity-50'>
            There are several thousand celebrities and creators on twitter,
            tiktok, Instagram and YouTube with followings in the millions who we
            would be actively engaging before we go viral.{' '}
          </p>
          <p className='font-light  opacity-50'>
            We would get them on our platform and they would see the opportunity
            to create a fan driven digital economy where their digital content
            can be traded as NFTs and their most loyal fans can have the
            monetary value of their creator's currency increase significantly as
            they promote their digital currency across their channels while our
            native token holders benefit from the Weentar popularity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionKeunggulan;
