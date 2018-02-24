import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import calendar from "./images/calendar.svg";
import aero from "./images/aero.svg";
import arrow from "./images/arrow.svg";
import arrowBottom from "./images/arrow-bottom.svg";

import DropDownCalendar from "../Search/Main/DropDownCalendar";

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
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    align-items: baseline;
  }
`;

const Field = styled.section`
  display: flex;
  margin-top: 3px;

  @media (min-width: 768px) {
    min-width: ${props => (props.search ? "370px" : "311px")};
    position: relative;
    margin-right: 2px;
  }

  @media (min-width: 992px) {
    min-width: 226px;
    align-items: center;
  }
`;

const CityWrapper = styled.section`
  padding: 17px 16px;
  background-color: white;
  border-top-right-radius: 4px;

  @media (min-width: 768px) {
    position: absolute;
    right: 0;
    border-top-right-radius: ${props => (props.search ? "4px" : "0")};
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 19px 0 19px 16px;
  overflow: hidden;
  border: inherit;
  box-sizing: border-box;
`;

const TextInput = Input.extend`
  @media (min-width: 768px) {
    border-top-left-radius: ${props => (props.radiusLeft ? "4px" : "0")};
  }
`;

export const DateField = Input.extend`
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
  min-width: 308px;
  padding: 18px 26px 18px 16px;
  overflow: hidden;
  border: inherit;
  box-sizing: border-box;
  cursor: pointer;
  background: white;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  text-align: left;
  position: relative;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &::after {
    content: "";
    display: block;
    width: 10px;
    height: 5px;
    position: absolute;
    top: 50%;
    right: ${props => (props.search ? "14px" : "25px")};
    background: url(${arrowBottom}) no-repeat center;
  }

  @media (min-width: 768px) {
    min-width: ${props => (props.search ? "183px" : "311px")};
    margin-right: ${props => (props.search ? "2px" : "0")};
    padding-left: ${props => (props.search ? "7px" : "16px")};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 4px;
  }

  @media (min-width: 992px) {
    min-width: ${props => (props.search ? "212px" : "212px")};
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
  border: none;
  border-radius: 4px;
  margin-top: ${props => (props.search ? "0" : "15px")};
  margin-bottom: ${props => (props.search ? "0" : "88px")};
  padding-top: 14px;
  padding-bottom: 14px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    display: ${props => (props.search ? "none" : "block")};
    width: 26px;
    height: 21px;
    background: url(${aero}) no-repeat center;
    position: absolute;
    top: 21px;
    right: 30px;
  }

  &:hover {
    background-color: #ffa353;
  }

  @media (min-width: 768px) {
    min-width: ${props => (props.search ? "184px" : "308px")};
    font-size: ${props => (props.search ? "20px" : "28px")};
    margin-top: ${props => (props.search ? "0" : "32px")};
    margin-bottom: ${props => (props.search ? "0" : "120px")};
    border-radius: ${props => (props.search ? "0" : "4px")};
    border-bottom-right-radius: 4px;
    padding: ${props => (props.search ? "16px" : "14px 0")};
  }

  @media (min-width: 992px) {
    min-width: ${props => (props.search ? "194px" : "308px")};
    margin-bottom: ${props => (props.search ? "0" : "255px")};
    margin-left: ${props => (props.search ? "20px" : "0")};
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

export const Dates = Field.extend`
  & > :first-child {
    margin-right: 2px;
  }

  @media (min-width: 768px) {
    max-width: 311px;
  }

  @media (min-width: 992px) {
    min-width: 360px;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function SetFields(props) {
  const { departure, arrival, place, type } = props.search;

  return (
    <Form search>
      <Field search>
        <TextInput radiusLeft placeholder="Город вылета" />
        <CityWrapper>
          <City>{departure.abbreviation}</City>
          <ChangeButton />
        </CityWrapper>
      </Field>
      <Field search>
        <TextInput placeholder="Город прибытия" />
        <CityWrapper search>
          <City>{arrival.abbreviation}</City>
        </CityWrapper>
      </Field>
      <DropDownCalendar />
      <Field search>
        <SelectPlace search>
          {place}, <Type>{type}</Type>
        </SelectPlace>
        <Link to="/search">
          <Button search>Найти билеты</Button>
        </Link>
      </Field>
    </Form>
  );
}

export default function SetForm(props) {
  if (props.page) {
    return <SetFields search={props.page} />;
  } else {
    return (
      <Wrapper>
        <Form>
          <Field>
            <TextInput text="Москва" placeholder="Город вылета" />
            <CityWrapper>
              <City>MOW</City>
              <ChangeButton />
            </CityWrapper>
          </Field>
          <Field>
            <TextInput placeholder="Город прибытия" />
            <CityWrapper>
              <City />
            </CityWrapper>
          </Field>
          <Dates>
            <DateField placeholder="Туда" />
            <DateField placeholder="Обратно" />
          </Dates>
          <Field>
            <SelectPlace>
              1 пассажир, <Type>эконом</Type>
            </SelectPlace>
          </Field>
        </Form>
        <Link to="/search">
          <Button>Найти билеты</Button>
        </Link>
      </Wrapper>
    );
  }
}
