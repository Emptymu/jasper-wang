import React from "react";
import { css } from "@emotion/core";

import ItemTitle from './itemTitle';

import { colorGray } from './styles/config';

const styles = css`
    > div {
        max-width: 100%;
        margin-bottom: 1rem;
    }

    h4 {
        color: ${colorGray};
        font-size: 90%;
        margin-bottom: 0.5rem;
    }

    p {
        margin-bottom: 0;
    }

    @media screen and (max-width: 768px) {
        > div {
            max-width: 100%;
        }
    }
`;

const Skills = ({ data }) => {
    const groups = data.map(({ type, items }, i) => (
        <div key={`skill-${i}`}>
            <h4>{type}</h4>
            <p>{items.join(", ")}</p>
        </div>
    ));

    return (
        <div css={styles}>
            <ItemTitle>Skills</ItemTitle>
            {groups}
        </div>
    )
};

export default Skills;
