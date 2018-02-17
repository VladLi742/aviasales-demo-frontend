import React from "react";
import styled from "styled-components";
import globe from "./images/globe.svg";
import palm from "./images/palm.svg";
import bag from "./images/bag.svg";
import pantheon from "./images/pantheon.svg";
import glass from "./images/glass.svg";
import stroller from "./images/stroller.svg";

import compass from "./images/compass.svg";
import pencil from "./images/pencil.svg";

import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";

import categoryList from "./category-list";
import Card from "./Card";

const TopDestionations = styled.section`
  min-height: 1784px;
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
`;

const Title = styled.section`
  min-width: 288px;
  height: 72px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  margin: 24px 10px 0 10px;
  box-sizing: border-box;
  @media (min-width: 768px) and (max-width: 992px) {
    line-height: 36px;
    font-size: 24px;
  }
`;

const Town = styled.section`
  color: #00ace2;
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

const CategoryWrapper = styled.section`
  display: flex;
  @media (max-width: 720px) {
    min-height: 240px;
  }

  flex-wrap: wrap;
  margin-top: 32px;
  box-sizing: border-box;
  justify-content: center;
  min-height: 150px;
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
`;

const IconWrapper = styled.section`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 4px 16px rgba(74, 74, 74, 0.12);
`;

const Icon = styled.img`
  width: 22px;
  height: 22px;
  position: relative;
  top: 13px;
`;

const Name = styled.span`
  display: block;
  height: 40px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-style: Regular;
  line-height: 20px;
  color: #00ace2;
  text-align: center;
  margin-top: 35px;
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

      <CategoryWrapper>
        <Row>
          <Col xs={4}>
            <Category>
              <Icon src={globe} />
              <Name>КУДА УГОДНО</Name>
            </Category>
          </Col>
          <Col xs={4}>
            <Category>
              <Icon src={palm} />
              <Name>CОЛНЦЕ И МОРЕ</Name>
            </Category>
          </Col>
          <Col xs={4}>
            <Category>
              <Icon src={bag} />
              <Name>ШОПИНГ, ГОРОД</Name>
            </Category>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Category>
              <Icon src={pantheon} />
              <Name>КУЛЬТУРА И ИСТОРИЯ</Name>
            </Category>
          </Col>
          <Col xs={4}>
            <Category>
              <Icon src={glass} />
              <Name>НОЧНАЯ ЖИЗНЬ</Name>
            </Category>
          </Col>
          <Col xs={4}>
            <Category>
              <Icon src={stroller} />
              <Name>ОТДЫХ С ДЕТЬМИ</Name>
            </Category>
          </Col>
        </Row>
      </CategoryWrapper>

      <Card />
    </TopDestionations>
  );
}
