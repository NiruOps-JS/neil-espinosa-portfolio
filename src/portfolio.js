

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Neil Espinosa",
  description:
    "A passionate Business Development Specialist who drives end-to-end product and partnership growth, building sustainable and scalable social and technical solutions that create meaningful impact. 🚀",
  og: {
    title: "Neil Espinosa Portfolio",
    type: "website",
    url: "https://niruops-js.github.io/PollenPages",
  },
};

//Home Page
const greeting = {
  title: "Neil Espinosa",
  logo_name: "Neil Espinosa",
  nickname: "NiruOps-JS",
  subTitle:
    "A passionate Business Development Specialist who drives end-to-end product and partnership growth, building sustainable and scalable social and technical solutions that create meaningful impact. 🚀",
  resumeLink:
    "https://drive.google.com/file/d/1Wluqo8e3LQGzIpqWgaey4suB8zwvP4yB/view",
  portfolio_repository: "https://github.com/NiruOps-JS/PollenPages",
  githubProfile: "https://github.com/NiruOps-JS",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/NiruOps-JS",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/neil-edwin-espinosa-b773651b5?trk=people-guest_people_search-card",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@didyouknowautomation",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "Gmail",
    link: "mailto:neiledwin1125@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61586747004953",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
];

const skills = {
  data: [
    {
      title: "Business Development & Partnerships",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Driving end-to-end business development, from lead generation to deal closure",
        "⚡ Building and managing strategic partnerships that create sustainable value",
        "⚡ Developing and executing go-to-market strategies for new products and services",
      ],
    },
    {
      title: "Lead Generation",
      fileName: "FullStackImg",
      skills: [
        "⚡ Identifying and researching potential leads through market and data analysis",
        "⚡ Executing targeted outreach campaigns via email, LinkedIn, and cold calling",
        "⚡ Building and managing sales pipelines using CRM tools",
        "⚡ Qualifying prospects and scheduling meetings for the sales team"
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        }
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Golden State College",
      subtitle: "Information Technology",
      logo_path: "golden-state_logo.png",
      alt_name: "GSC Kiamba",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Completed Information Technology coursework emphasizing Artificial Intelligence topics, including Explainable AI, Graph Machine Learning, and Computer Vision.",
        "⚡ Served as a research assistant developing and evaluating new algorithms in Graph Machine Learning and Network Science; contributed to experimentation, analysis, and technical write-ups.",
        "⚡ Collaborated with the Multimedia Department on documentary and interview projects, handling technical tasks in filming, editing, and digital content production."
      ],
      website_link: "https://www.goldenstate.edu.ph/",
    },
    {
      title: "Cor Jesu College",
      subtitle: "Business Administration",
      logo_path: "cor-jesu_logo.png",
      alt_name: "CJC Digos",
      duration: "2015-2019",
      descriptions: [
        "⚡ Studied Business Administration covering Accounting, Finance, Marketing, Organizational Behavior, Operations Management, and Strategic Management.",
        "⚡ Completed courses and projects in Project Management, Business Analytics, Entrepreneurship, and Financial Management; participated in internships and capstone projects.",
        "⚡ Awarded Merit-cum-Means Scholarship (top 10% of class) and received a director’s award for consistent academic excellence and leadership."
      ],
      website_link: "https://apps.cjc.edu.ph/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I’ve held diverse roles across corporate enterprises, startups, and nonprofits — from scaling affiliate programs at TikTok and serving as a Founder, to fulfilling key Sales, Business Development, and Project Management positions. I build robust partnership pipelines, design repeatable inbound/outbound sales systems, and manage end-to-end operations for ventures ranging from real estate to virtual communities. Additionally, my volunteer contributions to AI platforms and open-source projects allow me to bridge community-driven technical innovation with cross-functional go-to-market strategies, consistently turning complex opportunities into measurable outcomes.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Content Creation & Affiliation",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "Manila, Philippines",
          description:
            "At TikTok Inc., created and scaled creator affiliation programs that connect creators with brands, driving content-to-commerce growth through optimized affiliate campaigns and monetization strategies."
        },
        {
          title: "Business Development Specialist",
          company: "Just Jump Marketing Group",
          company_url: "https://justjumpmarketing.com/",
          logo_path: "justjump_logo.jpg",
          duration: "Mar 2019 - Apr 2020",
          location: "Remote",
          description:
            "Executed lead generation and outreach programs for agency clients; qualified prospects, managed early-stage sales conversations, supported CRM workflows, and helped build repeatable processes for partner and client acquisition.",
          color: "#1abc9c"
        },
        {
          title: "Founder",
          company: "Virtual Community",
          company_url: "https://www.notion.so/virtualcommunity/NEIL-All-around-Virtual-Assistant-9a863622c0a1416cbba0549a13d25c43?showMoveTo=true",
          logo_path: "virtualcommunity_logo.png",
          duration: "Mar 2019 - Present",
          location: "Remote",
          description:
            "Founded and scaled an online community focused on knowledge sharing and startup support. Responsible for community growth, program design, operations, mentoring, company setup, partnerships, and strategic leadership for new initiatives.",
          color: "#6f42c1"
        },
        {
          title: "Project Development Manager",
          company: "PJ K DALAIS",
          company_url: "https://potatoproject.mystrikingly.com/",
          logo_path: "pjkd_logo.jpg",
          duration: "Mar 2020 - Apr 2021",
          location: "Remote",
          description:
            "Led strategic planning and project oversight, including resource allocation, budget creation, progress monitoring, and regular reporting to senior management. Ensured projects met timeline and budget targets while maintaining clear communication across teams.",
          color: "#c0392b"
        },
        {
          title: "Project Manager",
          company: "Full Circle Group, LLC",
          company_url: "https://fullcirclegrp.com/",
          logo_path: "fullcircle_logo.png",
          duration: "Apr 2021 - Jan 2022",
          location: "Remote",
          description:
            "Planned, executed, and oversaw client projects end-to-end to deliver on time and within budget. Coordinated cross-functional teams, managed stakeholder communications, tracked progress, and resolved issues to ensure successful project delivery.",
          color: "#8a2be2"
        },
        {
          title: "Real Estate Project Manager",
          company: "Domicile",
          company_url: "https://domicile.ch/en/home-en/",
          logo_path: "domicile_logo.png",
          duration: "Jan 2022 - Jan 2023",
          location: "Remote",
          description:
            "Managed short- and long-term rental projects, property marketing and maintenance (Airbnb initiatives), leasing and tenant relations, and financial oversight to optimize occupancy and revenue. Oversaw project management for two RV self-storage facilities, ensuring operational efficiency, security, and maintenance.",
          color: "#2e7d32"
        },
        {
          title: "Business Development Specialist",
          company: "Mitchell & Stones",
          company_url: "https://mitchellandstones.com/",
          logo_path: "mitchellstones_logo.png",
          duration: "Apr 2023 - Sep 2025",
          location: "Remote (Mitchell & Stones Network Eagle Lab, Southampton, UK)",
          description:
            "Owned lead generation and business development activities; managed data entry and pipeline hygiene; supported sales and outreach campaigns; prepared prospect lists and assisted with qualifying opportunities for the growth team.",
          color: "#1f8dd6"
        },
        {
          title: "Sales Development Manager",
          company: "Newtation",
          company_url: "https://newtationco.app/",
          logo_path: "newtation_logo.png",
          duration: "Jan 2024 - Nov 2025",
          location: "Suffolk County, New York, United States (Remote)",
          description:
            "Built structured, relationship-driven growth systems for early-stage and service-based businesses. Designed and executed outbound/inbound sales strategies, identified and qualified leads, built partnership pipelines, supported go-to-market planning, created repeatable CRM workflows, managed discovery calls, and improved conversion through targeted, value-based outreach.",
          color: "#d35400"
        },
        {
          title: "Partnerships Coordinator",
          company: "The Best Day Ever Foundation",
          company_url: "https://www.bestdayeverfoundation.com/",
          logo_path: "bestday_logo.jpg",
          duration: "Mar 2025 - Present",
          location: "Remote",
          description:
            "Lead partnership strategy and stakeholder engagement for a nonprofit foundation. Build and manage relationships with donors, NGOs, and community partners; design collaboration frameworks and partnership proposals; coordinate joint programs and monitor outcomes to ensure impact and sustainability.",
          color: "#0b6e4f"
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Community Contributing Developer",
          company: "Pollinations",
          company_url:
            "https://pollinations.ai/",
          logo_path: "pollinations_logo.png",
          duration: "Jan 2025 - Present",
          location: "Work From Home",
          description:
            "I have been contributing to Pollinations, an AI-powered platform for scientific research. I have been working on a number of projects, including a number of machine learning models for natural language processing, computer vision, and reinforcement learning.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Reach Out",
    profile_image_path: "Profile.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  contactUsSection: {
    title: "Contact Us",
    call: "09103620988",
    email: "neiledwin1125@gmail.com",
    location: "General Santos City (Dadiangas), South Cotabato, Philippines",
  },
  addressSection: {
    title: "Address",
    subtitle: "General Santos City (Dadiangas), South Cotabato, Philippines",
    locality: "Gensan",
    country: "Philippines",
    region: "Southeast asia",
    postalCode: "xxxxx",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/V7iM2L8wsByKf1qH9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
