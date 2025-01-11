import React from 'react';
import dks from '../assets/dks.png';
import unibluweb from '../assets/unibluweb.png';
import blog from '../assets/blog.png';
import rbay from '../assets/rbay.png';

const portfolioItems = [
  {
    title: 'Dks Security',
    description: 'A professional security service provider offering a wide range of security solutions for businesses and individuals.',
    image: dks,
    link: 'https://dkssecurity.in/',
  },
  {
    title: 'Unibluweb',
    description: 'Unibluweb crafts innovative web solutions that drive business success through personalized digital experiences.',
    image: unibluweb,
    link: 'https://unibluweb.com/',
  },
  {
    title: 'Research Bay',
    description: 'An advanced research management platform designed to streamline research project workflows and collaboration.',
    image: rbay,
    link: 'https://github.com/Dipusingh02/Research-Bay-final-',
  },
  {
    title: 'Oswald Blog',
    description: 'A creative blog platform sharing insightful articles on various topics including technology, design, and personal development.',
    image: blog,
    link: 'https://dipublog.netlify.app/',
  },
 
];

const Portfolio = () => {
  return (
    <div className="container mx-auto p-4" id='portfolio'>
      <h1 className='text-3xl sm:text-[40px] bg-[111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#E9DCC9]'>
      Portfolio</h1>
      <hr className="border-t mx-5 p-2 border-gray-300" />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolioItems.map((item, index) => (
          <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
