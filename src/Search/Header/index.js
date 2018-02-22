import React from "react";
import styled from "styled-components";

import arrowBack from "./images/arrow-back.png";

import LogoWrapper from "../../Header/LogoWrapper";
import Form from "../../Header/Form";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
  background: linear-gradient(
    100deg,
    #00b0de -46.32%,
    #01aedc -42.65%,
    #02abdb -38.93%,
    #02abdb -35.24%,
    #02abdb -35.02%,
    #196ebd 52.98%
  );

  @media (min-width: 768px) {
    flex-direction: column;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 32px;
  }
`;

const ArrowBack = styled.button`
  width: 16px;
  height: 16px;
  background: url(${arrowBack}) no-repeat center;
  border: none;
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px 50px 10px 25px;
`;

const Route = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
`;

const Details = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #ffffff;
`;

const CurrencyPicker = styled.button`
  visibility: visible;
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 100px;
  padding: 6px 12px;
  cursor: pointer;
`;

const Currency = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
`;

const LeftSide = styled.section`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Head = styled.section`
  visibility: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    visibility: visible;
    width: 100%;
  }
`;

export default function() {
  return (
    <Header>
      <LeftSide>
        <ArrowBack />
        <Info>
          <Route>Москва — Барселона</Route>
          <Details>24 фев — 3 март, 1 пассажир</Details>
        </Info>
      </LeftSide>
      <Head>
        <LogoWrapper search />
        <CurrencyPicker>
          <Currency>RUB</Currency>
        </CurrencyPicker>
      </Head>
      <Form search />
    </Header>
  );
}
