import React from 'react';

const experiences = [
  {
    id: 1,
    title: 'Full Stack Engineer',
    company: 'Unibluweb',
    duration: 'Aug 2024 - Dec 2024',
    location: 'Chandigarh, India',
    type: 'On-site',
    points: [
      'Led end-to-end product development, defining technical strategies for scalable web applications.',
      'Designed, developed, and deployed MERN stack-based projects, including DKS Security’s website, enhancing client engagement and business operations.',
      'Directed a cross-functional team of developers, designers, and marketers, ensuring 100% on-time project delivery.',
      'Utilized Google Ads, Google Analytics, Google Marketing Platform, and SEO strategies to optimize campaigns, track performance, and improve website visibility and conversion rates during my time at Unibluweb.',
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer Intern',
    company: 'TCIL-IT',
    duration: 'May 2023 - Jul 2023',
    location: 'Chandigarh',
    type: 'Hybrid',
    points: [
      'Worked on a blogging web application using Node.js and Express.js, enabling real-time post creation, updates, and interactions.',
      'Contributed to building schemas and developing features using the MERN stack.',
      'Developed user interfaces using React.js, ensuring a responsive and interactive frontend experience for the messaging platform.',
      'Implemented necessary rate limiters and load balancers to ensure scalability and performance.',
    ],
  },
];

const education = [
  {
    degree: 'Bachelors of Technology in Computer Science & Engineering',
    institute: 'Chandigarh Group of Colleges, Landran',
    session: '2022-2026',
    score: '7.72 CGPA',
    points: [
      'Gained a comprehensive understanding of core concepts, including data structures, algorithms, and computational thinking.',
      'Developed hands-on experience in C and Python, focusing on problem-solving, clean code, and efficient programming practices.',
      'Programming (OOP), Operating Systems (OS), and Database Management Systems (DBMS), bridging the gap between software design and system functionality.',
      'Transitioned from foundational learning to applying theoretical concepts in practical scenarios, equipping myself for industry challenges and opportunities.',
    ],
  },
];

const ExperienceAndEducation = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-8 px-4 relative pb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#3aa895] mb-12">
        Professional Journey
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Education Section */}
        <section>
          <h3 className="text-2xl font-bold text-[#3aa895] mb-4">Higher Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-[#111] p-4 rounded-lg shadow-md border-l-4 border-[#3aa895]"
              >
                <h4 className="text-xl font-bold text-[#E9DCC9]">{edu.degree}</h4>
                <p className="text-sm text-[#7ef3df]">{edu.institute}</p>
                <p className="text-sm text-[#E9DCC9]">
                  Session: {edu.session} | Score: {edu.score}
                </p> 
                <ul className="list-disc list-inside mt-2 space-y-1 text-[#E9DCC9] text-sm">
                  {edu.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h3 className="text-2xl font-bold text-[#3aa895] mb-4">Experience</h3>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="bg-[#111] p-4 rounded-lg shadow-md border-l-4 border-[#3aa895]"
              >
                <h4 className="text-xl font-bold text-[#E9DCC9]">
                  {experience.title}
                </h4>
                <p className="text-sm text-[#7ef3df]">
                  {experience.company} | {experience.duration}
                </p>
                <p className="text-sm text-[#E9DCC9]">{experience.location} | {experience.type}</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-[#E9DCC9] text-sm">
                  {experience.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExperienceAndEducation;
