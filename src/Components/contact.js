import React from 'react';
import linkedin from '../assets/linkedin.png';
import git from '../assets/github.png';
import mail from '../assets/email.png';

function Contact() {
  return (
    <>
      <div className='py-10 bg-black' id="contact" >
        <h1 data-aos="fade-right" data-aos-duration="1000" className='text-3xl px-20 xs:px-8 pb-10 text-white font-bold xs:text-[26px] sm:text-[30px]'>
          Contact:
        </h1>
        <div className="flex justify-center items-center py-2 px-5 h-24" data-aos="zoom-in-up" data-aos-duration="1000">
          <a href="https://www.linkedin.com/in/mosajjid-khan-ab6632198/" className="p-2.5">
            <img src={linkedin} alt="linkedlogo" className="w-16 h-16 rounded-full border border-yellow-500 hover:bg-yellow-400  bg-white" />
          </a>
          <a href="https://github.com/tahzib12?tab=repositories" className="p-2.5">
            <img src={git} alt="gitlogo" className="w-16 h-16  rounded-full border border-yellow-500 hover:bg-yellow-400  bg-white" />
          </a>
          <a href="mailto:mosajjid.khan@gmail.com" className="p-2.5">
            <img src={mail} alt="maillogo" className="w-16 h-16  rounded-full border border-yellow-500 hover:bg-yellow-400 duration-300 bg-white" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
