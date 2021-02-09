import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/image2.jpeg';
import Common from './Common';

const Home=()=>{
  return(
    <>
    <Common 
    name="Grow Your Knowledge with"
    link="/service"
    btnname="Get started"
    img={web}

    />
    </>
  )
  
}
export default Home;