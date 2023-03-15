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
    proj_bart,
    proj_gitlet,
    proj_maze,
  } from "../assets";
  
  export const navLinks = [
    // {
    //   id: "hero",
    //   title: "Home",
    // },
    {
      id: "about",
      title: "About",
    },
    {
      id: "exp",
      title: "Experience"
    },
    {
      id: "work",
      title: "Projects",
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
      date: "June 2022",
      points: [],
    },
    {
      title: "UCLA",
      major: "Master's Engineering, Artificial Intelligence",
      icon: ucla_logo,
      iconBg: "#E6DEDD",
      date: "Excepted Aug 2023",
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
      name: "Bart MGS",
      description:
        "The primary aim of this project is to develop a system that can accurately transform real-world geographic coordinates (latitude and longitude) into the (x, y) coordinates of BART's rail track schematic diagram. This will enable us to precisely pinpoint the location of BART trains on the map and track their movements in real-time. By achieving this goal, we hope to enhance the efficiency and safety of BART operations, as well as provide more accurate and reliable information to engineers about physical infrastructure and equipment such as stations, signals and locomotives.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Web",
          color: "pink-text-gradient",
        },
        {
          name: "Git",
          color: "pink-text-gradient",
        },
      ],
      image: proj_bart,
      source_code_link: "https://github.com/YingluDeng/Bart_MGS",
    },
    {
      name: "Version Control Gitlet",
      description:
        "It is a Java-based version-control system that supports file backup and restoration, history viewing, branch maintenance, and merge changes between branches. We developed Gitlet using JUnit and custom test cases to ensure optimal performance and behavior. The command-line interface enables users to interact with the system via various commands, and informative error messages are displayed for invalid inputs. We hosted the Gitlet project on GitHub, used IntelliJ as our IDE, and Bash for automation.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Git",
          color: "green-text-gradient",
        },
        {
          name: "Junit",
          color: "pink-text-gradient",
        },
        {
          name: "IntelliJ",
          color: "pink-text-gradient",
        },
        {
          name: "Bash",
          color: "pink-text-gradient",
        },
      ],
      image: proj_gitlet,
      source_code_link: "https://github.com/YingluDeng/Gitlet_proj",
    },
    {
      name: "Maze Game",
      description:
        "This project is a maze game engine that generates explorable worlds. We will use advanced algorithms to create random mazes and add interactive features, such as a Level Mode, Count Down Timer, and Highest Score leaderboard. Additionally, we will include a Mini Game system that lets players interact with entities in the maze and trigger new interfaces, similar to Pokémon. This system adds excitement and unpredictability to the gameplay, encouraging players to explore every corner of the maze.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "OOP",
          color: "green-text-gradient",
        },
        {
          name: "UI/UX",
          color: "pink-text-gradient",
        },
        {
          name: "IntelliJ",
          color: "pink-text-gradient",
        },
      ],
      image: proj_maze,
      source_code_link: "https://github.com/YingluDeng/Maze-Game-Project",
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