import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Article from "./components/Article";
import { PostList } from "./components/PostList";
import Back from "./components/Back";

//import ReactMarkdown from "react-markdown";

//var requireContext = require("require-context");

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 36px 150px 150px 1fr;
`;

const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-image: url(https://c.pxhere.com/photos/d1/08/codes_computer_data_electronics_gadget_laptop_screen-968508.jpg!d);
  background-position: center;
  background-size: cover;
  & span {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
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
  grid-auto-flow: rows;
  grid-auto-rows: minmax(150px, 1fr);
  background-color: #fff;
`;
// const gNodeEvn = process.env.NODE_ENV;

interface PostProps {
  category: string;
  seq: number;
  content: () => any;
}
function Post(props: any) {
  const {
    match: {
      params: { category }
    }
  } = props;

  const [posts, setPosts] = useState<PostProps[]>();

  useEffect(() => {
    if (category) {
      const postList = PostList.filter(post => post.category === category);
      setPosts(postList);
    }
  }, [category]);

  const goPath = (url: string) => {
    props.history.push(url);
  };

  if (!posts) {
    return null;
  }

  return (
    <Main>
      <Back />
      <CategoryTitle>
        <span>{category}</span>
      </CategoryTitle>
      <Ads></Ads>
      <Posts>
        {posts.map((post, i) => (
          <Article key={i} {...post} goPath={goPath} />
        ))}
      </Posts>
    </Main>
  );
}

export default Post;
