// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.jpg';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.jpg';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.jpeg';
import avLogo from './assets/education_logo/av_logo.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.jpg';
import csprepLogo from './assets/work_logo/cs_prep.jpg';
import movierecLogo from './assets/work_logo/movie_rec.jpg';
import npmLogo from './assets/work_logo/npm.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer Intern(Coldfusion and Databases)",
      company: "Nuclear Power Corporation of India Limited(NPCIL), Kaiga ,Karwar",
      date: "Oct 2023 - Nov 2023",
      desc: "Worked as an intern at NPCIL Kaiga, Karwar, gaining hands-on experience in ColdFusion and database management. Assisted in developing and maintaining database-driven web applications, optimized queries, and supported backend workflows to ensure data integrity and smooth application performance.",
      skills: [
        "HTML",
        "CSS",
        "ColdFusion",
        "MySQL",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Software Development Intern",
      company: "Caze Labs Pvt. Ltd.",
      date: "Jun 2025 - Aug 2025",
      desc: "Contributed to the development of a Capacity Planning Chatbot System as a Software Developer Intern, leveraging HTML, CSS, JavaScript, React, and MongoDB. Collaborated with the team to design and implement responsive user interfaces, integrate backend services, and optimize system workflows for efficient capacity planning and enhanced user experience.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "Tailwind CSS",
        "MongoDB"
      ],
    },
   
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Dayananda Sagar University, Bangalore",
      date: "Dec 2023 - Aug 2025",
      grade: "8.96 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from Dayananda Sagar University, Bangalore. During my time at DSU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various technical events, which enhanced my skills and knowledge. My experience at Dayananda Sagar University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "KWT's Divekar BCA College, Karwar",
      date: "Aug 2020 - Sept 2023",
      grade: "90.6%",
      desc: "I completed my Bachelor's degree in Computer Application from KWT's Divekar BCA College, Karwar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at this College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Applications - BCA",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Government Pre-University College, Karwar",
      date: "Jun 2018 - Jul 2020",
      grade: "77.83%",
      desc: "I completed my Class 12 Education from Government PU College, Karwar, under the State board, where I studied Physics, Chemistry, Mathematics and Biology",
      degree: "STATE(XII) - PCMB",
    },
    {
      id: 3,
      img: avLogo,
      school: "Amrita Vidyalayam, Sadashivgad Karwar",
      date: "May 2018",
      grade: "79%",
      desc: "I completed my class 10 Education from Amrita Vidyalayam School, Karwar under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Online Food Ordering system",
      description:
        "A feature-rich and interactive web application that simplifies the process of ordering food online. Built with HTML, CSS, JavaScript, and MySQL, it allows users to browse menus, add items to the cart, and place orders seamlessly. The system manages both customer and admin operations efficiently, ensuring a smooth experience from order placement to delivery tracking.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "MySQL"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Yoga Management System",
      description:
        "A comprehensive web-based application designed to manage yoga classes, student registrations, and instructor schedules efficiently. Developed using HTML, CSS, JavaScript, Python, and MySQL, the system streamlines attendance tracking, class management, and data storage, providing an intuitive interface for both administrators and students.",
      image: csprepLogo,
      tags:  ["HTML", "CSS", "JavaScript","Python", "MySQL"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Alzheimers Disease Prediction",
      description:
"A deep learning-based application designed to predict the presence of Alzheimer's disease from MRI scan data. Leveraging advanced machine learning models, the system analyzes medical imaging to assist in early diagnosis and clinical decision-making. The intuitive interface ensures seamless interaction for researchers and healthcare professionals.",
      image: movierecLogo,
      tags: ["Machine Learning"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Capacity Planning Chatbot System",
      description:
      "An intelligent chatbot application designed to recommend infrastructure capacity for different applications and services. Built using React.js, Node.js, and MongoDB, it supports both frontend and backend workflows, providing real-time insights, cost estimations, and performance-based recommendations. The system enhances decision-making by delivering accurate and interactive capacity planning solutions.",   
         image: npmLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS","MongoDB","Node JS"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
   
  ];  