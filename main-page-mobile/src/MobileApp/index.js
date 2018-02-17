import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
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
  height: 350px;
  position: relative;

  @media (min-width: 768px) and (max-width: 992px) {
    height: 280px;
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

  @media (min-width: 768px) and (max-width: 992px) {
    line-height: 40px;
    font-size: 32px;
    text-align: left;
    margin: 0;
    margin-right: 30px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 992px) {
    padding-left: 260px;
    margin-top: 20px;
  }
`;

const Raiting = styled.img`
  margin-right: 10px;
`;

const RaitingTitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
`;

const PhoneWrapper = styled.section`
  height: 209px;
  position: absolute;
  bottom: 3px;

  @media (min-width: 768px) and (max-width: 992px) {
    bottom: 99px;
  }
`;

const Icon = styled.img`
  width: 162px;
  height: 213px;

  @media (min-width: 768px) and (max-width: 992px) {
    width: 234px;
    height: 308px;
  }
`;

const ListOSWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-left: 170px;
  padding-top: 30px;

  @media (min-width: 768px) and (max-width: 992px) {
    padding-left: 260px;
    padding-top: 0;
  }
`;

const OS = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;

  @media (min-width: 768px) {
    height: 24px;

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
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Stars = styled.section`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) and (max-width: 992px) {
    justify-content: unset;
  }
`;

const OSIcon = styled.img`
  margin-right: 10px;
`;

export default function() {
  return (
    <Body>
      <PhoneWrapper>
        <Icon src={mobileApp} />
      </PhoneWrapper>
      <Header>
        <Title>Скачай мобильное приложение Aviasales.ru</Title>
        <Stars>
          <Raiting src={raiting} />
          <RaitingTitle>Более 103 000 оценок</RaitingTitle>
        </Stars>
      </Header>
      <ListOSWrapper>
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
      </ListOSWrapper>
    </Body>
  );
}
