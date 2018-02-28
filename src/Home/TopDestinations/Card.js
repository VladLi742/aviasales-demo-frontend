import React from "react";
import styled from "styled-components";

import flagRu from "./images/flag-ru.svg";
import flagSpain from "./images/flag-spain.jpg";

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

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    max-width: 624px;
    margin: 25px 8px 15px;
  }

  @media (min-width: 992px) {
    max-width: 512px;
    margin-top: 30px;
  }
`;

const Cards = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
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
  height: 50px;
  margin: 12px;
  margin-bottom: 0;
`;

const Details = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 20px;
  margin: 12px;
`;

const Town = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  text-align: left;
  color: #5b5b5c;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (min-width: 768px) {
    line-height: 32px;
    font-size: 22px;
  }
`;

const Country = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  text-align: left;
  color: #a0b0b9;
`;

const Departure = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  text-align: right;
  color: #a0b0b9;
`;

const Flag = styled.img`
  display: none;
  width: 30px;
  height: 30px;

  @media (min-width: 768px) {
    display: inline;
  }
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

function Destionation(props) {
  return (
    <Card>
      <Image src={props.pic} />
      <Description>
        <Wrapper>
          <Flag src={props.flag} />
          <Route>
            <Town>{props.town}</Town>
            <Country>{props.country}</Country>
          </Route>
        </Wrapper>
        <Details>
          <FindByPrice>Найти от {props.price}</FindByPrice>
          <Departure>{props.date}</Departure>
        </Details>
      </Description>
    </Card>
  );
}

export default function() {
  return (
    <Cards>
      <Destionation
        pic={krasnodar}
        flag={flagRu}
        town="Краснодар"
        country="Россия"
        price="1 212 ₽"
        date="18 марта"
      />
      <Destionation
        pic={sochiAdler}
        flag={flagRu}
        town="Сочи (Адлер)"
        country="Россия"
        price="1 334 ₽"
        date="27 марта"
      />
      <Destionation
        pic={petersburg}
        flag={flagRu}
        town="Санкт-Петербург"
        country="Россия"
        price="1 508 ₽"
        date="19 февраля"
      />
      <Destionation
        pic={mineralWaters}
        flag={flagRu}
        town="Минеральные Воды"
        country="Россия"
        price="2 074 ₽"
        date="13 марта"
      />
      <Destionation
        pic={simferopol}
        flag={flagRu}
        town="Симферополь (Крым)"
        country="КРЫМ"
        price="2 407 ₽"
        date="13 марта"
      />
      <Destionation
        pic={barcelona}
        flag={flagSpain}
        town="Барселона"
        country="ИСПАНИЯ"
        price="4 247 ₽"
        date="24 марта"
      />
    </Cards>
  );
}
