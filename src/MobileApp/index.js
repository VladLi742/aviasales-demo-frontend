import React from "react";
import styled from "styled-components";

import raiting from "./images/raiting.svg";
import apple from "./images/apple.svg";
import android from "./images/android.svg";
import winPhone from "./images/win-phone.svg";
import mobileApp from "./images/mobile-app.png";

const Body = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  color: #fff;
  padding-top: 24px;
  position: relative;

  @media (min-width: 992px) {
    padding-top: 0;
    padding-left: 40%;
    min-height: 300px;
  }
`;

const Title = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  margin: 0 12px 0;

  @media (min-width: 768px) {
    line-height: 40px;
    font-size: 32px;
    text-align: left;
    margin: 0;
    margin-right: 45px;
  }

  @media (min-width: 992px) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    font-size: 32px;
    margin-top: 55px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-left: 260px;
    margin-top: 20px;
  }

  @media (min-width: 992px) {
    padding-left: 15%;
    padding-left: 0;
    margin-top: 0;
    align-items: baseline;
  }
`;

const Raiting = styled.img`
  width: 70px;
  height: 10px;
  margin-right: 10px;
`;

const RaitingTitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
`;

const Phone = styled.img`
  width: 162px;
  height: 213px;
  position: absolute;
  bottom: 0;
  left: 0;

  @media (min-width: 768px) {
    width: 237px;
    height: 312px;
  }

  @media (min-width: 992px) {
    position: absolute;
    left: 25%;
  }
`;

const ListOS = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-left: 170px;
  padding-top: 55px;
  padding-bottom: 55px;

  @media (min-width: 768px) {
    padding-left: 260px;
    padding-top: 40px;
  }

  @media (min-width: 992px) {
    padding-left: 0;
    padding-top: 0;
    padding-left: 0;
  }
`;

const OS = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    &:nth-child(2)::before {
      content: "";
      position: relative;
      right: 10px;
      border-left: 1px white solid;
      border-right: 1px white solid;
      mix-blend-mode: normal;
      opacity: 0.5;
    }

    &:nth-child(2)::after {
      content: "";
      position: relative;
      left: 10px;
      border-left: 1px white solid;
      border-right: 1px white solid;
      mix-blend-mode: normal;
      opacity: 0.5;
    }
  }
`;

const OSTitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Stars = styled.section`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 20px;

  @media (min-width: 768px) {
    justify-content: unset;
  }

  @media (min-width: 992px) {
    justify-content: center;
    padding-right: 29%;
  }
`;

const OSIcon = styled.img`
  width: 18px;
  height: 23px;
  margin-right: 10px;
`;

export default function() {
  return (
    <Body>
      <Phone src={mobileApp} />
      <Header>
        <Title>Скачай мобильное приложение Aviasales.ru</Title>
        <Stars>
          <Raiting src={raiting} />
          <RaitingTitle>Более 103 000 оценок</RaitingTitle>
        </Stars>
      </Header>
      <ListOS>
        <OS>
          <OSIcon src={apple} />
          <OSTitle>iPhone или iPad</OSTitle>
        </OS>
        <OS>
          <OSIcon src={android} />
          <OSTitle>Android</OSTitle>
        </OS>
        <OS>
          <OSIcon src={winPhone} />
          <OSTitle>Windows Phone</OSTitle>
        </OS>
      </ListOS>
    </Body>
  );
}
