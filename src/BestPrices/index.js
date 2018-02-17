import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import calendar from "./images/calendar.svg";

import Direction from "./Direction";

const Body = styled.section`
  background: linear-gradient(to bottom, #f8fcff 0%, #ffffff 100%);
  color: #4a4a4a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
`;

const Calendar = styled.span`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2f8ff;
  border-radius: 50%;

  &::after {
    content: "";
    width: 28px;
    height: 28px;
    background: url(${calendar}) no-repeat center;
  }
`;

const Title = styled.span`
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  margin: 20px 32px 0 33px;
  box-sizing: border-box;

  @media (min-width: 768px) and (max-width: 992px) {
    line-height: 36px;
    font-size: 24px;
  }
`;

const PromoText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  max-width: 680px;
  margin: 40px auto 0;

  @media (min-width: 768px) and (max-width: 992px) {
    line-height: 26px;
  }
`;

const PromoStatement = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  margin-top: 25px;
  margin-bottom: 40px;
  color: #a0b0b9;
`;

export default function() {
  return (
    <Body>
      <Calendar />
      <Title>Лучшие цены на авиабилеты за последний месяц</Title>
      <Direction />

      <PromoText>
        Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
        мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
        авиакомпаний.
      </PromoText>
      <PromoStatement>
        Цены, найденные пользователями за последние 48 часов, не являются
        офертой.
      </PromoStatement>
    </Body>
  );
}
