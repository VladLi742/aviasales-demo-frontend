import styled from "styled-components";

import calendar from "./calendar.svg";
import aero from "./aero.svg";
import arrow from "./arrow.svg";

export const Header = styled.header`
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

export const Logo = styled.img`
  display: flex;
  padding-top: 6px;
`;

export const H2 = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #fff;
  margin-top: 47px;
`;

export const Form = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  color: #4a4a4a;
`;

export const Field = styled.section`
  display: flex;
  height: 56px;
  margin-top: 3px;

  &:nth-last-child(2) > :first-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export const DateWrapper = styled.section`
  min-width: 153px;

  &:first-child {
    margin-right: 2px;
  }
`;

export const CityWrapper = styled.section`
  padding: 18px 16px;
  background-color: white;
  border-top-right-radius: 4%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 18px 0 18px 16px;

  overflow: hidden;
  border: inherit;
  box-sizing: border-box;
`;

export const TextInput = Input.extend`
  &:nth-last-child(2) {
    border-top-left-radius: 4px;
  }
`;

export const DateInput = Input.extend`
  background: url(${calendar}) no-repeat 122px;
  background-color: white;
  cursor: pointer;
`;

export const City = styled.span`
  min-width: 16px;
  height: 20px;
  color: #a0b0b9;
`;

export const Select = Input.withComponent("select");

export const SelectPlace = Select.extend`
  cursor: pointer;
`;

export const ChangeButton = styled.button`
  min-width: 16px;
  height: 18px;
  border: none;
  background: url(${arrow}) no-repeat center;
  margin-left: 10px;
  cursor: pointer;
`;

export const Button = styled.button`
  width: inherit;
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
`;
