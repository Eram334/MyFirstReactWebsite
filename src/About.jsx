import React from 'react';
import Common from './Common';
import { NavLink } from 'react-router-dom';
import hero from "../src/Images/hero.jpg";


const About = () => {
    return (
        <>
          <Common name="Welcome to About page" imgsrc={hero} visit="/contact" btnname="Contact Now" />
        </>
    )
}

export default About;
