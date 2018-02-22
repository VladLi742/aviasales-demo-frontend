import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import calendar from "./images/calendar.svg";
import aero from "./images/aero.svg";
import arrow from "./images/arrow.svg";
import arrowBottom from "./images/arrow-bottom.svg";

const Form = styled.form`
  display: ${props => (props.search ? "none" : "flex")};
  justify-content: center;
  flex-direction: column;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  color: #4a4a4a;
  margin-top: 30px;

  @media (min-width: 768px) {
    width: ${props => (props.search ? "100%" : "85%")};
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
  }
`;

const Field = styled.section`
  display: flex;
  margin-top: 3px;

  @media (min-width: 768px) {
    width: ${props => (props.search ? "49%" : "45%")};
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
  text-align: left;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 10px;
    height: 5px;
    position: absolute;
    top: 50%;
    right: 25px;
    background: url(${arrowBottom}) no-repeat center;
  }
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
  min-width: 308px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 28px;
  background-color: #ff9241;
  color: #fff;
  margin-top: ${props => (props.search ? "0" : "15px")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: ${props => (props.search ? "0" : "88px")};
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
    margin-bottom: ${props => (props.search ? "0" : "120px")};
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

export default function SetForm(props) {
  return (
    <Form search>
      <Field search>
        <TextInput text="Москва" placeholder="Город вылета" />
        <CityWrapper>
          <City>MOW</City>
          <ChangeButton />
        </CityWrapper>
      </Field>
      <Field search>
        <TextInput placeholder="Город прибытия" />
        <CityWrapper>
          <City>BCN</City>
        </CityWrapper>
      </Field>
      <Field search>
        <Dates>
          <DateField placeholder="Туда" />
        </Dates>
        <Dates>
          <DateField placeholder="Обратно" />
        </Dates>
      </Field>
      <Field search>
        <SelectPlace>
          1 пассажир, <Type>эконом</Type>
        </SelectPlace>
      </Field>
      <Link to="/search">
        <Button search>Найти билеты</Button>
      </Link>
    </Form>
  );
}
