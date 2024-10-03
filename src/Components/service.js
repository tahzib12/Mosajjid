import React from 'react';
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import bootstrap from '../assets/html.png'
import nodejs from '../assets/node.png'
import tailwind from '../assets/Tailwind.svg'
import blockchain from '../assets/blockchian.png'
import sql from '../assets/sql.png'

const skills = [
  {
    name: 'ReactJS',
    logo: react ,
  },
  {
    name: 'Blockchain',
    logo: blockchain ,
  }  ,
  {
    name: 'NodeJs',
    logo: nodejs ,
  },
  {
    name: 'MySQL',
    logo: sql ,
  },
  {
    name: 'HTML',
    logo: html ,
  },
  {
    name: 'CSS',
    logo: css ,
  },
  {
    name: 'JavaScript',
    logo: javascript ,
  },
  
  {
    name: 'Bootstrap',
    logo: bootstrap ,
  },
  {
    name: 'Tailwind CSS',
    logo: tailwind ,
  }
];


const ServicesSection = () => {
  return (
    <section className="bg-black p-20 xs:px-8" id="service">
      <h1 data-aos="fade-right" data-aos-duration="1000" className='text-3xl pt-20 pb-10 text-white font-bold xs:text-[26px] sm:text-[30px] '>Services :</h1>
      <div className="container mx-auto text-center xs:text-left pb-20 text-white">
        <h2 className="text-3xl font-bold text-yellow-500 xs:text-[24px] sm:text-[26px] ">Connecting web2 and web3 together</h2>
        {/* <p className="mt-4 sm:mt-0 xs:mt-0 text-xl">We Already worked with Global company</p>
        <p className="mt-2 text-2xl font-bold sm:mt-0 xs:mt-0">50K</p>
        <p className="mt-2 sm:mt-0 xs:mt-0">Agency increased revenue through Fiverr</p> */}
        {/* <button className="buttonM">Explore Us</button> */}
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto place-self-center px-10 w-full">
      {skills.map((skill, index) => (
            <div
              className="skill-card bg-gray-800 text-white rounded-md p-5 flex flex-col items-center justify-center text-center flex-1 "
              key={index}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo w-[70px] h-[70px] mb-2.5" />
              <p>{skill.name}</p>
            </div>
          ))}
      </div>
    </section>
    
  );
}

export default ServicesSection;
