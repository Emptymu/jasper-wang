import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core";

import {colorSecondary} from './styles/config';

const styles = css`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 960px;
    padding: 1rem 1.0875rem;

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;

      h1 {
        margin-bottom: 1rem;
      }
    }
  }

  h1 {
    color: ${colorSecondary};
    text-decoration: none;
    margin: 0;
  }
`;

const Header = ({ siteTitle, children }) => (
  <header css={styles}>
    <div>
      <h1><Link to="/" > {siteTitle} </Link></h1>
      {children}
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
