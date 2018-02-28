import React from "react";
import styled from "styled-components";

import plane from "./images/plane.svg";
import clock from "./images/clock.png";

const Details = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media (min-width: 768px) {
    display: none;
  }
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

export default function SetDetails(props) {
  const { departure, arrival } = props.ticket;

  return (
    <Details>
      <Departure>
        <Time>
          <PeriodTime>
            {departure.startTime} — {departure.endTime}
          </PeriodTime>
          <TotalTime>{departure.totalTime}</TotalTime>
        </Time>
        <Type>{departure.type}</Type>
      </Departure>
      <Arrival>
        <Time>
          <PeriodTime>
            {departure.startTime} — {departure.endTime}
          </PeriodTime>
          <TotalTime>{arrival.totalTime}</TotalTime>
        </Time>
        <Type>{arrival.type}</Type>
      </Arrival>
    </Details>
  );
}
