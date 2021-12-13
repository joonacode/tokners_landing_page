import { Banner, CardFor, Navbar } from '@/components';
import { SectionKeunggulan } from '@/components/partials/Home';
import React from 'react';

const Home = () => {
  return (
    <div className='bg-[#0F1320] text-white h-full min-h-screen pb-20'>
      <div className='relative overflow-hidden'>
        <Navbar />
        <Banner />
      </div>
      <div className='mt-20 w-full px-[10%] mx-auto grid grid-cols-2 gap-5'>
        <div className='mt-[-80px]'>
          <CardFor
            type='creator'
            desc='Creators can gain independence through a decentralised digital currency system that is
dependent on growing and engaging with the community and also their star power. They own
10-15% of the total value of the tokens minted.'
          />
        </div>
        <div>
          <CardFor
            type='holder'
            desc='Holding social tokens allows the individual to gain access to benefits including unreleased
content, private communities, direct access to celebrity, early- access to tickets and more as well as the ability to trade with other communities in order to gain access to more creator content with early token buyers being the biggest winners as the value of the token increases with more buyers. '
          />
        </div>
      </div>
      <SectionKeunggulan />
    </div>
  );
};

export default Home;
