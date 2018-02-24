import React from "react";
import styled from "styled-components";

import sort from "./images/sort.png";

import SideBar from "./SideBar";
import Tickets from "./Tickets";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  background: #eaeaea;
  padding-top: 8px;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    padding: 0 8px;
  }
`;

const ScrollTop = styled.button`
  margin: 8px auto 16px auto;
  border: none;
  padding: 6px 16px;
  background: #00ace2;
  mix-blend-mode: normal;
  opacity: 0.5;
  border-radius: 100px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Filter = styled.button`
  background: #00ace2;
  border-radius: 100px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  padding: 10px 0;
  margin: 15px 85px;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Sort = styled.button`
  display: none;
  padding: 17px 24px;
  border-radius: 10px;
  background: url(${sort}) no-repeat center;
  background-color: #23a9f6;
  margin: 16px auto;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;

  @media (min-width: 1200px) {
    margin-right: 200px;
  }
`;

export default function() {
  return (
    <Main>
      <Sort />
      <ScrollTop>Наверх</ScrollTop>

      <Wrapper>
        <SideBar />
        <Tickets />
      </Wrapper>
      <Filter>Фильтровать</Filter>
    </Main>
  );
}
