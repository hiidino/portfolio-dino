import React from 'react';
import { FaAws, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython, FaJava, FaCogs, FaCode } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiTailwindcss, SiNextdotjs, SiGithub, SiPostman, SiNetlify, SiCpanel, SiRender } from 'react-icons/si';
import { GiCogLock } from 'react-icons/gi';
import { VscCode } from 'react-icons/vsc';

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <FaNodeJs className="text-green-600" /> }, 
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "C", icon: <FaCode className="text-blue-500" /> },
    { name: "C++", icon: <FaCode className="text-blue-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-200" /> },
    { name: "PostMan", icon: <SiPostman className="text-orange-500" /> },
    { name: "DBMS", icon: <FaDatabase className="text-purple-500" /> },
    { name: "OOPs", icon: <FaCogs className="text-gray-400" /> },
    { name: "VS Code", icon: <VscCode className="text-blue-500" /> }, // Correct icon for Visual Studio Code
    { name: "Netlify", icon: <SiNetlify className="text-teal-500" /> },
    { name: "cPanel", icon: <SiCpanel className="text-orange-500" /> },
    { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
    { name: "Render", icon: <SiRender className="text-blue-500" /> },
    { name: "Problem Solving", icon: <FaCogs className="text-gray-400" /> },
  ];

  return (
    <div className="bg-[#121212] px-20 py-10" id='skills'>
      <h2 className="text-4xl text-[#E9DCC9] font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center space-y-2 group">
            <div className="text-5xl group-hover:scale-110 transition-transform">{skill.icon}</div>
            <span className="text-[#a49c8f] text-lg font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
