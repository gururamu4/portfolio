/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Guru Ramu",
  title: "Hi, I'm Guru Ramu",
  subTitle: emoji(
      "A results-driven Full Stack Software Developer with expertise in building scalable Web and Mobile applications using JavaScript, TypeScript, React.js, Angular, Node.js, React Native, PostgreSQL, MongoDB, and AWS. Passionate about architecting high-performance, secure, and cloud-native solutions while exploring emerging technologies."  ),
  resumeLink:
    "https://drive.google.com/file/d/1VzD_STmvOiJcJct0Ps2-4RiF5KjNc_Dk/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
export const gitProfile = {
  "data":{
     "user":{
        "name":null,
        "bio":"Innovative Full Stack Developer with experience in react, angular, node, express, mongo, postgres, aws, microservice, docker, ci/cd",
        "isHireable":false,
        "avatarUrl":"https://avatars.githubusercontent.com/u/44159423?u=298b4e17df2069a35f30f0a85edf320b8e076fce&v=4",
        "location":null,
        "pinnedItems":{
           "totalCount":6,
           "edges":[
              {
                 "node":{
                    "name":"airbnb",
                    "description":null,
                    "forkCount":0,
                    "stargazers":{
                       "totalCount":0
                    },
                    "url":"https://github.com/gururamu4/airbnb",
                    "id":"MDEwOlJlcG9zaXRvcnkzNTExMTM3NTg=",
                    "diskUsage":1114,
                    "primaryLanguage":{
                       "name":"JavaScript",
                       "color":"#f1e05a"
                    }
                 }
              },
              {
                 "node":{
                    "name":"jira",
                    "description":"jira clone using react, node, postgresql",
                    "forkCount":0,
                    "stargazers":{
                       "totalCount":0
                    },
                    "url":"https://github.com/gururamu4/jira",
                    "id":"MDEwOlJlcG9zaXRvcnkzNTI1MTg5MTc=",
                    "diskUsage":1842,
                    "primaryLanguage":{
                       "name":"JavaScript",
                       "color":"#f1e05a"
                    }
                 }
              },
              {
                 "node":{
                    "name":"js-algorithms",
                    "description":"A List of javascript algorithms",
                    "forkCount":0,
                    "stargazers":{
                       "totalCount":0
                    },
                    "url":"https://github.com/gururamu4/js-algorithms",
                    "id":"MDEwOlJlcG9zaXRvcnkzNTE0MzI2ODI=",
                    "diskUsage":3,
                    "primaryLanguage":{
                       "name":"JavaScript",
                       "color":"#f1e05a"
                    }
                 }
              },
              {
                 "node":{
                    "name":"netflix",
                    "description":null,
                    "forkCount":0,
                    "stargazers":{
                       "totalCount":0
                    },
                    "url":"https://github.com/gururamu4/netflix",
                    "id":"MDEwOlJlcG9zaXRvcnkzNTExNzkxMDc=",
                    "diskUsage":11648,
                    "primaryLanguage":{
                       "name":"TypeScript",
                       "color":"#2b7489"
                    }
                 }
              },
              {
                 "node":{
                    "name":"portfolio",
                    "description":"Personal Website",
                    "forkCount":1,
                    "stargazers":{
                       "totalCount":0
                    },
                    "url":"https://github.com/gururamu4/portfolio",
                    "id":"MDEwOlJlcG9zaXRvcnkzNTE0MzE1Njc=",
                    "diskUsage":0,
                    "primaryLanguage":{
                       "name":"JavaScript",
                       "color":"#f1e05a"
                    }
                 }
              },
              {
                 "node":{
                    "name":"prime-video",
                    "description":null,
                    "forkCount":0,
                    "stargazers":{
                       "totalCount":0
                    },
                    "url":"https://github.com/gururamu4/prime-video",
                    "id":"MDEwOlJlcG9zaXRvcnkzNTExMDUxOTU=",
                    "diskUsage":8854,
                    "primaryLanguage":{
                       "name":"JavaScript",
                       "color":"#f1e05a"
                    }
                 }
              }
           ]
        }
     }
  }
}

