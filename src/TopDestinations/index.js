import React from "react";
import styled from "styled-components";

import compass from "./images/compass.svg";
import pencil from "./images/pencil.svg";

import globe from "./images/globe.svg";
import palm from "./images/palm.svg";
import bag from "./images/bag.svg";
import pantheon from "./images/pantheon.svg";
import glass from "./images/glass.svg";
import stroller from "./images/stroller.svg";

import Card from "./Card";

const TopDestionations = styled.section`
  padding: 6px;
  background-color: #f8fcff;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

const Compass = styled.section`
  width: 64px;
  height: 64px;
  margin: 40px 128px 0 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2f8ff;
  border-radius: 50%;
  box-sizing: border-box;

  &::after {
    content: "";
    display: block;
    width: 38px;
    height: 38px;
    background: url(${compass}) no-repeat center;
  }

  @media (min-width: 768px) {
    margin-top: 56px;
  }
`;

const Title = styled.section`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  margin: 24px 10px 0 10px;
  box-sizing: border-box;

  @media (min-width: 992px) {
    line-height: 36px;
    font-size: 24px;
  }
`;

const Town = styled.section`
  color: #00ace2;

  &:hover {
    color: #ff8b00;
  }
`;

const Pencil = styled.button`
  width: 16px;
  height: 16px;
  background: url(${pencil}) no-repeat center;
  border: none;
  cursor: pointer;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Categories = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  margin-top: 32px;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 75%;
  }

  @media (min-width: 992px) {
    justify-content: space-around;
    width: 40%;
  }
`;

const Category = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
  border-radius: 50px;

  &:nth-child(2n) {
    margin-left: 60px;
    margin-right: 60px;
  }

  &:last-child {
    margin-left: 0;
    margin-right: 0;
  }
`;

const Icon = styled.img`
  width: 22px;
  height: 22px;
  position: relative;
  top: 13px;
  border-radius: 5px;
`;

const Name = styled.span`
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-style: Regular;
  line-height: 20px;
  color: #00ace2;
  text-align: center;
  margin-top: 35px;
`;

const FirstLine = styled.section`
  display: flex;
  margin-bottom: 60px;
`;

const SecondLine = styled.section`
  display: flex;
  margin-bottom: 100px;
`;

export default function() {
  return (
    <TopDestionations>
      <Header>
        <Compass />
        <Title>
          Популярные направления перелетов из города
          <Town>
            Москва <Pencil />
          </Town>
        </Title>
      </Header>

      <Categories>
        <FirstLine>
          <Category>
            <Icon src={globe} />
            <Name>КУДА УГОДНО</Name>
          </Category>
          <Category>
            <Icon src={palm} />
            <Name>CОЛНЦЕ И МОРЕ</Name>
          </Category>
          <Category>
            <Icon src={bag} />
            <Name>ШОПИНГ, ГОРОД</Name>
          </Category>
        </FirstLine>
        <SecondLine>
          <Category>
            <Icon src={pantheon} />
            <Name>КУЛЬТУРА И ИСТОРИЯ</Name>
          </Category>
          <Category>
            <Icon src={glass} />
            <Name>НОЧНАЯ ЖИЗНЬ</Name>
          </Category>
          <Category>
            <Icon src={stroller} />
            <Name>ОТДЫХ С ДЕТЬМИ</Name>
          </Category>
        </SecondLine>
      </Categories>

      <Card />
    </TopDestionations>
  );
}
