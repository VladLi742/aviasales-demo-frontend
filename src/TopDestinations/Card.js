import React from "react";
import styled from "styled-components";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";

import cardList from "./card-list";

const Card = styled.section`
  width: 308px;
  min-height: 126px;
  margin-top: 10px;
  box-shadow: 0 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;

  & > :first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    min-width: 624px;
    min-height: 293px;
  }
`;

const Cards = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 72px;
  }
`;

const Image = styled.img`
  border-style: none;

  @media (max-width: 320px) {
    max-width: 308px;
    height: 126px;
  }
`;

const Route = styled.section`
  display: inline-grid;
  min-width: 150px;
  height: 50px;
  margin: 16px 0 36px 16px;
`;

const Details = styled.section`
  display: inline-grid;
  min-width: 118px;
  height: 20px;
  margin: 18px 16px 37px 0;
`;

const Town = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  text-align: left;
  color: #5b5b5c;

  @media (min-width: 768px) and (max-width: 992px) {
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

const FindByPrice = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: regular;
  line-height: 16px;
  text-align: Right;
  color: #00bae8;

  @media (min-width: 768px) and (max-width: 992px) {
    line-height: 32px;
    font-size: 22px;
  }
`;

const Departure = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  text-align: right;
  color: #a0b0b9;
`;

export default function() {
  return (
    <Cards>
      {cardList.map(card => {
        return (
          <Card key={card.id}>
            <Row>
              <Col xs={12}>
                <Image src={card.pic} />
                <Description>
                  <Route>
                    <Town>{card.town}</Town>
                    <Country>{card.country}</Country>
                  </Route>
                  <Details>
                    <FindByPrice>Найти от {card.price}</FindByPrice>
                    <Departure>{card.date}</Departure>
                  </Details>
                </Description>
              </Col>
            </Row>
          </Card>
        );
      })}
    </Cards>
  );
}
