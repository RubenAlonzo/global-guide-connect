import React from 'react';
import SearchBar from '../components/SearchBar';
import HowItWorks from '../components/HowItWorks';
import PopularPlaces from '../components/PopularPlaces';
import PopularGuides from '../components/PopularGuides';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <SearchBar />
      <HowItWorks />
      <PopularPlaces />
      <PopularGuides customText={'Most Popular Guides'}/>
      <FAQ />
    </div>
  );
};

export default Home;
