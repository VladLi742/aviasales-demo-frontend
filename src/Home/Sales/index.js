import React from "react";
import styled from "styled-components";

import list from "./list";

const Body = styled.section`
  background: linear-gradient(to right, #00b0de 0%, #196ebd 100%);
  color: #000;
  padding-top: 5px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding: 5px 10px 20px;
  }

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 165px 30px;
  }
`;

const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 42px;
  font-size: 30px;
  color: #fff;
  padding-left: 7px;
  display: flex;
  align-self: baseline;

  @media (min-width: 768px) {
    line-height: 42px;
    padding-left: 0;
  }
`;

const Offer = styled.section`
  margin-bottom: 6px;

  @media (min-width: 768px) {
    min-width: 240px;

    &:nth-child(2) {
      margin-left: 15px;
      margin-right: 15px;
    }
  }

  @media (min-width: 992px) {
    max-width: 297px;
    max-height: 270px;

    &:nth-child(2) {
      margin-left: 70px;
      margin-right: 70px;
    }
  }
`;

const Offers = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    flex-wrap: nowrap;
    flex-direction: row;
  }

  @media (min-width: 992px) {
    justify-content: space-between;
    margin-bottom: 30px;
  }
`;

const Header = styled.section`
  background-color: #cd2027;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 15px 21px 16px;
  box-sizing: border-box;
  max-height: 63px;
`;

const Name = styled.span`
  font-family: Roboto;
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
  display: flex;
  flex-wrap: wrap;
  position: relative;

  @media (min-width: 768px) {
    max-height: 215px;
  }
`;

const CompanyLogo = styled.img`
  width: 100px;
  height: 25px;
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
  margin: 0 8px 20px;
  padding-top: 11px;
  padding-bottom: 11px;
  width: 100%;
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
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    padding: 0;
    justify-content: space-between;
  }
`;

const Content = styled.section`
  display: flex;
  margin-top: 20px;
  margin-left: 8px;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 15px;
  }
`;

const Wrapper = styled.section`
  @media (min-width: 992px) {
    min-width: 975px;
  }

  @media (min-width: 1200px) {
    min-width: 1100px;
  }
`;

export default function() {
  return (
    <Body>
      <Wrapper>
        <Title>Спецпредложения на авиабилеты</Title>
        <Offers>
          {list.map(offer => {
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
      </Wrapper>
    </Body>
  );
}
