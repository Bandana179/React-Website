import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/image1.jpeg';
import Common from './Common';

const About=()=>{
  return(
    <>
        <Common 
    name="Welcome to About Page"
    link="/contact"
    btnname="Contact Now"
    img={web}
    />
    </>
  )
}
export default About;