const socialMediaLinks = {
  github: "https://github.com/gururamu4",
  gmail: "gururamu4497@gmail.com",
  linkedin: "https://www.linkedin.com/in/gururamu",
  twitter: "https://twitter.com/guru_ram44",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I Develop",
  subTitle: "FULL STACK DEVELOPER PASSIONATE ABOUT BUILDING SCALABLE & SECURE APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build interactive, high-performance web and mobile user interfaces with modern frontend frameworks"
    ),
    emoji(
      "⚡ Develop fast, scalable, and secure REST & GraphQL APIs for seamless data handling"
    ),
    emoji(
      "⚡ Architect and deploy cloud-based applications using AWS, Firebase, and DigitalOcean"
    ),
    emoji(
      "⚡ Implement microservices architecture and event-driven systems for highly available applications"
    ),
    emoji(
      "⚡ Ensure security, authentication, and best practices for Web2 and Web3 applications"
    ),
    emoji(
      "⚡ Progressive Web Applications (PWA) with modern SPA frameworks and offline-first capabilities"
    )
  ],

  /* Make sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript / TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "SQL & NoSQL Databases (Postgres, MongoDB)",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Microservices Architecture",
      fontAwesomeClassname: "fab fa-microblog"
    },
    {
      skillName: "Docker & Kubernetes",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "CI/CD Pipelines (GitHub Actions, Jenkins, CircleCI)",
      fontAwesomeClassname: "fas fa-tools"
    },
    {
      skillName: "Web3 & Blockchain (Ethers.js, Web3.js, Solidity)",
      fontAwesomeClassname: "fas fa-lock"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sastra University",
      logo: require("./assets/images/sastra.png"),
      subHeader: "Bachelor of Technology in Mechatronics(Robotics & IOT)",
      duration: "June 2014 - April 2018",
      desc: "Participated in the research of 3d Servo Motor Design and Optimization",
      descBullets: [
        "Mechatronics is an interdisciplinary area of engineering that combines mechanical and electrical engineering and computer science",
        "Automated adjustment, Maximized uptime, Modular integration.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  "viewSkillBars": true,
  "experience": [
    {
      "Stack": "Full Stack Development",
      "progressPercentage": "100%"
    },
    {
      "Stack": "Frontend Development (React, Next.js, Angular)",
      "progressPercentage": "100%"
    },
    {
      "Stack": "Backend Development (Node.js, Express, Nest.js, Fastify)",
      "progressPercentage": "95%"
    },
    {
      "Stack": "Web3 & Blockchain (Solidity, Ethers.js, Web3.js, Viem)",
      "progressPercentage": "90%"
    },
    {
      "Stack": "AWS & Cloud Services (Lambda, CloudFront, S3, RDS, ECS, DynamoDB, API Gateway, Step Functions, SNS, SQS, VPC)",
      "progressPercentage": "100%"
    },
    {
      "Stack": "Smart Contract Security & Optimization",
      "progressPercentage": "85%"
    },
    {
      "Stack": "Microservices, Event-Driven Architecture (Kafka, RabbitMQ, NATS)",
      "progressPercentage": "90%"
    },
    {
      "Stack": "CI/CD & DevOps (GitHub Actions, CircleCI, Jenkins, Docker, Kubernetes, Terraform, Vercel)",
      "progressPercentage": "100%"
    },
    {
      "Stack": "Database Management (PostgreSQL, MongoDB, Redis, Firebase, TypeORM, Prisma)",
      "progressPercentage": "90%"
    },
    {
      "Stack": "Testing & Debugging (Jest, Playwright, Cypress, Chrome DevTools)",
      "progressPercentage": "90%"
    }
  ],
  "displayCodersrank": false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  "experience": [
    {
      "role": "Senior Full Stack Developer Web3 Infra Team",
      "company": "Web3Auth",
      "companylogo": require("./assets/images/Web3authlogolight.png"),
      "date": "May 2022 - Present",
      "desc": "Leading the development of Web3 infrastructure solutions, integrating secure authentication and key management across multiple blockchain networks.",
      "descBullets": [
        "Developed and optimized scalable, high-performance APIs for Web3 authentication.",
        "Integrated Metamask Snap, Trust Wallet, and MPC wallet authentication for seamless multi-chain experiences.",
        "Designed secure and scalable backend architecture using AWS Lambda, PostgreSQL, and Redis.",
        "Led performance improvements, reducing authentication latency by 30% through caching and indexing optimizations.",
        "Mentored junior developers on smart contract security, decentralized identity, and blockchain infrastructure."
      ]
    },
    {
      "role": "Full-Stack Developer (SDE 3)",
      "company": "Walmart Global Tech",
      "companylogo": require("./assets/images/walmart_logo.gif"),
      "date": "May 2020 - May 2022",
      "desc": "Developed and maintained AI-driven chatbot solutions that improved customer service efficiency across Walmart platforms.",
      "descBullets": [
        "Built and optimized scalable REST APIs and microservices using Node.js and PostgreSQL.",
        "Developed real-time chat features with AI-driven recommendations, reducing resolution times by 40%.",
        "Implemented authentication flows using OAuth 2.0, JWT, and multi-factor authentication (MFA).",
        "Architected and maintained a monorepo structure for frontend services in React.js and Redux.",
      ]
    },
    {
      "role": "Full Stack Engineer",
      "company": "Tata Consultancy Services",
      "companylogo": require("./assets/images/tcs.png"),
      "date": "May 2018 – March 2020",
      "desc": "Developed scalable front-end and backend solutions for enterprise live audio monitoring applications.",
      "descBullets": [
        "Built interactive and responsive UIs using Angular, Redux, and NRWL/NX architecture.",
        "Designed and implemented RESTful APIs using Node.js, MongoDB, and Express.",
        "Developed real-time audio streaming features for large-scale enterprise applications.",
        "Wrote and maintained unit and integration tests using Jest, ensuring 95% test coverage.",
        "Collaborated with designers to convert wireframes from Sketch/Illustrator into functional web applications."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Self Projects",
  subtitle: "Reverse Engineering Some of my Favorite Applications",
  projects: [
    {
      image: require("./assets/images/projects/jira.webp"),
      projectName: "JIRA",
      stack: `FRONTEND - React, Redux \n Backend - Node, typeorm \n DataBase: Postgres`,
      url: "https://jira-ruddy.vercel.app/",
      projectDesc: "A project management tool inspired by Jira, enabling task tracking, workflow organization, and team collaboration through an interactive Kanban board.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://jira-ruddy.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/netflixlogo.png"),
      stack: `FRONTEND - React, Redux, \n Material UI \n Backend - MoviesDb Api`,
      projectName: "Netflix",
      projectDesc: "A Netflix-inspired movie streaming application that fetches content from the MoviesDB API, offering a dynamic and immersive user experience with a sleek UI.",
      url: "https://netflix-olive-eta.vercel.app/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://netflix-olive-eta.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/airbnbLogo.png"),
      projectName: "AirBnb",
      stack: `FRONTEND - React, Redux, Jest \n Backend - NodeJs, Express \n Database: MongoDb`,
      projectDesc: "A full-stack Airbnb-inspired platform where users can browse, book, and list rental properties, with real-time data handling and user authentication.",
      url: "https://airbnb-omega-seven.vercel.app/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://airbnb-omega-seven.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/dev.png"),
      projectName: "Dev.to",
      stack: `FRONTEND - React, Redux, Sass \n Backend - Static Api`,
      projectDesc: "A community-driven blogging platform for developers, replicating Dev.to's interface and features, enabling content sharing, discussions, and networking.",
      url: "https://dev-to-lovat.vercel.app/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dev-to-lovat.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
}

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a Opportunity or just want to say hi? My Inbox is open for all.",
  number: "+91-9994564326",
  email_address: "gururamu447@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
  ],
  display: false // Set false to hide this section, defaults to true
};


const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
  ],
  display: true // Set false to hide this section, defaults to true
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
