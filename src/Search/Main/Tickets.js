import React from "react";
import styled from "styled-components";

import list from "./list";

import ticketOpener from "./images/ticket-opener.svg";
import share from "./images/share.svg";

import { Details, SetAdditionalInfo } from "./AdditionalInfo";
import SetLuggage from "./SetLuggage";
import SetProposal from "./SetProposal";
import SetDetails from "./SetDetails";
import SetHeader from "./SetHeader";
import SetLogo from "./SetLogo";
import SetAlert from "./SetAlert";

const Ticket = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: unset;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  padding: 12px 6px 14px;
  background: #ffffff;

  @media (min-width: 768px) {
    margin-bottom: 20px;
    padding: 0;
    flex-direction: unset;
  }
`;

const FirstLine = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    justify-content: baseline;
    margin: 0;
  }
`;

const LeftSide = styled.section`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
    flex-direction: column;
    border-right: 1px #ddd solid;
  }
`;

const RightSide = styled.section`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 16px 0 24px 16px;
    flex-direction: column;
  }
`;

const Purchase = styled.section`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media (min-width: 768px) {
    visibility: visible;
    padding: 5px 23px 0 23px;
  }
`;

const Price = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  color: #ff9241;

  @media (min-width: 768px) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    font-size: 16px;
    color: #ffffff;

    &::before {
      content: "за";
      display: inline;
      width: 17px;
      height: 18px;
      margin-right: 4px;
    }
  }
`;

const Buy = styled.button`
  visibility: hidden;
  font-family: Roboto;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  background: #ff6d00;
  border-radius: 4px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  cursor: pointer;

  & > ${Price} {
    visibility: visible;
  }

  &:hover {
    background-color: #faa760;
  }

  @media (min-width: 768px) {
    visibility: visible;
    font-weight: 500;
    line-height: 18px;
    font-size: 16px;
    padding: 4px 45px;
    margin-bottom: 8px;

    &::before {
      content: "Купить";
      display: inline;
    }
  }
`;

const WhereToBuy = styled.span`
  display: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;

  @media (min-width: 768px) {
    display: inline;
  }
`;

const CompanyWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Charter = styled.button`
  display: none;
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #2196f3;
  border-radius: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 10px;
  color: #23a9f6;
  padding: 4px 11px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const ShareWrapper = styled.div`
  display: flex;
  align-items: center;

  & > :first-child {
    margin-right: 14px;
  }
`;

const Share = styled.img`
  display: none;
  width: 17px;
  height: 14px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const TicketOpener = styled.div`
  display: none;
  background: url(${ticketOpener}) no-repeat center;
  background-color: #edf5f7;
  padding-left: 7px;
  padding-right: 7px;
  align-items: center;
  margin-left: 15px;

  @media (min-width: 768px) {
    display: block;
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
    width: 100%;
    margin-bottom: 40px;
  }
`;

const Tickets = styled.section``;

function SetCharter(props) {
  if (props.has === true) {
    return <Charter>Чартер</Charter>;
  }

  return false;
}

export default function() {
  return (
    <Tickets>
      {list.map((ticket, index) => {
        return (
          <Ticket key={index}>
            <SetHeader type={ticket.type} />
            <Content>
              <FirstLine>
                <LeftSide>
                  <SetLuggage luggage={ticket.luggage} />
                  <SetAlert remained={ticket.remained} />
                  <Purchase>
                    <Buy>
                      <Price>{ticket.price}</Price>
                    </Buy>
                    <WhereToBuy>{ticket.whereToBuy}</WhereToBuy>
                    <SetProposal
                      services={ticket.services}
                      costs={ticket.costs}
                      others={ticket.others}
                    />
                  </Purchase>
                </LeftSide>
                <RightSide>
                  <CompanyWrapper>
                    <SetLogo logo={ticket.logos} />
                    <ShareWrapper>
                      <SetCharter has={ticket.hasCharter} />
                      <Share src={share} />
                    </ShareWrapper>
                  </CompanyWrapper>
                  <Details>
                    <SetAdditionalInfo ticket={ticket} />
                  </Details>
                </RightSide>
                <TicketOpener />
              </FirstLine>
              <SetDetails ticket={ticket} />
            </Content>
          </Ticket>
        );
      })}
      <ShowMoreTicket>Показать еще 10 билетов!</ShowMoreTicket>
    </Tickets>
  );
}
