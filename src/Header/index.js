import React from "react";
import styled from "styled-components";

import logo from "./images/logo.svg";
import calendar from "./images/calendar.svg";
import aero from "./images/aero.svg";
import arrow from "./images/arrow.svg";
import arrowBottom from "./images/arrow-bottom.svg";

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
  margin-left: 10px;
      
  @media (min-width: 768px) {
      display: block;
    }
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

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  color: #4a4a4a;
  margin-top: 30px;

  @media (min-width: 768px) {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Field = styled.section`
  display: flex;
  margin-top: 3px;

  @media (min-width: 768px) {
    width: 45%;
    margin-right: 2px;
  }

  @media (min-width: 992px) {
    width: 22.5%;
  }
`;

const Dates = styled.section`
  width: 100%;

  &:first-child {
    margin-right: 2px;
  }
`;

const CityWrapper = styled.section`
  padding: 18px 16px;
  background-color: white;
  border-top-right-radius: 4%;

  @media (min-width: 768px) {
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
  color: #a0b0b9;
`;

const SelectPlace = styled.button`
  width: 100%;
  padding: 18px 0 18px 16px;
  overflow: hidden;
  border: inherit;
  box-sizing: border-box;
  cursor: pointer;
  background: white;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const DropDownArrow = styled.img`
  width: 10px;
  height: 5px;
  position: relative;
  left: 50px;
  bottom: 3px;
`;

const ChangeButton = styled.button`
  width: 16px;
  height: 18px;
  border: none;
  background: url(${arrow}) no-repeat center;
  margin-left: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 28px;
  background-color: #ff9241;
  color: #fff;
  margin-top: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 88px;
  padding-top: 14px;
  padding-bottom: 14px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 26px;
    height: 21px;
    background: url(${aero}) no-repeat center;
    position: absolute;
    top: 21px;
    right: 30px;
  }

  @media (min-width: 768px) {
    width: 50%;
    font-size: 28px;
    margin-bottom: 120px;
  }

  @media (min-width: 992px) {
    width: 23%;
    font-size: 28px;
    margin-bottom: 255px;
  }
`;

const Type = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
`;

export default function() {
  return (
    <Header>
      <LogoWrapper>
        <Logo src={logo} alt="aviasales" width="30px;" height="29px;" />
        <Title>aviasales</Title>
      </LogoWrapper>
      <PromoHead>Поиск дешевых авиабилетов</PromoHead>
      <PromoText>Лучший способ купить авиабилеты дешево</PromoText>
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
          <Dates>
            <DateField placeholder="Туда" />
          </Dates>
          <Dates>
            <DateField placeholder="Обратно" />
          </Dates>
        </Field>
        <Field>
          <SelectPlace>
            1 пассажир, <Type>эконом</Type>
            <DropDownArrow src={arrowBottom} />
          </SelectPlace>
        </Field>
        <Button>Найти билеты</Button>
      </Form>
    </Header>
  );
}
