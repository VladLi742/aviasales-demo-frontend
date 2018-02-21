import React from "react";
import styled from "styled-components";

import arrowBack from "./images/arrow-back.png";

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
    display: none;
  }
`;

const ArrowBack = styled.button`
  width: 16px;
  height: 16px;
  background: url(${arrowBack}) no-repeat center;
  border: none;
`;

const Title = styled.section`
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
`;

export default function() {
  return (
    <Header>
      <LeftSide>
        <ArrowBack />
        <Title>
          <Route>Москва — Барселона</Route>
          <Details>24 фев — 3 март, 1 пассажир</Details>
        </Title>
      </LeftSide>
      <CurrencyPicker>
        <Currency>RUB</Currency>
      </CurrencyPicker>
    </Header>
  );
}
