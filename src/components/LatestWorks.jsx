import React from 'react';
import img from "../assets/dipu.jpg";
const LatestWorks = () => {
  const projects = [
    {
      id: 1,
      title: 'ProCodrr',
      subtitle: '(Coding Platform)',
      description: 'Deeply understand advanced concepts, practice with real-world exercises, build expertise with hands-on projects to boost your career.',
      image:img,
      link: 'https://procodrr.com',
      tags: ['react.js', 'express.js', 'node.js', 'swiper.js', 'mongoDB', 'mongoose', 'css', 'javascript', 'figma'],
      color: '#459bd5',
    },
    {
      id: 2,
      title: 'EazyGrad',
      subtitle: '(EdTech Startup)',
      description: 'Being a lead developer, revamped the site to a highly responsive, and interactive website. Created new features and pages. Worked as a team with product manager and ux designer.',
      image: img,
      link: '',
      tags: ['react.js', 'express.js', 'node.js', 'swiper.js', 'mongoDB', 'mongoose', 'css', 'javascript', 'figma'],
      color: '#ffe578',
    },
    {
      id: 3,
      title: 'Harigurus',
      subtitle: '(Event Booking)',
      description: 'HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch.',
      image: img,
      link: '',
      tags: ['react.js', 'express.js', 'node.js', 'swiper.js', 'mongoDB', 'mongoose', 'css', 'javascript', 'figma'],
      color: '#fc815c',
    },
    {
      id: 4,
      title: 'Web Dev English',
      subtitle: '(Coaching and Consulting)',
      description: 'Being a lead developer, revamped the site to a highly responsive, and interactive website. Created new features and pages. Worked as a team with product manager and ux designer.',
      image: img,
      link: '',
      tags: ['react.js', 'express.js', 'node.js', 'swiper.js', 'mongoDB', 'mongoose', 'css', 'javascript', 'figma'],
      color: '#47afa1',
    },
    {
      id: 5,
      title: 'Pioneer Digital',
      subtitle: '(Digital Marketing Agency)',
      description: 'One of the featured site while working with TheBrandWick.com (agency). Worked as a frontend developer to make the site user-interactive and responsive.',
      image: img,
      link: '',
      tags: ['react.js', 'express.js', 'node.js', 'swiper.js', 'mongoDB', 'mongoose', 'css', 'javascript', 'figma'],
      color: '#fc815c',
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
      <h2 className="text-3xl sm:text-[40px] bg-[111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#3aa895] sm:border-b-2 border-[#3aa895]">
        Latest Works
      </h2>
      {projects.map((project, index) => (
        <div key={project.id} className={`flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative ${index % 2 === 0 ? 'sm:mt-20' : ''}`}>
          <div className={`h-[1px] ${index % 2 === 0 ? 'left-1/4 right-1/2' : 'left-1/2 right-1/4'} bg-[#3aa895] absolute top-1/2 hidden sm:block`}></div>
          <div className={`w-4 h-4 rounded-full border-[3px] ${index % 2 === 0 ? 'border-[#3aa895]' : 'border-[#ffe578]'} absolute left-1/2 -translate-x-1/2 bg-[#353333] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block`}></div>
          <a href={project.link} className={`order-${index % 2 === 0 ? '1' : '2'} flex w-full relative justify-center sm:justify-start`}>
            <div className={`flex flex-col items-center relative group ${index % 2 === 0 ? 'sm:hover:scale-105' : 'hover:scale-105'} ease-in-out duration-200 ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
              <img
                className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={project.image}
                alt={project.title}
              />
              <span className={`flex group-hover:-top-14 ease-jump duration-200 bg-[${project.color}] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2`}>
                {project.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
          <div className={`order-${index % 2 === 0 ? '2' : '1'} w-full`}>
            <h3 className={`text-[${project.color}] font-bold text-2xl md:text-4xl`}>{project.title}</h3>
            <span className={`text-[${project.color}] text-base md:text-lg`}>{project.subtitle}</span>
            <p className="text-justify text-[#E9DCC9] text-sm md:text-base mt-2">{project.description}</p>
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, tagIndex) => (
                <li key={tagIndex} className="border rounded-[50px] border-[#999] text-[#999288] px-[10px] py-[5px] text-sm md:text-base">{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className="w-[2px] hidden sm:block bg-[#3aa895] absolute top-14 bottom-0 left-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default LatestWorks;
