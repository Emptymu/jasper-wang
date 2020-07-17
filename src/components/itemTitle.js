import React from "react";
import { css } from "@emotion/core";
import { colorSecondary } from './styles/config';

const ItemTitle = ({children}) => {
    return (
        <h2 css={css`
            display: flex;
            max-width: 80%;
            position: relative;
            color: ${colorSecondary};
            margin-bottom: 2rem;

            &::after {
                content: '';
                position: absolute;
                bottom: -8px;
                left: 0;
                display: block;
                height: 4px;
                width: 50px;
                background-color: ${colorSecondary};
            }
        `}>
            {children}
        </h2>
    )
}

export default ItemTitle;
