import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PostList } from "./components/PostList";
import Back from "./components/Back";
import RenderMarkdown from "./components/RenderMarkdown";
import matter from "gray-matter";
import axios from "axios";
import { isProd, getRemarkUrl } from "./components/utils";

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 36px 200px 200px 1fr;
`;

const CategoryTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-image: url(https://c.pxhere.com/photos/d1/08/codes_computer_data_electronics_gadget_laptop_screen-968508.jpg!d);
  background-position: center;
  background-size: cover;
  & span:first-child {
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
  & span:last-child {
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
  }
`;
const Ads = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  background-image: url(https://cdn.pixabay.com/photo/2019/07/31/18/19/macbook-4375840_960_720.jpg);
  background-position: center;
  background-size: cover;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: #fff;
  & .post-content {
    word-wrap: break-word;
    overflow: auto;
    font-size: 16px;
    margin: 0 10px;
  }
`;

interface MarkdownType {
  content: string;
  category: string;
  title: string;
}

function Detail({
  match: {
    params: { category, seq }
  }
}: any) {
  const [markDown, setMarkDown] = useState<MarkdownType | undefined>();

  const selPost = PostList.filter(
    post => post.category === category && post.seq === parseInt(seq, 10)
  )[0];

  useEffect(() => {
    let abc = selPost.content();

    if (isProd()) {
      // abc = abc.substring(1);
      abc = `${getRemarkUrl}${abc}`;
    }
    axios
      .get(abc)
      .then(str => str.data)
      .then(str => {
        const grayMe = matter(str);
        return setMarkDown({
          content: grayMe.content,
          category: grayMe.data.category,
          title: grayMe.data.title
        });
      })
      .catch(err => console.log(err));
  }, [selPost]);

  if (!markDown) {
    return null;
  }

  return (
    <Main>
      <Back />
      <CategoryTitle>
        <span>{markDown.category}</span>
        <span>{markDown.title}</span>
      </CategoryTitle>
      <Ads></Ads>
      <Posts>
        <RenderMarkdown source={markDown.content} />
      </Posts>
    </Main>
  );
}

export default Detail;
