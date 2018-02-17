import React, { Component } from "react";

import styled from "styled-components";
import Subscription from "./Subscription";

import arrow from "./images/arrow.png";

import aeroflot from "./images/aeroflot.jpg";
import airlines from "./images/airlines.jpg";
import oneTwoTrip from "./images/one-two-trip.jpg";
import koreanAir from "./images/korean-air.jpg";
import undefinedCompany from "./images/undefined-company.jpg";

const Slide = styled.section`
  display: none;
  background: #fff;
  flex-direction: column;
  position: relative;

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
`;

const Company = styled.picture`
  width: 149px;
  height: 50px;
`;

const Dots = styled.section``;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
`;

const Arrow = styled.picture`
  width: 18px;
  height: 32px;
  background: url(${arrow}) no-repeat center;
  position: absolute;
  top: 50%;
  left: 2%;
`;

export default function() {
  return (
    <Slide>
      <Arrow />
      <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
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
        <Dot />
        <Dot />
        <Dot />
      </Dots>
      <Arrow />
      <Subscription />
    </Slide>
  );
}
