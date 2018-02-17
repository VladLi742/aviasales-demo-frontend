import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

import logo from "./logo.svg";

import calendar from "./calendar.svg";
import aero from "./aero.svg";
import arrow from "./arrow.svg";

const Header = styled.header`
  min-height: 518px;
  width: 100%;
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
`;

const Logo = styled.img`
  display: flex;
  padding-top: 6px;
`;

const LogoWrapper = styled.section`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
      display: none;
      margin-right: 12px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      line-height: 25px;
      font-size: 20px;

      color: #fff;
  @media (min-width: 768px) and (max-width: 992px) {
      display: block;
    }
  }
`;

const Promo = styled.span`
display: none;
font-family: Roboto;
font-style: normal;
font-weight: bold;
line-height: normal;
font-size: 20px;
text-align: center;

color: #FFF;
  @media (min-width: 768px) and (max-width: 992px) {
      display: block;
    }
  }
`;

const H2 = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #fff;
  margin-top: 47px;

  @media (min-width: 768px) and (max-width: 992px) {
    line-height: 48px;
    font-size: 32px;
    margin-bottom: 8px;
  }
`;

const Form = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  color: #4a4a4a;
  margin-top: 30px;

  @media (min-width: 768px) and (max-width: 992px) {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Field = styled.section`
  display: flex;
  height: 56px;
  margin-top: 3px;

  &:nth-last-child(2) > :first-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 45%;
    margin-right: 2px;
  }
`;

const DateWrapper = styled.section`
  width: 100%;

  &:first-child {
    margin-right: 2px;
  }
`;

const CityWrapper = styled.section`
  padding: 18px 16px;
  background-color: white;
  border-top-right-radius: 4%;
  @media (min-width: 768px) and (max-width: 992px) {
    border-top-right-radius: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 18px 0 18px 16px;

  overflow: hidden;
  border: inherit;
  box-sizing: border-box;
`;

const TextInput = Input.extend`
  &:nth-last-child(2) {
    border-top-left-radius: 4px;
  }
`;

const DateField = Input.extend`
  background: url(${calendar}) no-repeat;
  background-position-x: 85%;
  background-position-y: 50%;
  background-color: white;
  cursor: pointer;
`;

const City = styled.span`
  min-width: 16px;
  height: 20px;
  color: #a0b0b9;
`;

const Select = Input.withComponent("select");

const SelectPlace = Select.extend`
  cursor: pointer;
`;

const ChangeButton = styled.button`
  min-width: 16px;
  height: 18px;
  border: none;
  background: url(${arrow}) no-repeat center;
  margin-left: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  line-height: 28px;
  background-color: #ff9241;
  color: #fff;
  margin-top: 15px;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &::after {
    content: "";
    width: 26px;
    height: 21px;
    background: url(${aero}) no-repeat center;
    background-size: cover;
    color: transparent;
    position: relative;
    top: 4px;
    left: 16px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 50%;
  }
`;

export default function() {
  return (
    <Header>
      <LogoWrapper>
        <Logo src={logo} alt="aviasales" width="30px;" height="29px;" />
        <Title>aviasales</Title>
      </LogoWrapper>
      <H2>Поиск дешевых авиабилетов</H2>
      <Promo>Лучший способ купить авиабилеты дешево</Promo>
      <Form>
        <Field>
          <TextInput placeholder="Город вылета" />
          <CityWrapper>
            <City>MOW</City>
            <ChangeButton />
          </CityWrapper>
        </Field>
        <Field>
          <TextInput placeholder="Город прибытия" />
        </Field>
        <Field>
          <DateWrapper>
            <DateField placeholder="Туда" />
          </DateWrapper>
          <DateWrapper>
            <DateField placeholder="Обратно" />
          </DateWrapper>
        </Field>
        <Field>
          <SelectPlace>
            <option value="">1 пассажир, эконом</option>
          </SelectPlace>
        </Field>
        <Button>Найти билеты</Button>
      </Form>
    </Header>
  );
}
