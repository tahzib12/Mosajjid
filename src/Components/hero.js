import React, { useRef, useEffect } from 'react';
import profile from '../assets/tronaqua.png';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false,
        easing: 'ease',
    });
    AOS.refresh();
}, []);

  useEffect(() => {
    const options = {
      strings: ["Blockchain Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true ,
      cursorChar: ""  
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="bg-black w-full text-white pt-[200px] xs:pt-[100px] flex xs:flex-col-reverse xs:justify-center xs:items-center justify-between" id="hero">
      <div className="container mx-auto w-[60%] xs:w-full px-10 xs:px-5 xs:mx-0">
        <h1 ref={typedRef} className="typed-js-element text-3xl font-bold ml-[20px] text-yellow-500 xs:ml-2 xs:text-[24px] sm:text-[26px] whitespace-nowrap w-[240px] h-[38px]"></h1>
        <p className="text-6xl font-bold ml-[20px] xs:ml-2 xs:text-[26px] sm:text-[30px] " data-aos="fade-right">Connecting Web2 & Web3</p>
        <p className="mt-4 text-xl ml-[20px] xs:ml-2 xs:text-[16px] sm:text-[18px]" data-aos="fade-right">We Deliver Web2 & Web3 Services All Over The World. </p>
        <div className="mt-8 xs:mt-4 ml-[20px] xs:ml-0 sm:ml-1">
        <a href="#service " ><button className="buttonM xs:text-[15px]">Services</button></a>
          <a href="#contact" ><button className="buttonM xs:text-[15px]">Contact</button></a>
        </div>
      </div>
      <div className="w-[40%] xs:w-full xs:text-center rounded-full xs:flex xs:justify-center xs:items-center xs:pb-5">
        <img src={profile} alt="Hero" className="w-[300px] xs:w-[150px] xs:h-[150px] sm:w-[200px] sm:h-[200px] h-[300px] rounded-full" data-aos="zoom-in"/>
      </div>
    </section>
  );
};

export default HeroSection;
