import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaPencilRuler,
  FaSearch,
  FaGoogle,
  FaChartLine,
  FaBlog,
} from "react-icons/fa";

const servicesList = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode />, 
    description:
      "We build responsive and interactive user interfaces using modern frontend technologies.",
  },
  {
    title: "Backend Development",
    icon: <FaServer />, 
    description:
      "Our backend development ensures robust and scalable server-side applications.",
  },
  {
    title: "FullStack Development",
    icon: <FaLayerGroup />, 
    description:
      "End-to-end development solutions for both frontend and backend systems.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPencilRuler />, 
    description:
      "Crafting intuitive and engaging user experiences through thoughtful design.",
  },
  {
    title: "SEO Services",
    icon: <FaSearch />, 
    description:
      "Enhance your website’s visibility and search engine ranking with our SEO strategies.",
  },
  {
    title: "Google Ads Campaigns",
    icon: <FaGoogle />, 
    description:
      "Maximize your brand’s online presence with targeted Google Ads campaigns.",
  },
  {
    title: "Google Analytics",
    icon: <FaChartLine />, 
    description:
      "Leverage data-driven insights to optimize your marketing and business strategies.",
  },
  {
    title: "Google Marketing Analytics",
    icon: <FaBlog />, 
    description:
      "Unlock the power of data-driven marketing with our Google Marketing Analytics services. ",
  },
  {
    title: "Blog Management",
    icon: <FaBlog />, 
    description:
      "Create, manage, and grow your online presence with compelling blog content.",
  },
];

function HServices() {
  return (
    <section className="bg-gradient-to-br from-[#1E1B1B] to-[#2A2727] mt-4 py-16 cursor-pointer " id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-[#E9DCC9] mb-12 uppercase">
          Services I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#2C2A2A] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3A3737] to-[#4B3C3C] opacity-30 transform scale-105"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="text-2xl text-[#FFC857] bg-[#3B3A3A] p-4 rounded-full shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#E9DCC9] ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[#C0B9B9]">{service.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC857] to-[#FF8C42]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HServices;
