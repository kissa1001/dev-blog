import React from 'react';
import './style.css';

const About = () => {
  return (
    <div className="about">
      <div className="container text-center">
        <h1>WHAT I'M <span className="green">ABOUT</span></h1>
        <p>I was born in Kiyv, Ukraine in 1995 and was raised by parents until 4 years old. In 1999, my parents sent me to VietNam and I was living with my grandparents until 2005 my parents picked me back to Odessa, Ukraine.</p>
        <p>During my school years I figured out what I was suppose to do in my life. I loved coding and was part of web development team at my school. I finished 2 years of University and during the last year I was working as a Web Developer for my uncle's startup. At age 19 destiny lead me to Charlotte, NC, USA. Here I brushed up my coding skills by finishing the Modern Javascript fullstack courses provided by Thinkful. In 2015 I moved to Seattle, WA and started working as a Software Engineer at DimensionalMechanics Inc.</p>
        <p>I have a lovely younger sister, 3 uncles and 1 aunt. My parents and sister are still in Ukraine but I hope one day we all can live together. I also have a bunny named Lizzie. I love travelling, hiking, biking and taking good photos.</p>
        <img style={{width: '100%'}} src="/images/background-about.png" alt="background about"/>
      </div>
    </div>
  )
}

export default About;
