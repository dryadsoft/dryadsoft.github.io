import React from "react";
import { useClick } from "../hooks/useClick";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledBack = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  background-color: #f4f4f4;
  & .backLeftBtn {
    height: 100%;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
  }
  & .backBtnTitle {
    display: flex;
    align-items: center;
    justify-content: flex-left;
    font-weight: 700;
    margin-left: 3px;
    &:active {
      background-color: #ade1f5;
    }
  }
`;

function Back() {
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const backBtn = useClick(goBack);
  return (
    <StyledBack className="back">
      <div className="backLeftBtn">{`<`}</div>
      <div className="backBtnTitle" ref={backBtn}>
        Back
      </div>
    </StyledBack>
  );
}

export default Back;
