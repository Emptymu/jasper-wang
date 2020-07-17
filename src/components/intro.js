import React from "react";
import { css } from "@emotion/core";

const styles = css`
    address {
        display: flex;
        margin-bottom: 0;
    }

    address p {
        margin-bottom: 0;
        margin-right: 0.5rem;
    }
`

const Intro = ({ data }) => {
    const {
        phone,
        email,
    } = data;
    
    return (
        <div css={styles}>
            <address>
                <p><a href={`mailto:${email}`}>{email}</a></p>
                <p>|</p>
                <p>{phone}</p>
            </address>
        </div>
    )
}

export default Intro;
