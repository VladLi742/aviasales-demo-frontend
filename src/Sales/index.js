import React from "react";
import styled from "styled-components";

import offerList from "./offer-list";

const Body = styled.section`
  background: linear-gradient(to right, #00b0de 0%, #196ebd 100%);
  color: #000;
  padding-top: 5px;
  padding-bottom: 20px;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 23% 30px;
  }
`;

const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  text-align: left;
  color: #fff;
  padding-left: 7px;
  display: flex;
  align-self: baseline;

  @media (min-width: 768px) {
    line-height: 42px;
  }
`;

const Offer = styled.section`
  text-align: left;
  margin-left: 6px;
  margin-right: 6px;
  margin-top: 10px;

  @media (min-width: 768px) {
    width: 240px;
  }

  @media (min-width: 992px) {
    width: 32%;
  }
`;

const Offers = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Header = styled.section`
  width: 100%;
  background-color: #cd2027;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 32px 21px 16px;
  box-sizing: border-box;
`;

const Name = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Main = styled.section`
  background-color: white;
  width: 100%;
  min-height: 240px;
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
`;

const AveragePriceInfo = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #fff;
`;

const Notes = styled.section`
  margin-top: 20px;
  padding: 7px;

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    padding: 0 12px;
    justify-content: space-between;
  }
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
        <Notes>
          <AllOffers href="#" title="Все спецпредложения авиакомпаний">
            Смотреть все спецпредложения
          </AllOffers>
          <AveragePriceInfo>* средняя цена по направлению</AveragePriceInfo>
        </Notes>
      </Offers>
    </Body>
  );
}
