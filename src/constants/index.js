import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    bart,
    ucbLaw,
    ucb_logo,
    ucla_logo,
    six_sense,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    c_facebook,
    c_github,
    c_gmail,
    c_ins,
    c_linkedin,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "edu",
      title: "Education"
    },
    {
      id: "exp",
      title: "Experience"
    },
    {
      id: "work",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const educations = [
    {
      title: "UC Berkeley",
      major: "Bachelor's degree, Data Science",
      icon: ucb_logo,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - June 2022",
      points: [],
    },
    {
      title: "UCLA",
      major: "Master's Engineering, Artificial Intelligence",
      icon: ucla_logo,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Aug 2023",
      // points: ["CS 269: Artificial Intelligence with Reinforcement Learning, ECE 232E: Large Scale Social and Complex Networks Design and Algorithms; ECE C247: Neural Networks and Deep Learning; ECE C243A: Neural Signal Processing; ECE 219: Large Scale Data Mining, Models and Algorithms; ENGR 213: Data and Business Analytics; ENGR 214: Management Communication; ENGR 215: Entrepreneurship for Engineers"],
      points: [],
    },
  ];


  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "UC Berkeley - Law of School",
      icon: ucb_logo,
      iconBg: "#E6DEDD",
      date: "June 2019 - Sep 2019",
      points: [
        "Developed a comprehensive student grade management system using PHP and MySQL, including student data management, grade tracking, and fuzzy search functionality. Streamlined system efficiency by implementing robust features for data modification and deletion.",
        "Utilized HTML, CSS, and Javascript to design and implement new web features, resulting in an improved user experience and increased engagement. Collaborated with the team to identify new feature opportunities and execute on development goals.",
        "Maintained and updated the law department's website for student enrollment and other activities. Ensured accurate and up-to-date information was available to students and faculty by working closely with the department. Delivered high-quality work on time and within budget, serving over 1k student users.",
      ],
    },
    {
      title: "Data Science Intern",
      company_name: "6Sense Insights, INC.",
      icon: six_sense,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - Dec 2020",
      points: [
        "Developed and delivered machine learning models like XGBoost, LightGBM, and simple Neural Network on huge datasets with 250 million contact records and 522 billion monthly revenue moment events to predict whether a contact is a potential customer for B2B industries, reaching a promising 0.75 recall.",
        "Validated models with AB testing to refine crucial information for the marketing team removing the guesswork from pipeline planning and forecasting, which increased 50% contract values than the historical average.",
        "Led weekly activities for interns like brainstorming, idea visualization as well as research journal clubs.",
        "Devised and applied a revenue AI platform that achieved 120% more effective revenue generation and a 40% increase in conversion of opportunities to closed business.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Bay Area Rapid Transit (BART)",
      icon: bart,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - May 2022",
      points: [
        "Designed and implemented an advanced algorithm by Python based on OOP principles, utilizing techniques like regression analysis and graph theory to accurately project real-world coordinates onto a trail schematic diagram.",
        "Integrated trail diagram visualization and morphing geolocation into a user-friendly interface that significantly improved daily maintenance and documentation processes.",
        "Successfully managed a team of professionals by creating detailed work plans, dividing responsibilities into feature engineering, UI design, algorithm iteration, and version control groups, and continuously improving project progress through weekly meetings with supervisor feedback.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  const abouts = [
    {
      image: c_linkedin,
      source_code_link: "https://www.linkedin.com/in/yinglu-cecilia-deng/",
    },
    {
      image: c_github,
      source_code_link: "https://github.com/YingluDeng",
    },
    {
      image: c_facebook,
      source_code_link: "https://www.facebook.com/vicky.deng.1675/",
    },
    {
      image: c_gmail,
      source_code_link: "mailto:ceciliadeng12@gmail.com?",
    },
    {
      image: c_ins,
      source_code_link: "https://www.instagram.com/cec.land/",
    },
  ];
  
  export { abouts, services, technologies, educations, experiences, testimonials, projects };