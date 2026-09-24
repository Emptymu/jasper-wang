import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core";

import {colorSecondary} from './styles/config';

const styles = css`
  > div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1rem 1.45rem;
  }

  > div > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80%;

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      max-width: 100%;

      h1 {
        margin-bottom: 1rem;
      }
    }
  }

  h1 {
    color: ${colorSecondary};
    text-decoration: none;
    margin: 0;
    white-space: nowrap;
  }
`;

const Header = ({ siteTitle, children }) => (
  <header css={styles}>
    <div>
      <div>
        <h1><Link to="/" > {siteTitle} </Link></h1>
        {children}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  children: PropTypes.node
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
