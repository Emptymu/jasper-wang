import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Education from "../components/education";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Portfolio from "../components/portfolio";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PageContentQuery {
      site {
        siteMetadata {
          education {
            title
            time
            major
          }
          experience {
            company
            positions {
              title
              time
              accomplishments
            }
          }
          skills {
            type
            items
          }
          portfolio {
            link
            title
          }
        }
      }
    }
  `)
  const {
    site: {
      siteMetadata
    }
  } = data;

  return (
    <Layout>
      <SEO title="Jasper Wang" />
      <Experience data={siteMetadata.experience}></Experience>
      <Education data={siteMetadata.education}></Education>
      <Skills data={siteMetadata.skills} />
      <Portfolio data={siteMetadata.portfolio} />
    </Layout>
  )
}

export default IndexPage
