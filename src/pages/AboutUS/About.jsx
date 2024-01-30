import React from 'react';

import LatestArticle from '../Latest Article/LatestArticle';
import { useEffect } from 'react';
import { Zoom } from 'react-awesome-reveal';
const About = () => {
   
    return (
        <div>
            <div className="hero ">
                <div  className="hero-content flex-col lg:flex-row">
                    <img src="https://img.freepik.com/free-photo/concept-yoga-handsome-man-doing-yoga-exercise-isolated-white-background_231208-8218.jpg?w=740&t=st=1686234297~exp=1686234897~hmac=b76a116b4bc920d7e40d39f76e9ade4bc4386543cf320f94aae5a4cb0a1d3e31" className=" rounded-lg shadow-2xl" />
                    <Zoom  delay={1000} duration={1000}  className='ml-5'>
                        <div>
                            <h1 className="text-2xl font-bold text-indigo-600 ">About us</h1>
                        <p className="py-6 text-5xl">Take Your Yoga to <br></br> the Next Level</p>
                        <p className='text-xl py-3'>A lot of people who only see yoga as a Monday-morning time-filler, don’t realise there are some deep-rooted philosophies behind yoga practice. But there are, and reading up on these yogic texts will help you learn all about them.</p>
                        <button className="btn btn-primary py-3">Get Started</button>
                        </div>
                        
                    </Zoom >
                </div>
            </div>
        {/* <LatestArticle></LatestArticle> */}
        </div>
    );
};

export default About;