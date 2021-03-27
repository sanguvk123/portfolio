import React, { Fragment } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Skilllevel from '../charts/Skilllevel';
import Timespent from '../charts/Timespent';
function Home() {
  return (
    <>
    <div className = 'home__components'>
    <Fragment><HeroSection /></Fragment>
    <div id = "projects">
      <Cards />
    </div>
    <div className="rowC">
      <Skilllevel />
      <Timespent />
    </div>
    </div>
    <Fragment><Footer /></Fragment>
    
    </>
  )
}

export default Home;
