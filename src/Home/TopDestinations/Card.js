import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

import krasnodar from "./images/krasnodar-sm.jpg";
import sochiAdler from "./images/sochi-adler-sm.jpg";
import petersburg from "./images/petersburg-sm.jpg";
import mineralWaters from "./images/mineral-waters-sm.jpg";
import simferopol from "./images/simferopol-sm.jpg";
import barcelona from "./images/barcelona-sm.jpg";

const FindByPrice = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: regular;
  line-height: 16px;
  text-align: Right;
  color: #00bae8;

  @media (min-width: 992px) {
    line-height: 32px;
    font-size: 22px;
  }
`;

const Card = styled.section`
  min-height: 126px;
  margin-top: 10px;
  box-shadow: 0 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(91, 137, 163, 0.2);
  }

  &:hover ${FindByPrice} {
    color: #ff8b00;
  }

  & > :first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  @media (min-width: 992px) {
    margin-right: 15px;
    margin: 0 7.5px 30px;
  }
`;

const Cards = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    margin: 0 200px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  border-style: none;
  width: 100%;
  min-height: 126px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Route = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 150px;
  height: 50px;
  margin: 12px;
`;

const Details = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 118px;
  height: 20px;
  margin: 12px;
`;

const Town = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  text-align: left;
  color: #5b5b5c;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (min-width: 992px) {
    line-height: 32px;
    font-size: 22px;
  }
`;

const Country = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  text-align: left;
  color: #a0b0b9;
`;

const Departure = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  text-align: right;
  color: #a0b0b9;
`;

function Destionation(props) {
  return (
    <Card>
      <Row>
        <Col xs={12}>
          <Image src={props.pic} />
          <Description>
            <Route>
              <Town>{props.town}</Town>
              <Country>{props.country}</Country>
            </Route>
            <Details>
              <FindByPrice>Найти от {props.price}</FindByPrice>
              <Departure>{props.date}</Departure>
            </Details>
          </Description>
        </Col>
      </Row>
    </Card>
  );
}

export default function() {
  return (
    <Cards>
      <Destionation
        pic={krasnodar}
        town="Краснодар"
        country="Россия"
        price="1 212 ₽"
        date="18 марта"
      />
      <Destionation
        pic={sochiAdler}
        town="Сочи (Адлер)"
        country="Россия"
        price="1 334 ₽"
        date="27 марта"
      />
      <Destionation
        pic={petersburg}
        town="Санкт-Петербург"
        country="Россия"
        price="1 508 ₽"
        date="19 февраля"
      />
      <Destionation
        pic={mineralWaters}
        town="Минеральные Воды"
        country="Россия"
        price="2 074 ₽"
        date="13 марта"
      />
      <Destionation
        pic={simferopol}
        town="Симферополь (Крым)"
        country="КРЫМ"
        price="2 407 ₽"
        date="13 марта"
      />
      <Destionation
        pic={barcelona}
        town="Барселона"
        country="ИСПАНИЯ"
        price="4 247 ₽"
        date="24 марта"
      />
    </Cards>
  );
}
