import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
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

  @media (min-width: 768px) {
    margin-top: 10px;
    padding-top: 46px;
  }

  @media (min-width: 992px) {
    margin-top: 0;
    padding-top: 66px;
  }
`;

const PhoneWrapper = styled.section`
  position: relative;
  padding-bottom: 25px;

  @media (min-width: 1200px) {
    padding-bottom: 43px;
  }
`;

const Phone = styled.img`
  width: 162px;
  height: 213px;
  position: absolute;
  bottom: 0;
  left: -10px;

  @media (min-width: 768px) {
    width: 237px;
    height: 312px;
  }

  @media (min-width: 1200px) {
    width: 234px;
    height: 308px;
    left: 100px;
  }
`;

const OS = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    display: inline-block;
    position: relative;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    margin-right: 20px;
  }

  &:last-child {
    @media (min-width: 768px) {
      margin-right: 0;
      border: none;
    }
  }
`;

const OSTitle = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;
  cursor: pointer;
  padding-left: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    display: inline-block;
    padding-left: 30px;
    padding-right: 20px;
  }
`;

const OSIcon = styled.img`
  width: 18px;
  height: 23px;

  @media (min-width: 768px) {
    position: absolute;
  }
`;

const Title1 = styled.h2`
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  margin-top: 0;

  @media (min-width: 768px) {
    line-height: 40px;
    font-size: 32px;
    text-align: left;
    margin-bottom: 16px;
  }
`;

const Rating = styled.div`
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  margin-bottom: 56px;

  &::before {
    content: "";
    display: inline-block;
    background: url(${raiting});
    width: 70px;
    height: 10px;
    margin-right: 12px;
  }
  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 40px;
  }
`;

export default function() {
  return (
    <Body>
      <Grid>
        <Row start="md">
          <Col xs={12} md={8} mdOffset={4}>
            <Title1>Скачай мобильное приложение Aviasales.ru</Title1>
            <Rating>Более 103 000 оценок</Rating>
          </Col>
        </Row>
        <Row>
          <Col xs={6} xsOffset={6} md={8} mdOffset={4}>
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
          </Col>
        </Row>
        <PhoneWrapper>
          <Phone src={mobileApp} />
        </PhoneWrapper>
      </Grid>
    </Body>
  );
}
