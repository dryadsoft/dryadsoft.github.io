import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
pre {
  background-color: rgb(40, 44, 52) !important;
  border: none !important;
  border-radius: 0px !important;
}
main .post-content a {
  text-decoration: none;
  background-color: rgba(187,239,253,0.3);
  border-bottom: 1px solid rgba(0,0,0,0.2);
  color: #1a1a1a;
}
img {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid gray;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
table > tbody > tr:nth-child(even) {
  background-color: #f6f8fa;
}
`;

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById("root")
);
