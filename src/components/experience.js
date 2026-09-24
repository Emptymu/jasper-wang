import React from "react";
import { css } from "@emotion/core";

import ItemTitle from './itemTitle';

const styles = css`
    > div {
        margin-bottom: 2rem;
    }

    > div:last-of-type {
        margin-bottom: 0;
    }

    h3 {
        display: flex;
        align-items: baseline;
        max-width: 100%;
        margin-bottom: 1rem;

        span {
            display: inline-block;
        }

        span:nth-of-type(2) {
            margin-left: 0.5rem;
            font-weight: normal;
        }

        span:last-of-type {
            margin-left: auto;
            padding-left: 1rem;
            font-size: 80%;
            font-weight: normal;
            white-space: nowrap;
        }
    }

    ul {
        max-width: 80%;
        margin-bottom: 0;
    }

    @media screen and (max-width: 768px) {
        h3 {
            flex-wrap: wrap;
            max-width: 100%;

            span:nth-of-type(2) {
                width: 100%;
                margin-left: 0;
            }

            span:last-of-type {
                width: 100%;
                margin-top: 0.5rem;
                margin-left: 0;
                padding-left: 0;
            }
        }

        ul {
            max-width: 100%;
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
                    <span>{title}</span>
                    <span><i>{time}</i></span>
                </h3>
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
