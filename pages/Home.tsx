import React from 'react';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import Destinations from '../components/Destinations';
import Plans from '../components/Plans';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Concept />
      <Destinations />
      <Plans />
    </>
  );
};

export default Home;