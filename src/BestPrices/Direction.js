import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

import flagRu from "./images/flag-ru.svg";
import flagAm from "./images/flag-am.svg";
import flagMd from "./images/flag-md.svg";

import simferopolList from "./simferopol-list";
import yerevanList from "./yerevan-list";
import kishinevList from "./kishinev-list";

const Direction = styled.section`
  min-height: 130px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  padding: 6px;
  flex-wrap: wrap;
  @media (min-width: 768px) and (max-width: 992px) {
    width: 90%;
  }
`;

const Flag = styled.img`
  width: 30px;
  height: 30px;
  position: relative;
  top: 15px;
`;

const Town = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;
  color: #5b5b5c;
  margin-top: 20px;
  height: 60px;
  margin-right: auto;
`;

const Country = styled.span`
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
  justify-content: left;
  position: relative;
  left: 30px;
`;

const From = styled.span`
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: Regular;
  line-height: 20px;
  text-align: left;
  justify-content: left;
`;

const Price = styled.span`
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: Regular;
  line-height: 20px;
  color: #00bae8;
  text-align: left;
`;

const Place = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const Places = styled.section`
  width: 100%;
`;

export default function() {
  return (
    <Direction>
      <Town>
        <Flag src={flagRu} />Симферополь (Крым)<Country>КРЫМ</Country>
      </Town>
      <Places>
        {simferopolList.map(place => {
          return (
            <Place key={place.id}>
              <From>Из {place.town}</From>
              <Price>От {place.price}</Price>
            </Place>
          );
        })}
      </Places>
      <Town>
        <Flag src={flagAm} />Ереван<Country>АРМЕНИЯ</Country>
      </Town>
      <Places>
        {yerevanList.map(place => {
          return (
            <Place key={place.id}>
              <From>Из {place.town}</From>
              <Price>От {place.price}</Price>
            </Place>
          );
        })}
      </Places>
      <Town>
        <Flag src={flagMd} />Кишинёв<Country>МОЛДАВИЯ</Country>
      </Town>
      <Places>
        {kishinevList.map(place => {
          return (
            <Place key={place.id}>
              <From>Из {place.town}</From>
              <Price>От {place.price}</Price>
            </Place>
          );
        })}
      </Places>
    </Direction>
  );
}
