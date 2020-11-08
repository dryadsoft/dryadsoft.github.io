import React, { useState, useEffect } from "react";
import styled from "styled-components";
import matter from "gray-matter";
import axios from "axios";
import { isProd, getRemarkUrl } from "./utils";

const flexCenter = { display: "flex", "align-items": "center" };

const StyledArticle = styled.article`
  margin: 5px 5px;
  padding: 5px 5px;
  background-color: transparent;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  /* margin: 0px 20px;
  border-bottom: 1px solid #e6e6e6; */

  & .post-title {
    ${flexCenter};
    font-size: 20px;
    font-weight: 700;
    height: 50px;
  }
  & .post-content {
    overflow: hidden;
    font-size: 14px;
    padding: 16px;
    background-color: rgb(40, 44, 52);
    color: #fff;
  }
  & .post-tag {
    margin-top: 15px;
    margin-bottom: 20px;
    & span {
      display: inline-block;
      margin: 0 5px 5px 0;
      padding: 0 5px;
      height: 20px;
      line-height: 18px;
      border-radius: 2px;
      border: 1px solid #e6e6e6;
      vertical-align: middle;
      background-color: #fafafa;
      color: #1e1e1e;
      font-size: 12px;
    }
  }
  & .post-meta {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & .post-date,
    .post-author {
      font-size: 13px;
    }
  }
  &:hover {
    background-color: #e6e6e6;
  }
`;

interface MarkdownType {
  content: string;
  title: string;
  summary: string;
  tag: [];
  author: string;
  date: string;
}

interface ArticleProps {
  category: string;
  seq: number;
  content: () => string;
  goPath: (url: string) => void;
}
function Article({ category, seq, content, goPath }: ArticleProps) {
  // const abc = require("../../post/react/test.md");
  const [markDown, setMarkDown] = useState<MarkdownType>();
  useEffect(() => {
    let abc: string = content();

    if (isProd()) {
      //abc = abc.substring(1);
      abc = `${getRemarkUrl}${abc}`;
    }
    axios
      .get(abc)
      .then(str => str.data)
      .then(str => {
        const grayMe = matter(str);
        return setMarkDown({
          content: grayMe.content,
          title: grayMe.data.title,
          summary: grayMe.data.summary,
          tag: grayMe.data.tag,
          author: grayMe.data.author,
          date: grayMe.data.date
        });
      })
      .catch(err => console.log(err));
  }, [content]);

  if (!markDown) {
    return null;
  }
  return (
    <StyledArticle onClick={() => goPath(`/posts/${category}/${seq}`)}>
      {/* <h3>
        <NavLink to={`/posts/${category}/${seq}`}>{title}</NavLink>
      </h3> */}
      {/* <RenderMarkdown source={markDown.content} /> */}
      <div className="post-title">{markDown.title}</div>
      <div className="post-content">{markDown.summary}</div>
      <p className="post-tag">
        {markDown.tag &&
          markDown.tag.map((tag, i) => <span key={i}>{tag}</span>)}
      </p>
      <div className="post-meta">
        <p className="post-author">{markDown.author}</p>
        <p className="post-date">{markDown.date}</p>
      </div>
    </StyledArticle>
  );
}

export default Article;
