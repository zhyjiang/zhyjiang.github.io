/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Zhongyu's Github.io",
  description: "Zhongyu's Github.io",
  og: {
    title: "Zhongyu's Github.io",
    type: "website",
    url: "https://zhyjiang.github.io",
  },
};

//Home Page
const greeting = {
  title: "Zhongyu Jiang",
  logo_name: "ZhongyuJiang",
  // nickname: "Nitre",
  subTitle: "PhD Student",
  subsubTitle: "University of Washington ECE",
  resumeLink:
    "https://drive.google.com/file/d/1Fy_0HKsV0ke6TmRGB7a26ZKC8rAl_Slq/view?usp=sharing",
  // portfolio_repository:
  //   "https://github.com/zhyjiang",
  githubProfile: "https://github.com/zhyjiang",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/zhyjiang",
    fontAwesomeIcon: "fab fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zhongyu-jiang-065306138/",
    fontAwesomeIcon: "fab fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:zyjiang@uw.edu",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#4b2e83", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "ZeDO",
      fileName: "ZeDO",
      link: "https://arxiv.org/abs/2307.03833",
      skills: [
        "Back to Optimization: Diffusion-based Zero-Shot 3D Human Pose Estimation",
        "We proposed a optimization-based 3D huamn pose estimation method which outperform learning-based methods on <b>3DPW</b> and <b>Ski-Pose</b> Dataset",
      ],
      softwareSkills: [
        {
          skillName: "IPL",
          imageSrc: "ipl-logo.png",
        },
        {
          skillName: "UW",
          imageSrc: "UW_logo.png",
        },
      ],
    },
    {
      title: "CRUW Dataset",
      fileName: "CRUW",
      link: "https://www.cruwdataset.org/home",
      skills: [
        "CRUW is a public <b>camera-radar dataset</b> for autonomous vehicle applications.",
        "It is a good resource for researchers to study FMCW radar data, that has high potential in the future autonomous driving. ",
      ],
      softwareSkills: [
        {
          skillName: "CRUW",
          imageSrc: "cruw_icon.png",
        },
        {
          skillName: "IPL",
          imageSrc: "ipl-logo.png",
        },
        {
          skillName: "UW",
          imageSrc: "UW_logo.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      // siteName: "LeetCode",
      imageSrc: "Tsinghua_University_Logo.svg",
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      // siteName: "LeetCode",
      small: true,
      imageSrc: "UW_logo.png",
      profileLink: "https://leetcode.com/layman_brother/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Tsinghua Univeristy",
      subtitle: "B.Tech. in Computer Science and Technology",
      logo_path: "Tsinghua_University_Logo.svg",
      alt_name: "IIITDM Kurnool",
      duration: "2014 - 2018",
      descriptions: [
        'Undergraduate Thesis: Light-weight Hand Pose Estimation Model, supervised by Prof. Yuping Wang. As second author, published "VGPN : Voice-Guided Pointing Robot Navigation for Humans"',
        "Received Individual Scholarship in 2016",
      ],
      website_link: "https://www.cs.tsinghua.edu.cn/csen/",
    },
    {
      title: "University of Washington, Tacoma",
      subtitle: "M.S. in Computer Science and System",
      logo_path: "UW_logo.png",
      alt_name: "University of Washington, Tacoma",
      duration: "2018-2019",
      descriptions: [""],
      website_link: "https://www.washington.edu/",
    },
    {
      title: "University of Washington",
      subtitle: "PhD Student. in Electrical and Computer Engineering",
      logo_path: "UW_logo.png",
      alt_name: "University of Washington",
      duration: "2020-2024",
      descriptions: [""],
      website_link: "https://www.washington.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    //   {
    //     title: "Machine Learning",
    //     subtitle: "- Andrew Ng",
    //     logo_path: "stanford_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //     alt_name: "Stanford University",
    //     color_code: "#8C151599",
    //   },
    //   {
    //     title: "Deep Learning",
    //     subtitle: "- Andrew Ng",
    //     logo_path: "deeplearning_ai_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //     alt_name: "deeplearning.ai",
    //     color_code: "#00000099",
    //   },
    //   {
    //     title: "ML on GCP",
    //     subtitle: "- GCP Training",
    //     logo_path: "google_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //     alt_name: "Google",
    //     color_code: "#0C9D5899",
    //   },
    //   {
    //     title: "Data Science",
    //     subtitle: "- Alex Aklson",
    //     logo_path: "ibm_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //     alt_name: "IBM",
    //     color_code: "#1F70C199",
    //   },
    //   {
    //     title: "Big Data",
    //     subtitle: "- Kim Akers",
    //     logo_path: "microsoft_logo.png",
    //     certificate_link:
    //       "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //     alt_name: "Microsoft",
    //     color_code: "#D83B0199",
    //   },
    //   {
    //     title: "Advanced Data Science",
    //     subtitle: "- Romeo Kienzler",
    //     logo_path: "ibm_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //     alt_name: "IBM",
    //     color_code: "#1F70C199",
    //   },
    //   {
    //     title: "Advanced ML on GCP",
    //     subtitle: "- GCP Training",
    //     logo_path: "google_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //     alt_name: "Google",
    //     color_code: "#0C9D5899",
    //   },
    //   {
    //     title: "DL on Tensorflow",
    //     subtitle: "- Laurence Moroney",
    //     logo_path: "deeplearning_ai_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //     alt_name: "deeplearning.ai",
    //     color_code: "#00000099",
    //   },
    //   {
    //     title: "Fullstack Development",
    //     subtitle: "- Jogesh Muppala",
    //     logo_path: "coursera_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //     alt_name: "Coursera",
    //     color_code: "#2A73CC",
    //   },
    //   {
    //     title: "Kuberenetes on GCP",
    //     subtitle: "- Qwiklabs",
    //     logo_path: "gcp_logo.png",
    //     certificate_link:
    //       "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //     alt_name: "GCP",
    //     color_code: "#4285F499",
    //   },
    //   {
    //     title: "Cryptography",
    //     subtitle: "- Saurabh Mukhopadhyay",
    //     logo_path: "nptel_logo.png",
    //     certificate_link:
    //       "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //     alt_name: "NPTEL",
    //     color_code: "#FFBB0099",
    //   },
    //   {
    //     title: "Cloud Architecture",
    //     subtitle: "- Qwiklabs",
    //     logo_path: "gcp_logo.png",
    //     certificate_link:
    //       "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //     alt_name: "GCP",
    //     color_code: "#4285F499",
    //   },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Fellowship and Volunteership",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   work: true,
    //   experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - Aug 2021",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Resarch Scientist Intern",
          company: "Meta",
          company_url: "https://about.meta.com/realitylabs/",
          logo_path: "logo-Meta.png",
          duration: "Jun 2022 - Sep 2022",
          location: "Burlingame, CA",
          descriptions: [
            "Working on 3D Human Reconstruction based on combination of 3D human pose and NeRF.",
            "- RGBD based traditional human mesh reconstruction",
            "- Compare the NeRF based human reconstruction like Neural Body and HumanNeRF.",
            "- Test, modify, and deploy the NeRF based human reconstruction model",
          ],
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Fellowship",
      work: true,
      experiences: [
        {
          title: "Resarch Scientist",
          company: "Sportsbox",
          company_url: "https://www.sportsbox.ai/",
          logo_path: "sb_logo.png",
          duration: "2020 - Now",
          location: "Seattle, WA",
          descriptions: [
            "Working on Human Motion analysis.",
            "Developed pose estimation methods",
          ],
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Publications & Projects",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "1",
      name:
        "Back to Optimization: Diffusion-based Zero-Shot 3D Human Pose Estimation",
      createdAt: "Arxiv",
      description: "Optimization based 3D human pose estimation",
      url: "https://arxiv.org/abs/2307.03833",
    },
    {
      id: "2",
      name:
        "Enhancing Multi-Camera People Tracking with Anchor-Guided Clustering and Spatio-Temporal Consistency ID Re-Assignment",
      createdAt: "CVPRW 2023",
      description: "AICity Challenge 2023 Track1 No.1",
      url: "https://github.com/ipl-uw/AIC23_Track1_UWIPL_ETRI",
    },
    {
      id: "3",
      name:
        "RODNet: A real-time radar object detection network cross-supervised by camera-radar fused object 3D localization",
      createdAt: "IEEE TSP 2021",
      description: "Radar object detection",
      url: "https://github.com/yizhou-wang/RODNet",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "icon.jpeg",
    description: "",
  },
  DisplaySection: {
    image_path: "AICity.jpg",
    description: "",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "Address",
  //   subtitle:
  //     "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
  //   locality: "Kanodar",
  //   country: "IN",
  //   region: "Gujarat",
  //   postalCode: "385520",
  //   streetAddress: "Ambavadi vas",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  // },
  // phoneSection: {
  //   title: "",
  //   subtitle: "",
  // },
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
