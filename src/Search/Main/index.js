import React from "react";
import styled from "styled-components";

import emodjiCheap from "./images/emoji-cheap.png";
import emodjiFast from "./images/emoji-fast.png";
import emodjiBest from "./images/emoji-best.png";

import plane from "./images/plane.svg";
import clock from "./images/clock.png";

import list from "./list";

import sort from "./images/sort.png";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  background: #eaeaea;
  padding-top: 8px;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    padding: 0 8px;
  }
`;

const Ticket = styled.section``;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  padding: 12px 6px 14px;
  background: #ffffff;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 7px 0 7px 6px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const HeaderCheap = Header.extend`
  background: #83d40b;
`;

const HeaderFast = Header.extend`
  background: #af7542;
`;

const HeaderBest = Header.extend`
  background: #c279d1;
`;

const Title = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: 18px;
  font-size: 14px;
  color: #ffffff;
`;

const Emoji = styled.img`
  width: 14px;
  height: 15px;
  margin-left: 8px;
`;

const FirstLine = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Price = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  color: #ff9241;
`;

const Company = styled.img`
  width: ${props => (props.logo ? "36px" : "99px")};
  height: 36px;
  border: ${props => (props.logo ? "1px #DDD solid" : "none")};
  margin-left: ${props => (props.logo ? "12px" : "0")};
  padding: ${props => (props.logo ? "4px" : "0")};
`;

const Details = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Departure = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Arrival = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Time = styled.section``;

const PeriodTime = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  color: #4a4a4a;
  margin-right: 17px;

  &::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 8px;
    background: url(${plane}) no-repeat center;
  }
`;

const TotalTime = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  color: #4a4a4a;

  &::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 8px;
    background: url(${clock}) no-repeat center;
  }
`;

const Type = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  text-align: right;
  color: #4a4a4a;
`;

const Companies = styled.section`
  display: flex;
`;

const ScrollTop = styled.button`
  margin: 8px auto 16px auto;
  border: none;
  padding: 6px 16px;
  background: #00ace2;
  mix-blend-mode: normal;
  opacity: 0.5;
  border-radius: 100px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Filter = styled.button`
  background: #00ace2;
  border-radius: 100px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  padding: 10px 0;
  margin: 15px 85px;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ShowMoreTicket = styled.button`
  display: none;
  background: #00acde;
  border-radius: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  padding-top: 18px;
  padding-bottom: 19px;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Sort = styled.button`
  display: none;
  padding: 17px 24px;
  border-radius: 10px;
  background: url(${sort}) no-repeat center;
  background-color: #23a9f6;
  margin: 16px auto;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: block;
  }
`;

function ChangeHeader(props) {
  if (props.type === "cheap") {
    return (
      <HeaderCheap>
        <Title>Самый дешевый</Title>
        <Emoji src={emodjiCheap} />
      </HeaderCheap>
    );
  } else if (props.type === "fast") {
    return (
      <HeaderFast>
        <Title>Самый быстрый</Title>
        <Emoji src={emodjiFast} />
      </HeaderFast>
    );
  } else {
    return (
      <HeaderBest>
        <Title>Лучший билет</Title>
        <Emoji src={emodjiBest} />
      </HeaderBest>
    );
  }
}

function SetHeader(props) {
  if (props.type) {
    return <ChangeHeader type={props.type} />;
  }

  return false;
}

function SetLogo(props) {
  const logo = props.logo;
  if (logo.length === 2) {
    return (
      <Companies>
        <Company src={props.logo[0]} logo />
        <Company src={props.logo[1]} logo />
      </Companies>
    );
  }

  return <Company src={props.logo} />;
}

export default function() {
  return (
    <Main>
      <Sort />

      <ScrollTop>Наверх</ScrollTop>
      {list.map((ticket, index) => {
        return (
          <Ticket key={index}>
            <SetHeader type={ticket.type} />
            <Content>
              <FirstLine>
                <Price>{ticket.price}</Price>
                <SetLogo logo={ticket.logos} />
              </FirstLine>
              <Details>
                <Departure>
                  <Time>
                    <PeriodTime>{ticket.departure.periodTime}</PeriodTime>
                    <TotalTime>{ticket.departure.totalTime}</TotalTime>
                  </Time>
                  <Type>{ticket.departure.type}</Type>
                </Departure>
                <Arrival>
                  <Time>
                    <PeriodTime>{ticket.arrival.periodTime}</PeriodTime>
                    <TotalTime>{ticket.arrival.totalTime}</TotalTime>
                  </Time>
                  <Type>{ticket.arrival.type}</Type>
                </Arrival>
              </Details>
            </Content>
          </Ticket>
        );
      })}
      <Filter>Фильтровать</Filter>

      <ShowMoreTicket>ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!</ShowMoreTicket>
    </Main>
  );
}
