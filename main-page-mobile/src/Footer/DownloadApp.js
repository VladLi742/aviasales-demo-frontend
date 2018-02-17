import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import appleStore from "./images/app-store.png";
import googlePlay from "./images/google-play.png";
import windowsPhone from "./images/windows-phone.png";

const Apps = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const App = styled.a`
  width: 125px;
  height: 42px;
  margin-right: 10px;
  text-decoration: none;
  margin-top: 10px;
`;

export default function() {
  return (
    <Apps>
      <App href="#">
        <img src={appleStore} />
      </App>
      <App href="#">
        <img src={googlePlay} />
      </App>
      <App href="#">
        <img src={windowsPhone} />
      </App>
    </Apps>
  );
}
