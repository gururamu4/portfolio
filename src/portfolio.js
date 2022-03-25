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
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Angular / Nodejs / React Native/ Postgres/ MongoDB/ AWS and some other cool libraries and frameworks."
  ),
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
  linkedin: "https://www.linkedin.com/in/gururamu",
  // github: "https://github.com/gururamu4",
  gmail: "gururamu4497@gmail.com",
  twitter: "https://twitter.com/guru_ram44",
  facebook: "https://www.facebook.com/guru.andiappan.7/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Develop",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop high Engaging Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Develop Fast, Scalable and Secured REST Apis"
    ),
    emoji(
      "⚡ Integration of third party services such as AWS / Firebase/ Digital Ocean"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // micro service, yarn, git, jes
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "MicroService",
      fontAwesomeClassname: "fab fa-microblog"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
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
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Angular",
      progressPercentage: "100%"
    },
    {
      Stack: "React",
      progressPercentage: "100%"
    },
    {
      Stack: "BackEnd Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Node Js",
      progressPercentage: "90%"
    },
    {
      Stack: "AWS SERVICES(Cloudfront, Lambda, Dynamodb, SES, S3 Bucket, EC2, Elastic Search, Elastic Container Registry, RDS, SQS, ECS, VPC, API GATEWAY, Route 53,SNS, Step Functions, AWS Connect)",
      progressPercentage: "100%"
    },
    {
      Stack: "TypeScript, JavaScript",
      progressPercentage: "100%"
    },
    {
      Stack: "MicroService, Docker, CI/CD(Jenkins, circleci, github actions, bitbucket pipeline)",
      progressPercentage: "100%"
    },
    {
      Stack: "DataBase(Postgres, MongoDb)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Developer(SDE 3)",
      company: "Walmart Global Tech",
      companylogo: require("./assets/images/walmart_logo.gif"),
      date: "From Oct 2021",
      desc:
        "Worked On Chatbot Which was offered as service which can be plugged in into any website, my role is lead and develop the full stack application using react, node, luis, rds(postgres), elastic Search",
      descBullets: [
          "Creating new Endpoints and APIS for various features that I will be implementing in Frontend",
          `Creating new Features, functionality and capabilities using
          React, Redux, Material UI and CSS Grid system and MonoRepo architecture`,
          `Creating scalable and cost efficient solutions using aws offered services `,
          `Implemented Email and Otp based Authentication`
        ]
    },
    {
      role: "Senior Full Stack Developer",
      company: "Tricon Infotech",
      companylogo: require("./assets/images/tricon.png"),
      date: "Sept 2020 – Oct 2021",
      desc:
        `My Role is to create end to end features for our new product utilizing ReactJS,Redux in frontend and Node, express as MicroService in BackEnd. `,
      descBullets: [
        "Design overall architecture of the web application",
        "Use my extensive experience with front end development to define the structure and components for the project, making sure they are reusable",
        "Back-End MicroServices for loan lending application using NodeJs, Express, Typeorm, Postgres, Docker",
        "Implemented Video calling, audio calling, sms messaging using twilio, aws pipoint",
        "Coding yaml's in Github Action and CircleCi for deployment",
      ]
    },
    {
      role: "Full Stack Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.png"),
      date: "May 2018 – March 2020",
      desc:
        "My Role is to Create New Interactive and Responsive pages and developing the rest apis for them",
      descBullets: [
        `Creating new Features, functionality and capabilities on live audio monitoring applications using
        Angular,Redux, flex and CSS Grid system, SASS, Bootstrap and NRWL/NX architecture.`,
        "Converting Wire frames from sketch/illustrator to lively design",
        "Developed Apis using nodejs and mongodb",
        "Actively Participated in Unit Test case using jest for both react and node",
        "Experience Debugging using Chrome Developer Tools",
      ]
    },
   
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
  subtitle: "Reverse Engineering Some of my Favourite Applications",
  projects: [
    {
      image: require("./assets/images/projects/netflixlogo.png"),
      stack: `FRONTEND - React, Redux, Material UI \n Backend - MoviesDb Api Integration`,
      projectName: "Netflix",
      projectDesc: "At Netflix Clone, we want to entertain the world. Whatever your taste, we give you access to best-in-class TV shows, movies and documentaries with no ads, in one simple subscription",
      url: "https://netliflix.netlify.app",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://netliflix.netlify.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/projects/jira.webp"),
      projectName: "JIRA",
      stack: `FRONTEND - React, Redux \n Backend - Node, Express, typeorm \n DataBase: Postgres`,
      url: "https://jeera.netlify.app",
      projectDesc: "Jira Clone is a collaboration tool that organizes your projects into boards. In one glance, Jira tells you what's being worked on, who's working on what, and where something is in a process",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://jeera.netlify.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/projects/airbnbLogo.png"),
      projectName: "AirBnb",
      stack: `FRONTEND - React, Redux, Jest \n Backend - NodeJs, Express \n Database: MongoDb`,
      projectDesc: "An Airbnb description is more than just a rundown of your bed and bath counts—it's a chance to connect with potential guests on an emotional level and hone in on what makes your rental one of a kind",
      url: "https://arbnb-clone.netlify.app",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://arbnb-clone.netlify.app"
        }
      ]
    },
    {
      image: require("./assets/images/projects/prime.jpg"),
      projectName: "Prime Video",
      stack: `FRONTEND - React, Redux, Sass \n Backend - MoviesDb Api Integration`,
      projectDesc: "Prime Video is a video streaming service available for Amazon Prime members. subscribe to over 100 premium channels with Prime Video Channels",
      url: "https://amzon-prime.netlify.app",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://amzon-prime.netlify.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/projects/imdb.jpg"),
      projectName: "IMDb",
      stack: `FRONTEND - React, Redux, Jest \n Backend - MoviesDb Api Integration`,
      projectDesc: "IMDb (an acronym for Internet Movie Database) is an online database of information related to films, television programs and streaming content online – including cast, production crew and personal biographies",
      url: "https://imovie-db.netlify.app",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://imovie-db.netlify.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/projects/slacklogo.png"),
      projectName: "Slack",
      stack: `FRONTEND - React, Redux \n Backend - FireBase`,
      projectDesc: "Slack is a channel-based messaging platform. With Slack, people can work together more effectively, connect all their software tools and services and find the information that they need to do their best work",
      url: "https://slackify-me.web.app/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://slackify-me.web.app/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9994564326",
  email_address: "gururamu447@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
