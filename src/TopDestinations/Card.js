import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

import cardList from "./card-list";

const Card = styled.section`
  min-height: 126px;
  margin-top: 10px;
  box-shadow: 0 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  cursor: pointer;

  & > :first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  @media (min-width: 992px) {
    margin-right: 15px;
    margin: 0 7.5px 30px;
  }

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(91, 137, 163, 0.2);
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
