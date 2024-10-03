import React from 'react';
import profile from '../assets/tronaqua.png';
import tahzib from '../assets/tahzib.jpeg';


const teamMembers = [
  { name: 'SHIVA', role: 'FOUNDER AND BLOCKCHAIN DEV', imgSrc: profile },
  { name: 'Tahajeeb Ansari', role: 'Frontend Developer/Designer', imgSrc: tahzib },
  { name: 'YASH', role: 'RESEARCH AND DEVELOPMENT', imgSrc: profile },
];

const TeamSection = () => {
  return (
    <section className="bg-black py-20" id="team">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-4xl font-bold text-center">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.imgSrc} alt={member.name} className="mx-auto rounded-full h-40 w-40" />
              <h3 className="text-white text-xl font-bold mt-4">{member.name}</h3>
              <p className="mt-2 text-white">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
