import React from 'react';
import dabloy from '../assets/dabloy.png';
import project1 from '../assets/project1.png'
import litho from '../assets/LITHO.png'
import dreamscreen from '../assets/P1.png'
import coreweb from '../assets/team.png'
import metavault from '../assets/METAVAULT.png'
import cgate from '../assets/CGate.png'



const ProjectsSection = () => {
  const projectsweb3 = [
    {
      title: `Created a dynamic platform for selling,Staking and getting rewards as a Cryptocurrency
Token.As a DeFi platform, CG8 promotes financial inclusion through its borderless access and
decentralized structure.`,
      link: "https://cgate-staking-website.vercel.app/",
      imageUrl: cgate,
      category: "CGATE",
    },
    {
      title: `Contributed to the development of MetaVault, a Decentralized & Permissionless Multi
Signature Crypto Vault on BNB Chain.`,
      link: "https://meta-vault-app.vercel.app/",
      imageUrl:  metavault,
      category: "METAVAULT",
    },
    {
      title: `Led a team and actively participated in the development of an NFT-based marketplace for firearms companies, fostering collaboration with industry
stakeholders.`,
      link: "https://marketplace.digital-arms.com/",
      imageUrl:  project1,
      category: "Digital Arms",
    },
    {
      title: `Contributed to the development of LITHO, integrating blockchain technology into the website, ensuring decentralized features and security of transactions.`,
      link: "https://litho-2nd.vercel.app/",
      imageUrl: litho,
      category: "LITHO",
    },
   
  ];
  const projectsweb2 = [
    {
      title: "Created a dynamic plateform to helps users discover new and popular movies based on genres, trending titles, or personalized recommendations.",
      link: "https://dream-screen.vercel.app/",
      imageUrl:  dreamscreen,
      category: "DreamScreen",
    },
    {
      title: `Designed and developed a fully customized portfolio website to showcase the company's projects, services, and expertise.`,
      link: "https://corewebfusion.vercel.app/",
      imageUrl:  coreweb,
      category: "Corewebfusion",
     
    },
    {
      title: `Developed the chatbot interface using Next.js, taking advantage of its server-side rendering and static site generation capabilities for better performance and SEO.`,
      link: " https://github.com/FictionCode00/debloy",
      imageUrl:  dabloy,
      category: "Dabloy",
    },
  ];

  // ProjectCard component defined inside ProjectsSection
  const ProjectCard = ({ title, link, imageUrl, category }) => {
    return (
      <div className="bg-gray-800 text-white rounded-lg overflow-hidden flex flex-col" data-aos="fade-right">
       <div className='p-4 pb-0'>
        <img src={imageUrl} alt={title} className="w-full h-48 object-fill rounded-lg" />
        </div>
        <div className="p-4">
          <h3 className="text-yellow-400 font-semibold mb-2">{category}</h3>
          <h2 className="text-[16px]">{title}</h2>
          <a href={link} ><p className="text-[16px] mt-2 hover:border-b-yellow-400 hover:border-b w-fit">Click here</p>
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black py-20" id="project">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl px-10 xs:px-8 pb-10 text-white font-bold xs:text-[26px] sm:text-[30px]">Projects:</h2>
        <h1 className="text-3xl font-bold text-yellow-500 xs:text-[24px] sm:text-[26px] text-center pb-10">Web3 Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectsweb3.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              link={project.link}
              imageUrl={project.imageUrl}
              category={project.category}
            />
          ))}
        </div>
        <h1 className="text-3xl font-bold text-yellow-500 xs:text-[24px] sm:text-[26px] text-center py-10">Web2 Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectsweb2.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              link={project.link}
              imageUrl={project.imageUrl}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
