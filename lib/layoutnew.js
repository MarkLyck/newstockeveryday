import React from 'react'
import { css, Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import theme from '../common/theme'

// Add global styles
const globalStyles = css`
  /**
     * YUI 3.5.0 - reset.css (http://developer.yahoo.com/yui/3/cssreset/)
     * https://cssreset.com/
     * Copyright 2012 Yahoo! Inc. All rights reserved.
     * http://yuilibrary.com/license/
     */
  html {
    font-family: 'Rubik', sans-serif;
    font-display: auto;
    box-sizing: border-box;
  }
  body {
    overflow-x: hidden;
  }
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  textarea,
  p,
  blockquote,
  th,
  td {
    margin: 0;
    padding: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  fieldset,
  img {
    border: 0;
  }
  address,
  caption,
  cite,
  code,
  dfn,
  em,
  strong,
  th,
  var {
    font-style: normal;
    font-weight: normal;
  }

  ol,
  ul {
    list-style: none;
  }

  caption,
  th {
    text-align: left;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }
  q:before,
  q:after {
    content: '';
  }
  abbr,
  acronym {
    border: 0;
    font-variant: normal;
  }
  /* to preserve line-height and selector appearance */
  sup {
    vertical-align: text-top;
  }
  sub {
    vertical-align: text-bottom;
  }
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }
  /*to enable resizing for IE*/
  input,
  textarea,
  select {
    *font-size: 100%;
  }
  /*because legend doesn't inherit in IE */
  legend {
    color: #000;
  }

  a {
    text-decoration: none;
    color: #27a5f9;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  b {
    font-weight: 500;
  }

  p {
    line-height: 1.5;
  }

  button {
    outline: none;
    &:hover {
      cursor: pointer;
    }
  }

  .ReactModal__Content {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
  }
  .modal-overlay {
    z-index: 10;
    background: rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: background 5s ease-out;
  }
`

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <div>{children}</div>
  </ThemeProvider>
)
