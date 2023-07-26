import React from 'react';
import Hero from '../../components/hero/Hero';
import Info from '../../components/info/Info';
import Banner from '../../components/banner/Banner';
import Retreat from '../../components/retreat/Retreat';
import Gallery from '../../components/gallery/Gallery';
import Newsletter from '../../components/newsletter/Newsletter';
import Cards from '../../components/cards/Cards';
import Maps from '../../components/maps/Maps';

function Home() {
  return (
    <div>
      <Hero/>
      <Info/>
      <Banner/>
      <Retreat/>
      <Gallery/>
      <Newsletter/>
      <Cards/>
    </div>
  )
}

export default Home