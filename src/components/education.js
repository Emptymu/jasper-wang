import React from "react";
import { css } from '@emotion/core';

import ItemTitle from './itemTitle';
import ItemSubTitle from './itemSubTitle';

const styles = css`
        ul {
            margin: 0;
        }

        li {
            list-style: none;
            margin-bottom: 1.5rem;
        }

        li:last-of-type {
            margin-bottom: 0;
        }
    `;

const Education = ({data}) => {
    const eduItems = data.map(({title, time, major}, index) => (
        <li key={`education-${index}`}>
            <ItemSubTitle title={title} meta={time} />
            <p>{major}</p>
        </li>
    ));

    return (
        <div css={styles}>
            <ItemTitle>
                Education
            </ItemTitle>
            <ul>
                {eduItems}
            </ul>
        </div>
    )
};

export default Education;
