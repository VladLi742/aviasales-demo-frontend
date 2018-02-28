import React from "react";
import styled from "styled-components";

import pin from "./images/pin.svg";
import planeFlies from "./images/plane-flies.svg";
import planeLands from "./images/plane-lands.svg";

export const Details = styled.section`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    margin-top: 12px;
  }
`;

const Pin = styled.span`
  width: 20px;
  height: 20px;
  background: url(${pin}) no-repeat center;
  border: none;
  margin-right: 8px;
`;

const DetailWrapper = styled.section`
  display: flex;
  flex-direction: column;

  & > :first-child {
    margin-bottom: 30px;
  }
`;

const Detail = styled.section`
  display: flex;
  flex-direction: row;
`;

const Title = styled.section`
  display: flex;
  align-items: baseline;
`;

const Time = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 40px;
  font-size: 28px;
  color: #323333;
`;

const Description = styled.section`
  display: flex;
  flex-direction: column;
`;

const Town = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
`;

const Date = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
`;

const RouteWrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  margin: 0 30px;
  color: #a0b0b9;
  position: relative;
`;

const Route = styled.div`
  display: flex;
  justify-content: space-between;
  width: 245px;
`;

const Stops = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const First = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 10px;
  color: #4a4a4a;
`;

const Point = styled.span`
  display: block;
  width: 11px;
  height: 11px;
  background: #ffffff;
  border: 1px solid #a0b0b9;
  box-sizing: border-box;
  border-radius: 50px;
  margin-bottom: 15px;
`;

const Second = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 10px;
  color: #4a4a4a;
`;

const Line = styled.span`
  width: 205px;
  display: block;
  height: 1px;
  position: relative;
  top: 19px;
  left: 20px;
  background: #a9b4b9;
`;

const Stop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Departure = styled.section``;

const Arrival = styled.section`
  text-align: right;
`;

export function SetAdditionalInfo(props) {
  const { departure, arrival } = props.ticket;

  return (
    <DetailWrapper>
      <Detail>
        <Departure>
          <Title>
            <Pin />
            <Time>{departure.startTime}</Time>
          </Title>
          <Description>
            <Town>{departure.town}</Town>
            <Date>{departure.date}</Date>
          </Description>
        </Departure>
        <RouteWrapper>
          <Route>
            <img src={planeFlies} />Всего: {departure.totalTime}
            <img src={planeLands} />
          </Route>
          <Line />
          <Stops>
            <Stop>
              <Point />
              <First>{departure.stops[0]}</First>
            </Stop>
            <Stop>
              <Point />
              <Second>{departure.stops[1]}</Second>
            </Stop>
          </Stops>
        </RouteWrapper>
        <Arrival>
          <Time>{departure.endTime}</Time>
          <Description>
            <Town>{arrival.town}</Town>
            <Date>{arrival.date}</Date>
          </Description>
        </Arrival>
      </Detail>
      <Detail>
        <Departure>
          <Title>
            <Pin />
            <Time>{arrival.startTime}</Time>
          </Title>
          <Description>
            <Town>{arrival.town}</Town>
            <Date>{arrival.date}</Date>
          </Description>
        </Departure>
        <RouteWrapper>
          <Route>
            <img src={planeFlies} />Всего: {arrival.totalTime}
            <img src={planeLands} />
          </Route>{" "}
          <Line />
          <Stops>
            <Stop>
              <Point />
              <First>{arrival.stops[0]}</First>
            </Stop>
            <Stop>
              <Point />
              <Second>{arrival.stops[1]}</Second>
            </Stop>
          </Stops>
        </RouteWrapper>
        <Arrival>
          <Time>{arrival.endTime}</Time>
          <Description>
            <Town>{arrival.town}</Town>
            <Date>{arrival.date}</Date>
          </Description>
        </Arrival>
      </Detail>
    </DetailWrapper>
  );
}
