module.exports = {
  siteMetadata: {
    title: `Jasper Wang`,
    fullName: `Ruoyu (Jasper) Wang`,
    phone: `(206) 661-1202`,
    email: `jasper920011@gmail.com`,
    social: `https://www.linkedin.com/in/jasperwang/`,
    address: ``,
    description: `Frontend Tech Lead Manager at TikTok, Web Engineering Arch. Building web infrastructure and AI-native developer tooling for 700+ frontend engineers.`,
    education: [
      {
        title: "University of Washington",
        time: "2017",
        major: "M.S. in Digital Media"
      },
      {
        title: "Huazhong University of Science and Technology",
        time: "2015",
        major: "B.A. in Computer Science and B.A. in Communication"
      }
    ],
    portfolio: [
      {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/jasperwang/"
      },
      {
        title: "GitHub",
        link: "https://github.com/Emptymu"
      }
    ],
    skills: [
      {
        type: "Languages & Frameworks",
        items: ["TypeScript", "React", "Vue", "Node.js", "Python"]
      },
      {
        type: "Web & Platform",
        items: [
          "CSR/SSR",
          "Module Federation",
          "Monorepo Tooling (Rush, pnpm)",
          "Webpack",
          "CI/CD",
          "Design Systems",
          "Frontend Performance"
        ]
      },
      {
        type: "AI Systems",
        items: [
          "LLM Integration",
          "AI Agent Harnesses",
          "Agent Evaluation & Benchmarking",
          "Context Engineering",
          "MCP",
          "Code Intelligence",
          "Design-to-Code",
          "Claude Code",
          "Cursor"
        ]
      }
    ],
    experience: [
      {
        company: "TikTok",
        positions: [
          {
            title: "Frontend Tech Lead Manager - Web Engineering Arch",
            time: "Nov. 2025 - Present",
            accomplishments: [
              "Led the architecture and technical roadmap for web engineering infrastructure used by 700+ frontend engineers, spanning monorepo tooling, web frameworks, CI/CD, and AI-native developer infrastructure.",
              "Led CodeGraph Remote, a code-graph service for AI coding agents across monorepos with 200K+ files, combining precomputed remote indexes with local branch-diff updates for fast, up-to-date call-chain and impact analysis — cutting agent token usage by ~25% and code-inspection tool calls by ~30%.",
              "Architected D2C, an LLM-powered Figma-to-code pipeline with an automated evaluate–feedback–revise loop that validates visual fidelity, responsive layout, and code quality — achieving 85–95% first-pass UI fidelity and 95%+ after iteration.",
              "Designed and built Virtual Arch Buddy, an autonomous AI teammate embedded across support channels that resolves 30%+ of on-call tickets, 18% of small feature work, and 60% of bug fixes — powered by context engineering, deterministic tool calling, multi-layer verification, and evals derived from real world tasks."
            ]
          },
          {
            title: "Staff Frontend Engineer - Standard Solutions",
            time: "Apr. 2024 - Oct. 2025",
            accomplishments: [
              "Initiated the Standard Solutions program to address recurring pain points across TikTok Web teams, leading a team of 7 to deliver standardized CSR/SSR frameworks, npm library tooling, and Node.js service scaffolding.",
              "Designed a multi-region web architecture that replaced fragile region-specific builds with declarative configuration, generating region-specific assets from a single build and enabling centralized runtime updates for domains, public paths, and compliance rules.",
              "Designed a Module Federation-based micro frontend architecture with precomputed dependency snapshots, module versioning, and runtime route composition, reducing loading waterfalls and decoupling independently owned pages — adopted as part of the Web CSR solution by 52%+ of 400+ TikTok Web projects.",
              "Built a standardized library development and publishing platform with automated changesets, versioning, changelogs, and reusable CI/CD and CLI workflows, supporting hundreds of daily releases across 30+ frontend monorepos."
            ]
          },
          {
            title: "Senior Frontend Engineer - Web Experience",
            time: "May 2022 - Mar. 2024",
            accomplishments: [
              "Served as the frontend architect for TikTok in-app WebViews, defining architecture standards and partnering with product teams across Creator, PNS, and Effect Platform.",
              "Designed the standard WebView CSR architecture and drove cross-team implementation, adopted by 100+ WebView projects.",
              "Led performance optimization for Creator Analytics, improving LCP by 45%+ across iOS and Android, reducing critical bundle size by 25%, and cutting build time by 23%.",
              "Owned reliability and compliance for 3 shared services, improving alert quality and leading multi-region data center migrations across product teams."
            ]
          },
          {
            title: "Frontend Engineer - Design System",
            time: "Jan. 2021 - Apr. 2022",
            accomplishments: [
              "Repositioned TikTok Design System (TUX) as a cross-platform technical product, aligning web, iOS, Android, and design teams on a unified roadmap and contribution model.",
              "Led a team of 5 supporting 150+ frontend engineers across 20+ monorepos and coordinated 6 product teams to launch a new cross-platform component library in one quarter.",
              "Designed core infrastructure including theming, design asset pipelines, and CSS tree-shaking, improving developer efficiency and reducing bundle size by 50%."
            ]
          }
        ]
      },
      {
        company: "System1",
        positions: [
          {
            title: "Software Engineer, Frontend",
            time: "Oct. 2018 - Jan. 2021",
            accomplishments: [
              "Architected frontend components and state management for a Vue + Python application spanning 8 domains and 100+ feature flags.",
              "Built core advertising and analytics infrastructure, including a Vanilla JS package for programmatic ads and a Protobuf-based logging system shared across teams.",
              "Led modernization of legacy frontend systems, including migrating an AngularJS application to a shared React component architecture.",
              "Improved frontend performance and developer infrastructure through code splitting, SSR, client-side rehydration, and ownership of TypeScript, Babel, Webpack, monorepo tooling, and Jenkins CI/CD."
            ]
          }
        ]
      },
      {
        company: "Seed CMS",
        positions: [
          {
            title: "Frontend Engineer",
            time: "Aug. 2017 - Sep. 2018",
            accomplishments: [
              "Built frontend development infrastructure including local dev tooling, deployment workflows, and a reusable SASS-based component framework.",
              "Developed shared application infrastructure for API requests, authentication, and Shopify app integration using JavaScript, React, Node.js, and Firebase.",
              "Improved performance across legacy storefront codebases through critical rendering path optimization and lazy loading."
            ]
          }
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
