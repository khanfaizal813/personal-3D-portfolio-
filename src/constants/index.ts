// Contains constant data for using in website

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
  git,
  figma,
  docker,
  threejs,
  project7,
  linkedin,
  github,
  calsoft,
  lmsSolutions,
  mavenCluster,
  famacash,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Frontend Engineer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
  {
    title: "Backend Engineer",
    icon: web,
  },
  {
    title: "Angular / React + Node.js Developer",
    icon: backend,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Senior Development Engineer (Frontend Engineer)",
    company_name: "Calsoft",
    icon: calsoft,
    iconBg: "#383E56",
    date: "Dec 2022 – Present",
    points: [
      "Contributed as a Front-End Developer to a critical initiative at Asigra, developing four unique connectors for a backup and recovery utility on Linux and Windows platforms. Collaborated with four cross-functional teams, each responsible for a separate connector.",
      "Designed and implemented responsive, intuitive user interfaces using Angular, TypeScript, HTML5, SASS, and Materialize, seamlessly integrating with Java-based server-side applications.",
      "Enhanced functionality by employing advanced JavaScript techniques, leveraging Redux for state management, and mastering Jest for robust testing practices.",
      "Supported team members by troubleshooting and resolving complex issues, maintaining project momentum, and fostering a collaborative team environment.",
      "Acquired and integrated new technologies like NgRx for state management to adapt to the dynamic demands of the development process.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "LMS Solutions",
    icon: lmsSolutions,
    iconBg: "#E6DEDD",
    date: "Oct 2021 – Nov 2022",
    points: [
      "Contributed as a Front-End Developer to the development of TripSplit, a dynamic platform for outdoor recreational activities like fishing and trekking, using Angular 13 in a Linux environment.",
      "Engineered a responsive front-end architecture by integrating components in Angular 13, optimizing the user interface for enhanced performance and engagement.",
      "Implemented the FullCalendar library for seamless trip scheduling and event display, enabling users to select and view trip events on an interactive calendar.",
      "Developed robust forms for creating and editing trips, with comprehensive form validation to ensure data integrity and a user-friendly experience.",
      "Configured route handling with guards to secure the application, enabling role-based navigation and enhancing overall safety and user experience.",
      "Integrated Stripe for secure payment processes, ensuring smooth and reliable financial transactions.",
    ],
  },
  {
    title: "Mean Stack Developer",
    company_name: "Maven Cluster",
    icon: mavenCluster,
    iconBg: "#383E56",
    date: "May 2021 – Sep 2021",
    points: [
      "Served as a Full Stack Developer on Dr. Huellitas, an innovative digital platform enabling immediate veterinary consultations from home, addressing the need for accessible pet care in emergencies.",
      "Developed a responsive and intuitive front-end using Angular 9, seamlessly integrated with Node.js for efficient server-side logic on a Linux platform.",
      "Implemented a real-time booking system, allowing users to view available veterinary consultants and book emergency appointments via video conferences or face-to-face interactions.",
      "Integrated WebSocket technology to enable live communication between pet owners and veterinarians, ensuring smooth and efficient consultation sessions.",
      "Incorporated Stripe for secure payment processing, streamlining transactions within the platform.",
      "Designed and optimized MongoDB schemas using Mongoose to manage pet and user data efficiently, ensuring a reliable and scalable database structure.",
      "Conducted rigorous testing and debugging across the MEAN stack to ensure platform stability, enhancing performance and user satisfaction.",
    ],
  },
  {
    title: "Software Engineer (Frontend Developer)",
    company_name: "Famacash India",
    icon: famacash,
    iconBg: "#E6DEDD",
    date: "Sep 2018 – Aug 2020",
    points: [
      "Actively contributed as a Front-End Developer to the creation of a versatile payment solutions platform offering services such as local and international money transfers, airtime recharge, bill payments, and financial services like savings accounts and cash advances.",
      "Developed a responsive and secure front-end environment using Angular 7, ensuring seamless user experiences across various financial services on the Linux platform.",
      "Collaborated with clients to gather requirements, tailoring the platform to meet diverse business needs and securely handle complex financial transactions.",
      "Implemented robust authorization and authentication mechanisms to manage access for seven distinct roles, ensuring appropriate permissions and data security.",
      "Standardized common endpoint URLs for REST API interactions, optimizing backend communications and improving efficiency across roles and functions.",
      "Participated in Agile methodologies, including daily scrum calls, sprint planning meetings, and retrospectives, to keep the project on track and aligned with client expectations.",
      "Engaged in peer reviews and knowledge transfer sessions to uphold high-quality code standards and enhance team capabilities.",
      "Ensured scalability and maintainability of the platform by employing modular design principles and integrating reusable components.",
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Spotify Clone",
    description:
      "A Spotify clone built with the MERN stack and Tailwind CSS, featuring user authentication, Spotify Web API integration for music streaming, and a robust MongoDB database for managing playlists and user data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: project7,
    source_code_link:
      "https://github.com/khanfaizal813/Personal-3D-Portfolio",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/faizal-khan-303502156",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/khanfaizal813",
  },
] as const;
