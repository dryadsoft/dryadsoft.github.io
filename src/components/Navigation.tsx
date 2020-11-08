import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { navList } from "./PostList";

interface navProps {
  isHidden: boolean;
}
const Nav = styled.nav<navProps>`
  @media (min-width: 1024px) {
    background-color: #fff;
    height: 100%;
    & ul,
    li {
      opacity: 1 !important;
      height: 36px !important;
    }
  }
  @media (max-width: 1024px) {
    left: 0px;
    right: 0px;
    ${props =>
      props.isHidden && "height:0px;transition: height 0.3s ease-in-out;"}
    ${(props: any) =>
      props.isHidden || "height:150px;transition: height 0.3s ease-in-out;"}
  }

  position: absolute;
  top: 50px;

  text-align: center;

  & ul {
    list-style: none;
  }
  & ul,
  li {
    margin: 0;
    padding: 0;
    height: 36px;
    background-color: #fff;
    ${(props: any) =>
      props.isHidden &&
      "opacity: 0;height:0px;transition: height 0.3s ease-in-out,opacity 0.3s ease-in-out;"}
    ${(props: any) =>
      props.isHidden ||
      "opacity: 1;height:36px;transition: height 0.3s ease-in-out,opacity 0.3s ease-in-out;"}
  }
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
  }
  & li:hover {
    background-color: #f4f4f4;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
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

interface NavigationProps {
  hidden: boolean;
  navClick: () => void;
}
function Navigation({ hidden, navClick }: NavigationProps) {
  return (
    <Nav isHidden={hidden}>
      <ul>
        {navList.map((link, i) => (
          <li key={i}>
            <StyledNavLink
              {...link}
              onClick={navClick}
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              {link.text}
            </StyledNavLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
}

export default Navigation;
