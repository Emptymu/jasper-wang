import React from "react";
import { css } from "@emotion/core";

import { colorThird } from "./styles/config";

const styles = css`
    address {
        display: flex;
        margin-bottom: 0;
        margin-left: 1.5rem;
        font-size: 90%;
        color: ${colorThird};
    }

    @media screen and (max-width: 768px) {
        address {
            margin-left: 0;
        }
    }

    address p {
        margin-bottom: 0;
        margin-right: 0.5rem;
        white-space: nowrap;
    }

    address p:last-of-type {
        margin-right: 0;
    }
`

const Intro = ({ data }) => {
    const {
        phone,
        email,
        social,
    } = data;
    
    return (
        <div css={styles}>
            <address>
                <p><a href={`mailto:${email}`}>{email}</a></p>
                <p>|</p>
                <p>{phone}</p>
                {social && <p>|</p>}
                {social && <p><a href={social} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>}
            </address>
        </div>
    )
}

export default Intro;
