import React from "react";
import styled from "styled-components";
import appleStore from "./images/app-store.png";
import googlePlay from "./images/google-play.png";
import windowsPhone from "./images/windows-phone.png";

const Apps = styled.section`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-last-child(2) {
    margin-right: 0;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const App = styled.a`
  text-decoration: none;
  margin-top: 10px;

  &:nth-last-child(2) {
    margin-right: 0;
  }

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;

const Copyright = styled.span`
  display: block;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  margin-top: 25px;
  color: #5b5b5c;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 762px) {
    text-align: left;
  }

  @media (min-width: 992px) {
    text-align: right;
  }
`;

export default function() {
  return (
    <Apps>
      <App href="#">
        <img src={appleStore} alt="App Store" />
      </App>
      <App href="#">
        <img src={googlePlay} alt="Google Play" />
      </App>
      <App href="#">
        <img src={windowsPhone} alt="Windows Phone" />
      </App>
      <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
    </Apps>
  );
}
