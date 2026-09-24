import React from "react";
import { css } from "@emotion/core";

import ItemTitle from './itemTitle';

const styles = css`
    > div {
        max-width: 80%;
        margin-bottom: 2rem;
    }

    > div:last-of-type {
        margin-bottom: 0;
    }

    h3 {
        display: flex;
        align-items: baseline;
        margin-bottom: 0.25rem;

        span:last-of-type {
            margin-left: auto;
            padding-left: 1rem;
            font-size: 80%;
            font-weight: normal;
            white-space: nowrap;
        }
    }

    p {
        font-size: 1.1rem;
        margin-bottom: 0.75rem;
    }

    ul {
        margin-bottom: 0;
    }

    @media screen and (max-width: 768px) {
        > div {
            max-width: 100%;
        }

        h3 {
            flex-wrap: wrap;

            span:last-of-type {
                width: 100%;
                margin-top: 0.25rem;
                margin-left: 0;
                padding-left: 0;
            }
        }

        ul {
            margin-left: 1rem;
        }
    }
`;

const Experience = ({ data }) => {
    const expItems = data.flatMap(({ company, positions }, i) =>
        positions.map(({ title, time, accomplishments }, j) => (
            <div key={`exp-${i}-${j}`}>
                <h3>
                    <span>{company}</span>
                    <span><i>{time}</i></span>
                </h3>
                <p>{title}</p>
                <ul>
                    {accomplishments.map((acc, k) => <li key={`acc-${k}`}>{acc}</li>)}
                </ul>
            </div>
        ))
    );

    return (
        <div css={styles}>
            <ItemTitle>Experience</ItemTitle>
            {expItems}
        </div>
    )
};

export default Experience;
