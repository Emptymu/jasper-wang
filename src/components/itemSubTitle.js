import React from "react";
import { css } from "@emotion/core";

const ItemSubTitle = ({title, meta, metaPosition = 'right'}) => {
    const styles = css`
        display: flex;
        align-items: center;
        max-width: 80%;

        span {
            display: inline-block;
        }

        span:last-of-type {
            margin-left: ${metaPosition === 'right' ? 'auto' : '100px'};
            font-size: 80%;
        }

        @media screen and (max-width: 768px) {
            flex-wrap: wrap;
            max-width: 100%;

            span:last-of-type {
                width: 100%;
                margin-top: 1rem;
                margin-left: 0;
            }
        }
    `

    return (
        <h3 css={styles}>
            <span>{title}</span>
            <span><i>{meta}</i></span>
        </h3>
    )
}

export default ItemSubTitle;
