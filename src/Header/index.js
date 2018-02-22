import React from "react";
import styled from "styled-components";

import LogoWrapper from "./LogoWrapper";
import SetForm from "./Form";

const Header = styled.header`
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  padding: 6px;
  box-sizing: border-box;

  @media (min-width: 992px) {
    padding-left: 98px;
    padding-right: 98px;
  }
`;

const PromoText = styled.span`
  display: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #FFF;

  @media (min-width: 768px) {
      display: block;
    }
  }

  @media (min-width: 992px) {
    font-size: 24px;
  }
`;

const PromoHead = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #fff;
  margin-top: 47px;
  margin-bottom: 0;

  @media (min-width: 768px) {
    line-height: 48px;
    font-size: 32px;
    margin-top: 83px;
  }

  @media (min-width: 992px) {
    font-size: 40px;
    margin-top: 215px;
  }
`;

export default function() {
  return (
    <Header>
      <LogoWrapper />
      <PromoHead>Поиск дешевых авиабилетов</PromoHead>
      <PromoText>Лучший способ купить авиабилеты дешево</PromoText>
      <SetForm />
    </Header>
  );
}
