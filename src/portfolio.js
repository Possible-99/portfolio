/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Juan Sánchez",
  title: "Hi, I'm happy you are here",
  subTitle: emoji(
    "My name is Juan Sánchez, I'm a skilled competitive programmer and a Full Stack Developer proficient in Python, JavaScript, React.js, Node.js, Django, SQL, and more. Passionate about crafting exceptional applications with a focus on seamless user experiences."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xbVPWHn8_juSzS97cAIqdrv7NzFfJNhf/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Possible-99",
  linkedin: "https://www.linkedin.com/in/juanrojo99/",
  gmail: "juanpsfi3023@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I love to learn new technologies and understand the tradeoffs of picking one over the other in an real world project. Here are some technologies that I have learned:",
  skills: [
    emoji(
      "📌 Craft captivating Front-end/User Interfaces, leveraging the power of React, to deliver highly interactive web applications."
    ),
    emoji("📌 Leverage the robustness of Django and the efficiency of SQL in the backend to develop powerful and secure web solutions."),
    emoji(
      "📌 Maintain a strong focus on best practices and industry standards, ensuring code quality and maintainability."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

    {
      skillName: "PYTHON",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JAVASCRIPT",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-c"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }, 
    {
      skillName: "REACT JS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "DJANGO",
      fontAwesomeClassname: "fas fa-d"
    },
    {
      skillName: "NODE JS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "FIREBASE",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "DOCKER",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS 3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Autonomous University of Mexico",
      logo: require("./assets/images/unamLogo.jpg"),
      subHeader: "Bachelor’s degree in Computer Engineering ",
      duration: "Expected December 2024",
      desc: "GPA : 3.6",
      descBullets: [
        "Relevant courses: Data structures and algorithms, relational databases, Calculus I – IV, OOP",
        "Clubs: Competitive Programming Club(CPCFI)"
      ]
    },
    // Add competitive programmin club
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "SEDESA",
      companylogo: require("./assets/images/sedesaLogo.jpg"),
      date: "February 2023 – Present",
      desc: "Health Platform",
      descBullets: [
        "Developed backend endpoints that serve to synthesize information from different patients. Used Django and Postgresql for database data manipulation and performed pre-processing to reduce client-side load. ",
        "Integrated dashboard routes in the frontend that shows relevant information about application logs and medical prescriptions, in the process created react components that speed up views time development by 10%.",
        "Worked closely with A.I team and client for getting right requirements and implementation of different features."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "CPCFI",
      companylogo: require("./assets/images/cpcfiLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Competitive Programmin Club",
      descBullets: [
        "Created user ranking feature with React, Material UI, and codeforces API for showing the problems solved by the members of the club for fomenting competitiveness.",
        "Implemented sign-up with email or Google and a feature that adds problems from codeforces to the platform problem set.",
        "Improved users files upload performance on signup form by 50% by uploading them in parallel."
      ]
    },
    {
      role: "Algorithms Instructor",
      company: "Faculty of Engineering(UNAM)",
      companylogo: require("./assets/images/fiLogo.jpg"),
      date: "August 2022 – November 2022",
      desc: "",
      descBullets : [
        "Helped design a new algorithms program for the next generation of students for improving understanding of the concepts.",
        "Teached lectures about basic data structures and graphs algorithms. Gathered a set of problems of common competitive programming topics for students to practice.",
        "Guided students on how to test their code in a competitive programming environment.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "I HAVE CONTRIBUTED TO SEVERAL PROJECTS DURING MY TIME IN COLLEGE, AND I THOROUGHLY ENJOY WORKING IN A TEAM.",
  projects: [
    {
      image: require("./assets/images/compilerLogo.png"),
      projectName: "C compiler",
      projectDesc: "A C compiler implemented using the functional programming language Elixir that uses GCC as backend.",
      footerLink: [
        {
          name: "View Project",
          url: "https://www.hiphoox.com/c221-bugswriters/Bwcc.html"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //======== NEed to update this
      image: require("./assets/images/aiTool.png"),
      projectName: "Machine learning tool",
      projectDesc: "A web application, developed with React and Flask, that can run popular machine learning algorithms on a dataset.",
      footerLink: [
        {
          name: "View Project",
          url: "https://juan-sanchez-ai-proj.onrender.com/"
        }
      ]
    },
    {
      //======== NEed to update this
      image: require("./assets/images/housing.png"),
      projectName: "Housing",
      projectDesc: "A computer graphic environment that illustrates a futuristic housing development, was created using OpenGL.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Possible-99/Computer_graphics_Project"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Facebook Programming Contest",
      subtitle:
        "11th place out of 80 participants in a competitive programming contest organized by Meta recruiters at National Autonomous University of Mexico.",
      image: require("./assets/images/metaLogo.jpg"),
      imageAlt: "Facebook contest",
      footerLink: [
        {
          name: "Scoreboard",
          url: "https://www.facebook.com/codingcompetitions/mexico-universities/2021/UNAM/scoreboard?start=0"
        },
      ]
    },
    {
      title: "ICPC",
      subtitle:
        "Top 20% in ICPC Gran premio de México where 350 teams participated",
      image: require("./assets/images/icpcMexico.jpg"),
      imageAlt: "ICPC",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1QCmjXOutBrNJ7AXMk5oKrZFzCQhUEvdL/view?usp=sharing"
        }
      ]
    },

    {
      title: "CPCFI UNAM CONTEST",
      subtitle: "9th place out of 45 participants in a competitive programming contest organized by the competitive programmin club of National Autonomous University of Mexico for being part of the club",
      image: require("./assets/images/logoUnam.png"),
      imageAlt: "CPCFI",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1qECUdRTDeNcMMdffNJ0ulxeCAJc3Uksm/view?usp=sharing"},
        {
          name: "Scoreboard",
          url: "https://open.kattis.com/contests/qz5bds/standings"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you'd like to contact me via email, please feel free to do so. I look forward to hearing from you.",
  number: "+525511870629",
  email_address: "juanpsfi3023@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
