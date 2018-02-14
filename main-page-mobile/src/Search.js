import styled from "styled-components";

// --------------------------------------- Header ----------------------------------------
import logo from "./logo.svg";
import calendar from "./calendar.svg";
import aero from "./aero.svg";
import arrow from "./arrow.svg";
// --------------------------------------- Header -----------------------------------------

// --------------------------------------- TopDestinations -------------------------------
import compass from "./compass.svg";
import pencil from "./pencil.svg";

import globe from "./globe.svg";
import palm from "./palm.svg";
import bag from "./bag.svg";
import pantheon from "./pantheon.svg";
import glass from "./glass.svg";
import stroller from "./stroller.svg";

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
  padding: 6px;
  background-color: #f8fcff;
`;

export const CompassWrapper = styled.section`
  width: 64px;
  height: 64px;
  margin: 40px 128px 0 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2f8ff;
  border-radius: 50%;
  box-sizing: border-box;
`;

export const Compass = styled.span`
  display: block;
  width: 38px;
  height: 38px;
  background: url(${compass}) no-repeat center;
`;

export const TitleWrapper = styled.section`
  width: 288px;
  height: 72px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: Medium, Regular;
  line-height: 24px;
  text-align: center;
  margin: 24px 10px 0 10px;
  box-sizing: border-box;
`;

export const TownWrapper = styled.section`
  color: #00ace2;
`;

export const Pencil = styled.button`
  width: 16px;
  height: 16px;
  background: url(${pencil}) no-repeat center;
  border: none;
  cursor: pointer;
`;

export const CategoryWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 308px;
  height: 224px;
  margin-top: 32px;
  box-sizing: border-box;
`;

export const Category = styled.div`
  width: 82px;
  height: 102px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &:first-child {
    margin-right: 30px;
  }

  &:nth-child(2) {
    margin-right: 30px;
  }

  &:nth-child(4) {
    margin-right: 30px;
  }

  &:nth-child(5) {
    margin-right: 30px;
  }

  & > :first-child {
    &::after {
      content: "";
      display: block;
      width: 22px;
      height: 22px;
      position: relative;
      top: 13px;
      left: 12px;
      background: url(${globe}) no-repeat center;
    }
  }
`;

// import globe from "./globe.svg";
// import palm from "./palm.svg";
// import bag from "./bag.svg";
// import pantheon from "./pantheon.svg";
// import glass from "./glass.svg";
// import stroller from "./stroller.svg";

export const CategoryIcon = styled.section`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 4px 16px rgba(74, 74, 74, 0.12);
`;

export const CategoryTitle = styled.span`
  display: block;
  height: 40px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-style: Regular;
  line-height: 20px;
  color: #00ace2;
  text-align: center;
`;

export const DestinationCardWrapper = styled.section`
  margin-top: 40px;
  width: 308px;
`;

export const DestinationCard = styled.div`
  margin-top: 10px;
  box-shadow: 0 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;

  & > :first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

export const DestinationCardDescription = styled.div`
  height: 72px;
`;

export const DestinationCardImg = styled.img`
  border-style: none;
`;

export const DestinationCardRoute = styled.section`
  display: inline-grid;
  width: 150px;
  height: 50px;
  margin: 16px 0 36px 16px;
`;

export const DestinationCardDetails = styled.section`
  display: inline-grid;
  width: 118px;
  height: 20px;
  margin: 18px 16px 37px 0;
`;

export const DestinationCardTown = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  text-align: left;
  color: #5b5b5c;
`;

export const DestinationCardCountry = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  text-align: left;
  color: #a0b0b9;
`;

export const DestinationCardFindByPrice = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: regular;
  line-height: 16px;
  text-align: Right;
  color: #00bae8;
`;

export const DestinationCardDate = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  text-align: right;
  color: #a0b0b9;
`;
