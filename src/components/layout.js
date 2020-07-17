/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css, Global } from "@emotion/core";

import { globalStyles } from "./styles/global";
import { colorPrimaryDarker } from "./styles/config";
import Header from "./header"
import Intro from "../components/intro"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          address
          phone
          email
          social
          description
          author
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata
    }
  } = data;

  const contentStyles = css`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.0875rem 1.45rem;

    main {
      > div {
        margin-bottom: 2rem;
      }
  
      > div:nth-last-of-type {
        margin-bottom: 0;
      }
    }
  `

  const footerStyles = css`
    background-color: ${colorPrimaryDarker};
    color: #fff;
    text-align: center;
    padding: 3rem 2rem;

    p {
      margin-bottom: 1rem;
    }

    p:nth-of-type(2) {
      font-size: 80%;
    }

    span {
      padding: 0 0.5rem;
    }

    @media screen and (max-width: 768px) {
      p:nth-of-type(2) {
        display: flex;
        flex-direction: column;
      }

      span:nth-of-type(2n) {
        display: none;
      }
    }
  `

  return (
    <>
      <Global styles={globalStyles} />
      <Header siteTitle={siteMetadata.title}>
        <Intro data={siteMetadata} />
      </Header>
      <div css={contentStyles}>
        <main> {children} </main>
      </div>
      <footer css={footerStyles}>
          <p>Thanks for visiting and feel free to reach out.</p>
          <p>
            <span>{siteMetadata.email}</span>
            <span>|</span>
            <span>{siteMetadata.phone}</span>
            <span>|</span>
            <span>© {siteMetadata.author} - {new Date().getFullYear()}</span>
          </p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
