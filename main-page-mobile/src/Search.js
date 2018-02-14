import styled from "styled-components";

// --------------------------------------- Header ----------------------------------------
import logo from "./logo.svg";
import calendar from "./calendar.svg";
import aero from "./aero.svg";
import arrow from "./arrow.svg";

export const Header = styled.header`
  width: 320px;
  height: 518px;
  background: linear-gradient(
    to bottom right,
    #00b0de 0%,
    #01aedc 3.7%,
    #02abdb 7.44%,
    #02abdb 11.16%,
    #02abdb 11.38%,
    #196ebd 100%
  );
  padding: 6px;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 30px;
  height: 29px;
  padding-top: 12px;
  background: url(${logo}) no-repeat center;
  box-sizing: border-box;
`;

export const H2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-style: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
`;

export const Main = styled.section`
  width: 308px;
  height: 342px;
  margin-top: 47px;
  box-sizing: border-box;
  text-align: left;
`;

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 56px;
  margin-top: 3px;
  border: none;
  box-sizing: border-box;

  &:nth-last-child(2) > :first-child {
    border-bottom-right-radius: 4%;
    border-bottom-left-radius: 4%;
  }
`;

export const DateWrapper = styled.section`
  width: 153px;
  box-sizing: border-box;

  &:first-child {
    margin-right: 2px;
  }
`;

export const CityWrapper = styled.section`
  padding: 19px 16px;
  background-color: white;
  box-sizing: border-box;
  border-top-right-radius: 4%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 18px 0 18px 16px;
  box-sizing: border-box;

  overflow: hidden;
  border: inherit;
`;

export const TextInput = Input.extend`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: ##4a4a4a;

  &:nth-last-child(2) {
    border-top-left-radius: 4%;
  }
`;

export const DateInput = Input.extend`
  background: url(${calendar}) no-repeat 122px;
  background-color: white;
  cursor: pointer;
`;

export const City = styled.span`
  width: 40px;
  height: 20px;
  color: #a0b0b9;
`;

export const Select = Input.withComponent("select");

export const SelectPlace = Select.extend`
  cursor: pointer;
`;

export const ChangeButton = styled.button`
  width: 16px;
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
  border-radius: 4%;
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

// ----------------------------------------------- Header --------------------------------

// ----------------------------------------------- TopDestionations ----------------------

export const TopDestionations = styled.section`
  width: 320px;
  height: 1784px;
  background-color: #f8fcff;
`;

export const Compass = styled.section``;

export const Title = styled.span``;

export const TownWrapper = styled.section``;

export const Pencil = styled.span``;

export const CategoryWrapper = styled.section``;

export const Category = styled.span``;
