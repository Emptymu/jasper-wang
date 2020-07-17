module.exports = {
  siteMetadata: {
    title: `Jasper Wang`,
    phone: `(206)-6611202`,
    email: `jasper920011@gmail.com`,
    social: ``,
    address: `15408 Ruthelent Street, Gardena CA 90249`,
    description: `A front-end developer based in Los Angeles, CA. I'm passionate about learning new technologies and building performant websites and applications.`,
    education: [
      {
        title: "University of Washington",
        time: "2015 - 2017",
        major: "Master of Communication in Digital Media",
        areas: ["UX design and web analytics", "Video storytelling"]
      },
      {
        title: "Huazhong University of Sci. and Tech.",
        time: "2011 - 2015",
        major: "Bachelor of Media Study/Minor in Computer Science",
        areas: []
      }
    ],
    portfolio: [
      {
        title: "Play Howstuffworks",
        link: "https://play.howstuffworks.com"
      },
      {
        title: "Mapquest",
        link: "https://mapquest.com"
      },
      {
        title: "Teefury",
        link: "https://teefury-com.myshopify.com/"
      },
      {
        title: "Github Projects",
        link: "https://github.com/Emptymu"
      }
    ],
    techStack: [
      {
        type: "Frameworks",
        title: "Vue/Vuex"
      },
      {
        type: "Frameworks",
        title: "React/Redux"
      },
      {
        type: "Frameworks",
        title: "jQuery"
      },
      {
        type: "Frameworks",
        title: "Express"
      },
      {
        type: "Typing",
        title: "TypeScript"
      },
      {
        type: "Typing",
        title: "Flow"
      },
      {
        type: "Testing",
        titie: "Jest"
      },
      {
        type: "Testing",
        titie: "Cypress"
      },
      {
        type: "Testing",
        titie: "Mabl"
      },
      {
        type: "CSS",
        title: "SASS/LESS"
      },
      {
        type: "CSS",
        title: "Post CSS"
      },
      {
        type: "CSS",
        title: "Bootstrap"
      },
      {
        type: "Templating",
        title: "Flask/Jinja"
      },
      {
        type: "Templating",
        title: "Jeklly/Liquid"
      },
      {
        type: "Tooling",
        title: "Webpack"
      },
      {
        type: "Tooling",
        title: "Babel"
      },
      {
        type: "Tooling",
        title: "Yarn/NPM"
      },
      {
        type: "Tooling",
        title: "Lerna"
      },
      {
        type: "Tooling",
        title: "git"
      },
      {
        type: "Languages",
        title: "JavaScript"
      },
      {
        type: "Languages",
        title: "Python"
      },
      {
        type: "Languages",
        title: "Ruby"
      },
      {
        type: "Cloud Services",
        title: "AWS"
      },
      {
        type: "Cloud Services",
        title: "Google Cloud"
      }
    ],
    experience: [
      {
        company: "System1",
        intro: "",
        position: "Software Engineer, Frontend",
        time: "Oct 2018 - Present",
        accomplishments: [
          "Lead projects by collaborating with UI, UX, and product, reviewing code, making architectural decisions, and driving code refactor.",
          "Build reusable UI components, scalable layouts, and programmatic ads displaying modules in a Vue + Python Flask App.",
          "Develop and maintain Vanilla JS packages that support data logging, content embedding, and programmatic ads loading.",
          "Develop a React Mapping components library that provides dynamic mapping, routing, and searching.",
          "Bootstrap and maintain frontend packages including typing, testing, building, and deployment.",
          "Leverage tools like Google lighthouse and Webpack bundle analyzer to monitor performance metrics and build adaptive user experience focusing on accessibility, SEO, and performance."
        ],
        techStack: [
          "Vanilla JS/Vue/React",
          "Vuex/Redux",
          "TypeScript/Flow",
          "Jest/Cypress",
          "Webpack/Babel/Lerna",
          "Post CSS/SASS",
          "Jinja/Python",
          "AWS/Snowflake/Jenkins"
        ]
      },
      {
        company: "SeedCMS",
        intro: "",
        position: "Frontend Developer",
        time: "Aug 2017 - Oct 2018",
        accomplishments: [
          "Worked closely with clients, PMs, and designers to deliver features, manage expectations, and meet deadlines.",
          "Built high-quality Shopify themes that are easy to scale and customize.",
          "Fixed bugs and optimized performane for more than 20 Shopify sites.",
          "Wrote Ruby scripts with Shopify Scripts API to automate and scale discount campaigns.",
          "Built a Shopify App boilerplate that handles installation and authentication with Shopify.",
        ],
        techStack: [
          "jQuery/React",
          "Express/Shopify API",
          "Webpack/Babel",
          "SASS",
          "Liquid/Ruby",
          "Google Cloud/SQL"
        ]
      },
      {
        company: "Wali",
        intro: "",
        position: "Frontend Developer",
        time: "Sep 2016 - Aug 2017",
        accomplishments: [
          "Wore multiple hats including UI, UX, and Dev to design and build landing pages.",
          "Componentized frontend codebase to improve reusability and scalability.",
          "Built a chat-bot with React and Microsoft Bot Framework."
        ],
        techStack: [
          "jQuery/React/Angularjs",
          "Express/Socket.io",
          "LESS/Bootstrap",
          "Azure"
        ]
      },
      {
        company: "Hitachi",
        intro: "",
        position: "Frontend Developer Intern",
        time: "Jun 2014 - Aug 2014",
        accomplishments: [
          "Designed and Developed landing pages and UI components.",
          "Visualized data with charting libraries and created CSS/JS animations."
        ],
        techStack: [
          "Vanilla JS/Highcharts",
          "CSS3",
          "HTML5",
        ]
      }
    ],
    author: `jasperwang`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/jasper-wang",
}
