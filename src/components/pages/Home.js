import React, { Fragment } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Skilllevel from '../charts/Skilllevel';
function Home() {
  return (
    <>
    <div className = 'home__components'>
    <Fragment><HeroSection /></Fragment>
    <Fragment><Cards /></Fragment>
    <div className="rowC">
      <Skilllevel />
      <Skilllevel />
    </div>
    </div>
    <Fragment><Footer /></Fragment>
    
    </>
  )
}

export default Home;
