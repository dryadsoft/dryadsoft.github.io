import React from "react";
import toc from "remark-toc";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

function BlockQuoteBlock(props) {
  return (
    <div
      style={{
        paddingLeft: "1em",
        backgroundColor: "rgba(255,229,100,0.3)",
        color: "#666",
        borderLeft: "9px solid #ffe564",
        paddingTop: "5px",
        paddingBottom: "5px"
      }}
    >
      {props.children}
    </div>
  );
}

function TableCellBlock(props) {
  let style = {
    textAlign: props.align ? props.align : "center",
    padding: 5
  };
  if (props.isHeader) {
    style.backgroundColor = "#ffe3e3";
    style.border = "1px solid #ccc";
    style.borderRight = 0;
    style.borderLeft = 0;
    style.fontWeight = 600;
  } else {
    style.borderBottom = "1px solid #eee";
  }

  return <td style={style}>{props.children}</td>;
}
function RenderMarkdown({ source }) {
  return (
    <ReactMarkdown
      className="post-content"
      source={source}
      renderers={{
        code: CodeBlock,
        blockquote: BlockQuoteBlock,
        tableCell: TableCellBlock
      }}
      escapeHtml={false}
      skipHtml={false}
      plugins={[toc]}
    />
  );
}

export default RenderMarkdown;
