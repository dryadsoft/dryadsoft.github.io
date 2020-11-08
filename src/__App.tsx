import React, { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Post from "./Post";
import Detail from "./Detail";
import Navigation from "./components/Navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (max-width: 1024px) {
    grid-template-columns: minmax(100px, 1024px);
  }

  @media (min-width: 1024px) {
    grid-template-columns: 300px minmax(100px, 1024px);
    & header {
      grid-column: 2/3;
      & div:first-child {
        display: none;
      }
    }
    & main {
      grid-column: 2/3;
    }
    & nav {
      grid-column: 1/2;
      grid-row: 2/3;
      width: 300px;
    }
  }
`;

const Header = styled.header`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
  & div:nth-child(3) {
    width: 50px;
    height: 50px;
    font-size: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
      background-color: #ade1f5;
    }
  }
  & div:nth-child(2) {
    font-size: 20px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & div:nth-child(1) {
    width: 50px;
    height: 50px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
      background-color: #ade1f5;
    }
  }
`;

const Main = styled.main`
  flex: 1;
`;
interface linkProps {
  issearch: string;
}
const StyledNavLink = styled(NavLink)<linkProps>`
  display: ${props => (props.issearch === "true" ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000;
  height: 100%;
  width: 100%;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const StyledInput = styled.input<linkProps>`
  border: 1px solid #e6e6e6;
  height: 60%;
  width: 250px;
  border-radius: 5px;
  font-size: 16px;
  display: ${props => (props.issearch === "true" ? "" : "none")};
`;

function App() {
  const [hidden, setHidden] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const refSearchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearch) {
      if (refSearchInput.current) {
        refSearchInput.current.focus();
      }
    }
  }, [isSearch]);

  const navClick = () => {
    //e.stopPropagation();
    setHidden(!hidden);
  };

  const searchClick = () => {
    setIsSearch(!isSearch);
  };
  return (
    <Router>
      <Container>
        <Header>
          <div onClick={searchClick}>
            <span role="img" aria-label="">
              🔍
            </span>
          </div>

          <div>
            <StyledNavLink
              issearch={isSearch.toString()}
              onClick={() => setHidden(true)}
              to="/"
              replace
            >
              Dryad
            </StyledNavLink>

            <StyledInput
              issearch={isSearch.toString()}
              ref={refSearchInput}
              type="text"
              placeholder="검색어를 입력하십시오."
            />
          </div>
          <div onClick={navClick}>≡</div>
        </Header>
        <Navigation hidden={hidden} navClick={navClick} />
        <Main>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/posts/:category/:seq" component={Detail} />
            <Route path="/posts/:category" component={Post} />
          </Switch>
        </Main>
      </Container>
    </Router>
  );
}

export default App;
