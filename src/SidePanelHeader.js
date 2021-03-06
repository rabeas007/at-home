import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setRoom } from "./redux/actions";
import Button from "@material-ui/core/Button";
import bg from "./assets/sidePanelHeaderBG.jpg";

const StyledHeader = styled.div`
  display: inline-block;
  width: 100%;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  color: gray;
  padding: 20px;
`;

const SidePanelHeader = () => {
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <p style={{ margin: 0, color: "gray" }}>Subscribed rooms</p>
    </StyledHeader>
  );
};

export default SidePanelHeader;
