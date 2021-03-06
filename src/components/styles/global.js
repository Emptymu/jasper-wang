import { css } from "@emotion/core";
import { colorText, fontFamilyHeading, fontFamilyText, fontUrlHeading, fontUrlText } from "./config";

export const globalStyles = css`
    @import url("${fontUrlHeading}");
    @import url("${fontUrlText}");
    html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    summary {
        display: block;
    }
    audio,
    canvas,
    progress,
    video {
        display: inline-block;
    }
    audio:not([controls]) {
        display: none;
        height: 0;
    }
    progress {
        vertical-align: baseline;
    }
    [hidden],
    template {
        display: none;
    }
    a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
        text-decoration: none;
        color: inherit;
    }
    a:active,
    a:hover {
        color: inherit;
        outline-width: 0;
    }
    abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
    }
    b,
    strong {
        font-weight: inherit;
        font-weight: bolder;
    }
    dfn {
        font-style: italic;
    }
    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }
    mark {
        background-color: #ff0;
        color: #000;
    }
    small {
        font-size: 80%;
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sub {
        bottom: -0.25em;
    }
    sup {
        top: -0.5em;
    }
    img {
        border-style: none;
    }
    svg:not(:root) {
        overflow: hidden;
    }
    code,
    kbd,
    pre,
    samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }
    figure {
        margin: 1em 40px;
    }
    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
        font: inherit;
        margin: 0;
    }
    optgroup {
        font-weight: 700;
    }
    button,
    input {
        overflow: visible;
    }
    button,
    select {
        text-transform: none;
    }
    [type="reset"],
    [type="submit"],
    button,
    html [type="button"] {
        -webkit-appearance: button;
    }
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner,
    button::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring,
    button:-moz-focusring {
        outline: 1px dotted ButtonText;
    }
    fieldset {
        border: 1px solid silver;
        margin: 0 2px;
        padding: 0.35em 0.625em 0.75em;
    }
    legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
    }
    textarea {
        overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }
    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }
    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    ::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.54;
    }
    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }
    html {
        font: 100%/1.45em ${fontFamilyText}, serif;
        box-sizing: border-box;
        overflow-y: scroll;
    }
    * {
        box-sizing: inherit;
    }
    *:before {
        box-sizing: inherit;
    }
    *:after {
        box-sizing: inherit;
    }
    body {
        color: ${colorText};
        font-family: ${fontFamilyText};
        font-weight: normal;
        word-wrap: break-word;
        font-kerning: normal;
        -moz-font-feature-settings: "kern", "liga", "clig", "calt";
        -ms-font-feature-settings: "kern", "liga", "clig", "calt";
        -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
        font-feature-settings: "kern", "liga", "clig", "calt";
    }
    img {
        max-width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
    }
    h1 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 0.75rem;
        color: inherit;
        font-family: ${fontFamilyHeading};
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 2.25rem;
        line-height: 1.1;
    }
    h2 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 0.75rem;
        color: inherit;
        font-family: ${fontFamilyHeading};
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 1.5rem;
        line-height: 1.1;
    }
    h3 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 0.75rem;
        color: inherit;
        font-family: ${fontFamilyHeading};
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 1.25rem;
        line-height: 1.1;
    }
    h4 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 0.75rem;
        color: inherit;
        font-family: ${fontFamilyHeading};
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 1rem;
        line-height: 1.1;
    }
    h5 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 0.75rem;
        color: inherit;
        font-family: ${fontFamilyHeading};
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 0.875rem;
        line-height: 1.1;
    }
    h6 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 0.75rem;
        color: inherit;
        font-family: ${fontFamilyHeading};
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 0.875rem;
        line-height: 1.1;
    }
    hgroup {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
    }
    ul {
        margin-left: 1.625rem;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
        list-style-position: outside;
        list-style-image: none;
    }
    ol {
        margin-left: 1.625rem;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
        list-style-position: outside;
        list-style-image: none;
    }
    dl {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
    }
    dd {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
    }
    p {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
    }
    figure {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
    }
    pre {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        margin-bottom: 1.625rem;
        font-size: 1rem;
        line-height: 1.42;
        background: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        overflow: auto;
        word-wrap: normal;
        padding: 1.625rem;
    }
    table {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
        font-size: 1rem;
        line-height: 1.625rem;
        border-collapse: collapse;
        width: 100%;
    }
    fieldset {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
    }
    blockquote {
        margin-left: 1.625rem;
        margin-right: 1.625rem;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
    }
    form {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
    }
    noscript {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
    }
    iframe {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
    }
    hr {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: calc(1.625rem - 1px);
        background: hsla(0, 0%, 0%, 0.2);
        border: none;
        height: 1px;
    }
    address {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.625rem;
    }
    b {
        font-weight: bold;
    }
    strong {
        font-weight: bold;
    }
    dt {
        font-weight: bold;
    }
    th {
        font-weight: bold;
    }
    li {
        margin-bottom: calc(1.625rem / 2);
    }
    ol li {
        padding-left: 0;
    }
    ul li {
        padding-left: 0;
    }
    li > ol {
        margin-left: 1.625rem;
        margin-bottom: calc(1.625rem / 2);
        margin-top: calc(1.625rem / 2);
    }
    li > ul {
        margin-left: 1.625rem;
        margin-bottom: calc(1.625rem / 2);
        margin-top: calc(1.625rem / 2);
    }
    blockquote *:last-child {
        margin-bottom: 0;
    }
    li *:last-child {
        margin-bottom: 0;
    }
    p *:last-child {
        margin-bottom: 0;
    }
    li > p {
        margin-bottom: calc(1.625rem / 2);
    }
    code {
        font-size: 1rem;
        line-height: 1.625rem;
    }
    kbd {
        font-size: 1rem;
        line-height: 1.625rem;
    }
    samp {
        font-size: 1rem;
        line-height: 1.625rem;
    }
    abbr {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
    }
    acronym {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
    }
    abbr[title] {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
        text-decoration: none;
    }
    thead {
        text-align: left;
    }
    td,
    th {
        text-align: left;
        border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
        font-feature-settings: "tnum";
        -moz-font-feature-settings: "tnum";
        -ms-font-feature-settings: "tnum";
        -webkit-font-feature-settings: "tnum";
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.875rem;
        padding-bottom: 0.75rem;
    }
    th:first-of-type,
    td:first-of-type {
        padding-left: 0;
    }
    th:last-child,
    td:last-child {
        padding-right: 0;
    }
    tt,
    code {
        background-color: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        padding: 0;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
    }
    pre code {
        background: none;
        line-height: 1.42;
    }
    code:before,
    code:after,
    tt:before,
    tt:after {
        letter-spacing: -0.2em;
        content: " ";
    }
    pre code:before,
    pre code:after,
    pre tt:before,
    pre tt:after {
        content: "";
    }
    @media only screen and (max-width: 480px) {
        body {
            font-size: 87.5%;
        }
    }

    @media only print {
        html {
            font-size: 80%;
        }

        li {
            margin-bottom: 0.75rem;
        }

        footer {
            display: none;
        }
    }
`;
