import React from 'react';
import Hero from '../../components/hero/Hero';
import Info from '../../components/info/Info';
import Banner from '../../components/banner/Banner';
import Retreat from '../../components/retreat/Retreat';

function Home() {
  return (
    <div>
      <Hero/>
      <Info/>
      <Banner/>
      <Retreat/>
    </div>
  )
}

export default Home