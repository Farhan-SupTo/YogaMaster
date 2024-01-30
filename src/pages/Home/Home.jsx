import React from 'react';
import Hero from './Hero';
import Cards from './Cards';
import Facts from './Facts';
import Features from './Features';
import Courses from './Courses';
import Pricing from './Pricing';
import Newsletter from './Newsletter';
import Contact from './Contact';
import Header from '../Shared/Header/Header';

// import Aos from 'aos'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  Aos.init({
    duration:1800,
    offset:100
  })

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
    <Cards></Cards>
    <Facts></Facts>
    <Features></Features>
    <Courses></Courses>
    <Pricing></Pricing>
    <Newsletter></Newsletter>
    <Contact></Contact>
      


    </div>
  );
};

export default Home;