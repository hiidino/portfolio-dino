import React from 'react';
import { FaPython, FaAws, FaDev } from 'react-icons/fa';
import { GiTrophy } from 'react-icons/gi';

const AboutMe = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-[#1E1B1B] to-[#2A2727] text-[#E9DCC9]">
      <section className="py-6 p-8 " id='about'>
        <div className="flex items-center justify-center mb-8">   
          <div>
            <h1 className="text-4xl pb-4 font-bold text-center">About</h1>
            <p className="text-lg text-[#998b8b]">A motivated B.Tech student with expertise in 
            full-stack web development, MERN stack, and 
            database management. Experienced as an 
            intern, Developing Scalable APIs and user 
            interfaces. Proficient in Problem Solving, leadership, teamwork, 
            and analytical skills, with achievements in 
            hackathons. </p>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li className="flex items-center">
              <FaDev className="mr-2 text-[#E9DCC9]" />
              DevOps (100xdev)
            </li>
            <li className="flex items-center">
              <FaAws className="mr-2 text-[#E9DCC9]" />
              AWS Certified Cloud Practitioner
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Extra Curricular & Co-Curricular Achievements</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li className="flex items-center">
              <GiTrophy className="mr-2 text-[#E9DCC9]" />
              Won SIH Internal Hackathon: Achieved first place in the internal Smart India Hackathon (SIH) for both 2023 and 2024.
            </li>
            <li className="flex items-center">
              <GiTrophy className="mr-2 text-[#E9DCC9]" />
              Coordinated a Coding Event: Successfully organized and coordinated a coding event, managing participants and event logistics.
            </li>
          </ul>
        </section>

        
      </section>
    </div>
  );
};

export default AboutMe;
