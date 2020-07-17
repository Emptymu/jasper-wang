import React from "react";
import { css } from "@emotion/core";

import ItemTitle from './itemTitle';
import ItemSubTitle from './itemSubTitle';

import {colorThird} from './styles/config';

const styles = css`
    > div {
        margin-bottom: 3rem;
    }

    > ul > li {
        max-width: 80%;
    }

    h4 {
        color: ${colorThird};
        font-size: 90%;
    }

    h4 + ul {
        max-width: 80%;
        display: flex;
        flex-wrap: wrap;
        font-size: 90%;

        li {
            width: calc(100%/4);
            list-style: none;
        }
    }

    @media screen and (max-width: 768px) {
        ul {
            margin-left: 1rem;
        }

        > ul > li,
        h4 + ul {
            max-width: 100%;
        }

        h4 + ul li {
            width: calc(100%/2);
        }
    }
`;

const Experience = ({data}) => {
    const expItems = data.map(({
        company,
        accomplishments,
        time,
        techStack
    }, i) => (
        <div key={`exp-${i}`}>
            <ItemSubTitle title={company} meta={time} metaPosition='left'/>
            <ul>
                {accomplishments.map((acc, i) => <li key={`acc-${i}`}>{acc}</li>)}
            </ul>
            <div>
                <h4>Tech Stack</h4>
                <ul>
                    {techStack.map((stack, i) => <li key={`stack-${i}`}>{stack}</li>)}
                </ul>
            </div>
        </div>
    ))

    return (
        <div css={styles}>
            <ItemTitle>Experience</ItemTitle>
            {expItems}
        </div>
    )
};

export default Experience;
