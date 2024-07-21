import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import HowItWorks from '../components/HowItWorks';
import PopularPlaces from '../components/PopularPlaces';
import PopularGuides from '../components/PopularGuides';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <HowItWorks />
      <PopularPlaces />
      <PopularGuides />
      <FAQ />
    </div>
  );
};

export default Home;