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

import krasnodar from "./images/krasnodar.jpg";
import sochiAdler from "./images/sochi-adler.jpg";
import petersburg from "./images/petersburg.jpg";
import mineralWaters from "./images/mineral-waters.jpg";
import simferopol from "./images/simferopol.jpg";
import barcelona from "./images/barcelona.jpg";

import categoryList from "./category-list";

const TopDestionations = styled.section`
  min-height: 1784px;
  padding: 6px;
  background-color: #f8fcff;
  display: flex;
  flex-direction: column;
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
  flex-wrap: wrap;
  min-height: 224px;
  margin-top: 32px;
  box-sizing: border-box;
  justify-content: center;
`;

const Category = styled.div`
  width: 82px;
  height: 102px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
`;

const DestinationCardWrapper = styled.section`
  margin-top: 20px;
  width: 308px;
`;

const DestinationCard = styled.div`
  margin-top: 10px;
  box-shadow: 0 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;

  & > :first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

const DestinationCardDescription = styled.div`
  height: 72px;
`;

const DestinationCardImg = styled.img`
  border-style: none;
`;

const DestinationCardRoute = styled.section`
  display: inline-grid;
  width: 150px;
  height: 50px;
  margin: 16px 0 36px 16px;
`;

const DestinationCardDetails = styled.section`
  display: inline-grid;
  width: 118px;
  height: 20px;
  margin: 18px 16px 37px 0;
`;

const DestinationCardTown = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  text-align: left;
  color: #5b5b5c;
`;

const DestinationCardCountry = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  text-align: left;
  color: #a0b0b9;
`;

const DestinationCardFindByPrice = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: regular;
  line-height: 16px;
  text-align: Right;
  color: #00bae8;
`;

const DestinationCardDate = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  text-align: right;
  color: #a0b0b9;
