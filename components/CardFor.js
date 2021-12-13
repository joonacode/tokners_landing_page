import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CardFor = ({ type, desc }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  useEffect(() => {
    if (type === 'holder') {
      setTitle('Holders');
      setColor('#2278D4');
    } else if (type === 'creator') {
      setTitle('Creators');
      setColor('#22A75D');
    }
  }, [type]);
  return (
    <div className='bg-[#171B29] rounded-2xl p-8'>
      <div
        className={`h-14 w-14 flex justify-center items-center rounded-full ${
          type === 'holder' ? 'bg-[#2278D4]' : 'bg-[#22A75D]'
        }`}
        style={{ boxShadow: '0px 15px 25px rgba(34, 167, 93, 0.25)' }}
      >
        <Image
          src={`/icons/${type === 'holder' ? 'star' : 'crown'}.svg`}
          alt='crown'
          height={20}
          width={20}
        />
      </div>
      <div className='text-2xl font-bold mt-4 mb-4'>
        <span>For </span>
        <span
          className={`${
            type === 'holder' ? 'text-[#2278D4]' : 'text-[#22A75D]'
          } underline`}
        >
          {title}
        </span>
      </div>
      <p className='text-[#DDE2FF] opacity-50 font-light text-sm mb-5'>
        {desc}
      </p>
      <Link href={'/'}>
        <a
          className={`text-sm ${
            type === 'holder' ? 'text-[#2278D4]' : 'text-[#22A75D]'
          } underline font-medium`}
        >
          Learn More
        </a>
      </Link>
    </div>
  );
};

export default CardFor;
