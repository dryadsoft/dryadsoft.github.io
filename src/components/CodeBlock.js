import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { coy as prism } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { docco as prism } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark as prism } from "react-syntax-highlighter/dist/esm/styles/prism";
// import prism  as prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import styled from "styled-components";

const StyledSyntax = styled(SyntaxHighlighter)`
  font-size: 14px;
`;
class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <StyledSyntax language={language} style={prism}>
        {value}
      </StyledSyntax>
    );
  }
}

export default CodeBlock;
