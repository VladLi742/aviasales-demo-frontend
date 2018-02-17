import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

import offerList from "./offer-list";

const Body = styled.section`
  background: linear-gradient(to right, #00b0de 0%, #196ebd 100%);
  color: #000;
  padding: 6px;
  padding-top: 5px;
  padding-bottom: 20px;
`;

const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  text-align: left;
  color: #fff;
  padding-left: 6px;
  @media (min-width: 768px) and (max-width: 992px) {
    line-height: 42px;
  }
`;

const Offer = styled.section`
  min-height: 134px;
  text-align: left;
  margin-left: 6px;
  margin-right: 6px;
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  @media (min-width: 768px) and (max-width: 992px) {
    width: 45%;
  }
`;

const Offers = styled.section`
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
  }
`;

const Header = styled.section`
  width: 100%;
  background-color: #cd2027;
  min-height: 63px;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  color: #fff;
`;

const Main = styled.section`
  background-color: white;
  width: 100%;
  min-height: 207px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const CompanyLogo = styled.img`
  height: 30px;
`;

const PriceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
`;

const FromPrice = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-align: right;
  color: #5c5c5c;
  margin-right: 3px;
`;
const Price = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 20px;
  text-align: right;

  color: #5c5c5c;
`;

const RemainDays = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  font-size: 12px;
  text-align: right;
  margin-top: 10px;

  color: #d93633;
`;

const Description = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #242424;
  padding: 8px;

  & > ${Name} {
    display: block;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    font-size: 12px;

    color: #242424;
  }
`;

const ReadMore = styled.button`
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  margin: 22px 8px 20px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  color: #d93533;

  &:hover {
    color: #ff9d1b;
    border-color: #ff9d1b;
  }
`;

const AllOffers = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #fff;

  &:hover {
    color: #ff9d1b;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    text-align: left;
  }
`;

const AveragePriceInfo = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #fff;

  @media (min-width: 768px) and (max-width: 992px) {
    text-align: right;
  }
`;

const Notes = styled.section`
  margin-top: 20px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;
const Content = styled.section`
  display: flex;
  margin-top: 20px;
  margin-left: 8px;
`;

export default function() {
  return (
    <Body>
      <Title>Спецпредложения на авиабилеты</Title>
      <Offers>
        {offerList.map(offer => {
          return (
            <Offer key={offer.id}>
              <Header>
                <Name>{offer.name}</Name>
                <img src={offer.logo} />
              </Header>
              <Main>
                <Content>
                  <CompanyLogo src={offer.pic} />
                  <PriceWrapper>
                    <Price>
                      <FromPrice>от </FromPrice>
                      {offer.price}
                    </Price>
                    <RemainDays>Осталось {offer.days}</RemainDays>
                  </PriceWrapper>
                </Content>
                <Description>
                  <Name>{offer.name}</Name>
                  {offer.promoText}
                </Description>
                <ReadMore title={offer.name}>Узнать подробности</ReadMore>
              </Main>
            </Offer>
          );
        })}
      </Offers>
      <Notes>
        <AllOffers href="#" title="Все спецпредложения авиакомпаний">
          Смотреть все спецпредложения
        </AllOffers>
        <AveragePriceInfo>* средняя цена по направлению</AveragePriceInfo>
      </Notes>
    </Body>
  );
}
