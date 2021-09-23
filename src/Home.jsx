import React from 'react';
import web from "../src/Images/web.JPG";
import { NavLink } from 'react-router-dom';
import Common from './Common';


const Home = () => {
    return (
        <>
           <Common name="Grow your Business with " imgsrc={web} visit="/service" btnname="Get Started" /><br />
        </>
    );
};

export default Home
