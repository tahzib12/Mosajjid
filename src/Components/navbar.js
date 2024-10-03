import React, { useState } from "react";
import Scrollspy from 'react-scrollspy';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="px-10 fixed top-0 z-50 flex justify-between items-center bg-[rgba(22,22,23,0.8)] w-full h-[80px]" data-aos="fade-down" data-aos-duration="1000">
        <div className="text-white font-bold text-2xl sm:text-[22px] xs:text-[20px] ">Mosajjid Khan</div>
        <div className="relative">
          {/* Hamburger menu */}
          <div
            className={`flex flex-col gap-1 cursor-pointer w-8 h-5 sm:hidden md:hidden !z-40 mr-[-25px]`}
            onClick={toggleMenu}
          >
            <div className={`h-[3px] bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[7px] h-[2px] w-6 mr-[-32px] xs:z-20" : ""}`}></div>
            <div className={`h-[3px] bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></div>
            <div className={`h-[3px] bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px] h-[2px] w-6 xs:z-20" : ""}`}></div>
          </div>

          {/* Menu items */}
          <Scrollspy
            items={['hero', 'service', 'project', 'team', 'contact']}
            currentClassName="font-bold border-b-2 border-yellow-500"
            offset={-50} // Adjust this value
            className={`sm:flex sm:gap-8 md:gap-8 ${isOpen ? "absolute top-[-10px] right-[-40px] bg-gray-800 xs:h-[550px] xs:w-[200px] bg-opacity-90 p-4 rounded-lg shadow-lg block z-10 " : "hidden sm:flex md:flex"}`}
            componentTag="div"
          >
            <a href="#hero" className="text-white block p-[5px] hover:border-b-2 hover:border-yellow-500 font-bold text-[18px] xs:!pt-[15px] xs:w-[70px]">Home</a>
            <a href="#service" className="text-white block p-[5px] hover:border-b-2 hover:border-yellow-500 font-bold text-[18px]  xs:w-[70px]">Services</a>
            <a href="#project" className="text-white block p-[5px] hover:border-b-2 hover:border-yellow-500 font-bold text-[18px]  sm:text-[16px]">Projects</a>
            {/* <a href="#team" className="text-white block p-[5px] hover:border-b-2 hover:border-yellow-500 font-bold text-[18px]">Team</a> */}
            {/* <a href="#contact" className="text-white block p-[5px] hover:border-b-2 hover:border-yellow-500 font-bold text-[18px] xs:text-[15px] sm:text-[16px]">Contact</a> */}
          </Scrollspy>
        </div>
      </div>
    </>
  );
};

export default Navbar;
