import React from "react";

import styled from "styled-components";

import arrow from "./images/arrow.png";

import aeroflot from "./images/aeroflot.jpg";
import airlines from "./images/airlines.jpg";
import oneTwoTrip from "./images/one-two-trip.jpg";
import koreanAir from "./images/korean-air.jpg";
import undefinedCompany from "./images/undefined-company.jpg";

import Subscription from "./Subscription";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  margin-bottom: 30px;
`;

const Slide = styled.section`
  display: none;
  background: #fff;
  flex-direction: column;
  position: relative;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;
  color: #5c5c5c;
`;

const Companies = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  width: 75%;

  @media (min-width: 992px) {
    width: 100%;
  }
`;

const Company = styled.picture`
  width: 149px;
  height: 50px;
  margin-right: 20px;

  @media (min-width: 992px) {
    margin-right: 10px;
  }
`;

const Dots = styled.section`
  display: flex;
  margin-top: 30px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #818181;
  border-radius: 50px;
  background: white;
  cursor: pointer;

  &:nth-child(2) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const ActiveDot = Dot.extend`
  background: #818181;
`;

const Arrow = styled.picture`
  display: none;
  width: 18px;
  height: 32px;
  background: url(${arrow}) no-repeat center;
  position: absolute;
  cursor: pointer;

  @media (min-width: 768px) {
    display: block;
  }
`;

const PrevSlide = Arrow.extend`
  top: 50%;
  left: 5%;
  z-index: 1;

  @media (min-width: 992px) {
    left: 20%;
  }
`;

const NextSlide = Arrow.extend`
  transition: rotate(180deg);
  transform: rotate(180deg);
  top: 50%;
  right: 10%;

  @media (min-width: 992px) {
    right: 20%;
  }
`;

export default function() {
  return (
    <div>
      <Wrapper>
        <PrevSlide />
        <Slide>
          <Title>
            Дешевые авиабилеты от крупнейших авиакомпаний и агентств
          </Title>
          <Companies>
            <Company>
              <img srcSet={aeroflot} />
            </Company>
            <Company>
              <img srcSet={airlines} />
            </Company>
            <Company>
              <img srcSet={oneTwoTrip} />
            </Company>
            <Company>
              <img srcSet={koreanAir} />
            </Company>
            <Company>
              <img srcSet={undefinedCompany} />
            </Company>
          </Companies>
          <Dots>
            <ActiveDot />
            <Dot />
            <Dot />
          </Dots>
        </Slide>
        <NextSlide />
      </Wrapper>
      <Subscription />
    </div>
  );
}
