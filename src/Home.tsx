import React, { useState, useEffect } from "react";
import Article from "./components/Article";
import styled from "styled-components";
import { PostList } from "./components/PostList";

const ImgTitle = styled.div`
  height: 200px;
  margin-bottom: 25px;
  background-image: url(https://images.pexels.com/photos/1415994/pexels-photo-1415994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
// const Ads = styled.div`
//   height: 120px;
//   background-image: url(https://c.pxhere.com/images/5a/32/c4e883fc545a190cb62a742009fb-1445331.jpg!d);
//   background-position: center;
//   background-size: cover;
// `;
const MainTitle = styled.div`
  height: 30px;
  background-color: #f4f4f4;
  padding: 0 10px;
  color: #000;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

// const ReactScript = () => {
//   const script1 = React.createElement("script", {
//     src: "https://ads-partners.coupang.com/g.js",
//     async: true,
//     defer: true,
//     crossorigin: "anonymous"
//   });
//   const Script2 = React.createElement("script", {
//     async: true,
//     defer: true,
//     crossorigin: "anonymous"
//   });

//   return (
//     <>
//       {script1}
//       {/* <Script2></Script2> */}
//     </>
//   );
// };
interface PostListType {
  category: string;
  seq: number;
  content: () => any;
}
function Home({ history }: any) {
  const [postList, setPostList] = useState<PostListType[] | undefined>();
  useEffect(() => {
    PostList.sort(function(a, b) {
      if (a.seq < b.seq) {
        return 1;
      }
      if (a.seq > b.seq) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    setPostList(PostList);
  }, []);

  const goPath = (url: string) => {
    history.push(url);
  };
  if (!postList) {
    return null;
  }
  return (
    <>
      <ImgTitle>
        <h3>Dryad 블로그</h3>
        <p>세상 사람들이 편해지는 기술</p>
      </ImgTitle>
      {/* <Ads>
        <ReactScript />
      </Ads> */}
      <MainTitle>최근글</MainTitle>

      {postList.map(post => (
        <Article key={post.seq} {...post} goPath={goPath} />
      ))}
    </>
  );
}

export default Home;