`;

export default function() {
  return (
    <TopDestionations>
      <Header>
        <Row>
          <Col xs={12}>
            <Compass />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Title>
              Популярные направления перелетов из города
              <Town>
                Москва <Pencil />
              </Town>
            </Title>
          </Col>
        </Row>
      </Header>
      {/* <Row>
        <Col xs={4}>
          {categoryList.map(category => {
            return (
              <Category>
                <Icon src={category.pic} />
                <Name>{category.title}</Name>
              </Category>
            );
          })}
        </Col>
      </Row> */}

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

      {/* <CategoryWrapper>
<Category>
        <Icon src={globe}/><Name>КУДА УГОДНО</Name></Category>
        <Category><Icon src={palm}/><Name>CОЛНЦЕ И МОРЕ<Name><Category>
        <Category><Icon src={bag}/><Name>ШОПИНГ, ГОРОД<Name><Category>
        <Category><Icon src={pantheon}/><Name>КУЛЬТУРА И ИСТОРИЯ<Name><Category>
       <Category> <Icon src={glass}/><Name>НОЧНАЯ ЖИЗНЬ<Name><Category>
       <Category> <Icon src={stroller}/><Name>ОТДЫХ С ДЕТЬМИ<Name><Category>
      </CategoryWrapper> */}

      {/* <CategoryWrapper>
        <Category>
          <CategoryIcon />
          <CategoryTitle>КУДА УГОДНО</CategoryTitle>
        </Category>
        <Category>
          <CategoryIcon />
          <CategoryTitle>CОЛНЦЕ И МОРЕ</CategoryTitle>
        </Category>
        <Category>
          <CategoryIcon />
          <CategoryTitle>ШОПИНГ, ГОРОД</CategoryTitle>
        </Category>
        <Category>
          <CategoryIcon />
          <CategoryTitle>КУЛЬТУРА И ИСТОРИЯ</CategoryTitle>
        </Category>
        <Category>
          <CategoryIcon />
          <CategoryTitle>НОЧНАЯ ЖИЗНЬ</CategoryTitle>
        </Category>
        <Category>
          <CategoryIcon />
          <CategoryTitle>ОТДЫХ С ДЕТЬМИ</CategoryTitle>
        </Category>
      </CategoryWrapper> */}
      <DestinationCardWrapper>
        <DestinationCard>
          <DestinationCardImg src={krasnodar} width="309" height="176" />
          <DestinationCardDescription>
            <DestinationCardRoute>
              <DestinationCardTown>Краснодар</DestinationCardTown>
              <DestinationCardCountry>РОССИЯ</DestinationCardCountry>
            </DestinationCardRoute>
            <DestinationCardDetails>
              <DestinationCardFindByPrice>
                Найти от 1 212 ₽
              </DestinationCardFindByPrice>
              <DestinationCardDate>18 марта</DestinationCardDate>
            </DestinationCardDetails>
          </DestinationCardDescription>
        </DestinationCard>
        <DestinationCard>
          <DestinationCardImg src={sochiAdler} width="309" height="176" />
          <DestinationCardDescription>
            <DestinationCardRoute>
              <DestinationCardTown>Сочи (Адлер)</DestinationCardTown>
              <DestinationCardCountry>РОССИЯ</DestinationCardCountry>
            </DestinationCardRoute>
            <DestinationCardDetails>
              <DestinationCardFindByPrice>
                Найти от 1 334 ₽
              </DestinationCardFindByPrice>
              <DestinationCardDate>27 марта</DestinationCardDate>
            </DestinationCardDetails>
          </DestinationCardDescription>
        </DestinationCard>
        <DestinationCard>
          <DestinationCardImg src={petersburg} width="309" height="176" />
          <DestinationCardDescription>
            <DestinationCardRoute>
              <DestinationCardTown>Санкт-Петербург</DestinationCardTown>
              <DestinationCardCountry>РОССИЯ</DestinationCardCountry>
            </DestinationCardRoute>
            <DestinationCardDetails>
              <DestinationCardFindByPrice>
                Найти от 1 508 ₽
              </DestinationCardFindByPrice>
              <DestinationCardDate>19 февраля</DestinationCardDate>
            </DestinationCardDetails>
          </DestinationCardDescription>
        </DestinationCard>
        <DestinationCard>
          <DestinationCardImg src={mineralWaters} width="309" height="176" />
          <DestinationCardDescription>
            <DestinationCardRoute>
              <DestinationCardTown>Минеральные Воды</DestinationCardTown>
              <DestinationCardCountry>РОССИЯ</DestinationCardCountry>
            </DestinationCardRoute>
            <DestinationCardDetails>
              <DestinationCardFindByPrice>
                Найти от 2 074 ₽
              </DestinationCardFindByPrice>
              <DestinationCardDate>13 марта</DestinationCardDate>
            </DestinationCardDetails>
          </DestinationCardDescription>
        </DestinationCard>
        <DestinationCard>
          <DestinationCardImg src={simferopol} width="309" height="176" />
          <DestinationCardDescription>
            <DestinationCardRoute>
              <DestinationCardTown>Симферополь</DestinationCardTown>
              <DestinationCardCountry>КРЫМ</DestinationCardCountry>
            </DestinationCardRoute>
            <DestinationCardDetails>
              <DestinationCardFindByPrice>
                Найти от 2 407 ₽
              </DestinationCardFindByPrice>
              <DestinationCardDate>13 марта</DestinationCardDate>
            </DestinationCardDetails>
          </DestinationCardDescription>
        </DestinationCard>
        <DestinationCard>
          <DestinationCardImg src={barcelona} width="309" height="176" />
          <DestinationCardDescription>
            <DestinationCardRoute>
              <DestinationCardTown>Барселона</DestinationCardTown>
              <DestinationCardCountry>ИСПАНИЯ</DestinationCardCountry>
            </DestinationCardRoute>
            <DestinationCardDetails>
              <DestinationCardFindByPrice>
                Найти от 4 247 ₽
              </DestinationCardFindByPrice>
              <DestinationCardDate>24 марта</DestinationCardDate>
            </DestinationCardDetails>
          </DestinationCardDescription>
        </DestinationCard>
      </DestinationCardWrapper>
    </TopDestionations>
  );
}
