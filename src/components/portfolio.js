import React from "react";
import { css } from '@emotion/core';

import ItemTitle from './itemTitle';

const styles = css`
    ul {
        display: flex;
    }

    li {
        width: calc(100%/4);
        font-style: italic;
    }


    @media screen and (max-width: 768px) {
        ul {
            margin-left: 1rem;
            flex-wrap: wrap;
        }

        li {
            width: calc(100%/2);
        }
    }
`

const Portfolio = ({data}) => {
    const portfolioItems = data.map(({
        title, link
    }, index) => (
        <li key={`portfolio-${index}`}>
            <a href={link}>{title}</a>
        </li>
    ))

    return (
        <div css={styles}>
            <ItemTitle>Portfolio</ItemTitle>
            <ul>
                {portfolioItems}
            </ul>
        </div>
    )
}

export default Portfolio;
