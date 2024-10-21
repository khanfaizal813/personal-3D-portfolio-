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
  rakuten,
  calsoft,
  kreativan,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
  {
    title: "Frontend Engineer",
    icon: mobile,
  },
  {
    title: "Angular / React Developer",
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
    title: "Senior Frontend Engineer",
    company_name: "Calsoft",
    icon: calsoft,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Created user registration flows, optimizing the onboarding experience and enhancing user retention .",
      "Implemented critical security enhancements, including multi-factor authentication (MFA) and multi-person approval (MPA), significantly strengthening the application's defenses and reducing security vulnerabilities by 20%.",
      "Configured automatic user sign-out after 30 minutes of inactivity, significantly boosting application security and mitigating potential risks, resulting in a 50% improvement in overall system security.",
      "Improved the user onboarding process, resulting in increased user adoption and engagement by 30%.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Rakuten",
    icon: rakuten,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Nov 2022",
    points: [
      "Innovatively streamlined the workflow for QA Teams by implementing CDK functionality with Angular, reducing the users' manual creation process from 3 steps to 1, resulting in a remarkable efficiency gain of 90%",
      "Played a pivotal role in Integrating keycloak-12,16,18 using web languages, catering to the diverse needs of multiple clients and RCP",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Actively engaged with clients to define solution requirements, demonstrating a collaborative approach to project development and ensuring alignment with stakeholders' expectations.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Kreativan Technologies",
    icon: kreativan,
    iconBg: "#383E56",
    date: "Jan 2020 - Jan 2021",
    points: [
      "Spearheaded the development of a seamless login and registration system for a web application, enhancing user authentication and accessibility.",
      "Translated design concepts into tangible web assets through meticulous Design to HTML Conversion, ensuring visual consistency and user experience.",
      "Took charge of implementing an intuitive shopping cart design page, contributing to a user-friendly e-commerce experience, and created multiple templates for diverse project requirements.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Spotify Clone",
    description:
      "Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled-component",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project7,
    source_code_link:
      "https://github.com/khanfaizal813/spotify-clone-React/tree/main",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/faizal-khan-303502156/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/khanfaizal813",
  },
] as const;
