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
  username: "Aakash Deepak",
  title: "Hi all, I'm Aakash",
  subTitle: emoji(
    "I'm a highly experienced Android Developer with 9 years of expertise in crafting innovative and user-centric mobile applications. My passion for mobile technology and my dedication to delivering top-notch solutions make me a reliable choice for your Android development needs."
    // "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/13hXWZpCEMAPvIdPimJyOpYoiA5aywZaS/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Aakash9565",
  linkedin: "https://www.linkedin.com/in/akshdpk5",
  gmail: "aksh.dpk5@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/3541465/aakash",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I craft user-friendly Android apps with 9 years of experience.",
  skills: [
    emoji(
      "⚡ Develop highly interactive User Interfaces for your mobile applications"
    ),
    emoji("⚡ Prioritizing exceptional user experiences"),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    ),
    emoji(
      "⚡ Collaborating with cross-functional teams for project success"
    ),
    emoji(
      "⚡ Staying current with the latest mobile technologies and trends"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "React JS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "BitBucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "MySQL/ Room Db",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Punjab Technical University",
      logo: require("./assets/images/ptuLogo.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "2010 - 2014",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Data Structures and Algorithms, Operating Systems, ..."
    }
    // ,
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
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java",
      progressPercentage: "90%"
    },
    {
      Stack: "Kotlin",
      progressPercentage: "80%"
    },
    {
      Stack: "React Native",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technology Lead",
      company: "Infosys",
      companylogo: require("./assets/images/infosysLogo.jpg"),
      date: "Dec 2021 - Present",
      descBullets: [
        "Led the development of the Manufacturing Parts and Accessories Management Platform and implemented key features.",
        "Developed an Android Application for handheld devices to manage in-house assembly and shipping parts for a car manufacturing company using Socket Communication, ensuring a seamless user experience."
      ]
    },
    {
      role: "Sr. Android Developer",
      company: "Evon Technologies",
      companylogo: require("./assets/images/evonLogo.jpg"),
      date: "Feb 2020 - Dec 2021",
      descBullets: [
        "Worked on mobile mental health platform — made for and With Teens In Mind — to improve teen well-being by bringing together the best aspects of digital media, live support, and clinical care.",
        "Created mobile interface for an online takeaway and home delivery food ordering system.",
        "Worked on TV Streaming application with options to play various channels and category."
      ]
    },
    {
      role: "Sr. Android Developer",
      company: "Lueinfoservices Pvt. Ltd.",
      companylogo: require("./assets/images/defaultLogo.png"),
      date: "Jun 2018 - Feb 2020",
      desc: "Design and implementation of Android application including development of the user interface screens, databases, interfacing with third party components etc as required. Develop user interface as per design. Suggest and implement enhancements to the design to deliver a more compelling solution."
    },
    {
      role: "Sr. Android Developer",
      company: "ProductRx Consulting Pvt. Ltd.",
      companylogo: require("./assets/images/productrxLogo.jpg"),
      date: "Jan 2016 - Jun 2017",
      descBullets: [
        "Development and debugging Android applications, gaining valuable experience in app architecture and design.",
        "Participated in code reviews and contributed to the implementation of new features.",
        "Created user-friendly interfaces and responsive layouts to enhance user experiences."
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/bemeLogoWeb.webp"),
      projectName: "BeMe: Teen Wellness",
      projectDesc: "BeMe is a mobile mental health platform — made for and With Teens In Mind™ — to improve teen well-being by bringing together the best aspects of digital media, live support, and clinical care.",
      footerLink: [
        {
          name: "Get the App",
          url: "https://play.google.com/store/apps/details?id=com.bememultiplatform.android"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ordermeal.webp"),
      projectName: "Order Meal",
      projectDesc: "Order Meal is an online takeaway & home delivery food ordering system, which is compatible with all the devices, which means you can use any device including smartphones, tablets as well as computers to order food online.",
      footerLink: [
        {
          name: "Get the App",
          url: "https://play.google.com/store/apps/details?id=com.ordermeal"
        }
      ]
    },
    {
      image: require("./assets/images/omdriver.webp"),
      projectName: "Order Meal Driver",
      projectDesc: "Order Meal Driver application provides fast and reliable delivery service to New Zealand customers and helps restaurants to deliver food. Drivers can work as per their availability and earn money.",
      footerLink: [
        {
          name: "Get the App",
          url: "https://play.google.com/store/apps/details?id=com.ordermeal.driver"
        }
      ]
    },
    {
      image: require("./assets/images/grandimperial.webp"),
      projectName: "Grand Imperial",
      projectDesc: "Grand Imperial mobile app is the official F&B app which allow users to utilise our online facilities, interact, communicate and redeem reward points on each transaction.",
      footerLink: [
        {
          name: "Get the App",
          url: "https://play.google.com/store/apps/details?id=com.lueinfoservices.grandimperialgroup"
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://androidbeasts.wordpress.com/",
      title: "Welcome to the ultimate Android blog, your one-stop destination for all things Android!",
      description:
        "Whether you're a seasoned Android enthusiast, a budding developer, or simply a user looking to make the most of your Android device, this blog is here to keep you updated, informed, and inspired. We delve into the vast and ever-evolving world of Android to bring you the latest news, tips, tricks, app reviews, development insights, and so much more."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8588030613",
  email_address: "aksh.dpk5@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
