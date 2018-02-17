import React from "react";
import styled from "styled-components";

import flagRu from "./images/flag-ru.png";
import flagAm from "./images/flag-am.png";
import flagMd from "./images/flag-md.png";

import simferopolList from "./simferopol-list";
import yerevanList from "./yerevan-list";
import kishinevList from "./kishinev-list";

const Directions = styled.section`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  padding: 6px;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    width: 90%;
  }
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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
`;

const From = styled.span`
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: Regular;
  line-height: 20px;
  text-align: left;
  justify-content: left;

  &:hover {
    color: #ff8b00;
  }
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
  cursor: pointer;

  &:hover {
    background-color: #f1fcff;

    ${From} {
      color: #ff8b00;
      text-decoration: underline;
    }
  }
`;

const Places = styled.section`
  width: 100%;
`;

const Direction = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 992px) {
    width: 300px;
    margin-right: 45px;
  }
`;

export default function() {
  return (
    <Directions>
      <Direction>
        <Town>
          <img src={flagRu} alt="Симферополь (Крым)" />Симферополь (Крым)<Country
          >
            КРЫМ
          </Country>
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
      </Direction>
      <Direction>
        <Town>
          <img src={flagAm} alt="Ереван (Армения)" />Ереван<Country>
            АРМЕНИЯ
          </Country>
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
      </Direction>
      <Direction>
        <Town>
          <img src={flagMd} alt="Кишинёв (Молдавия)" />Кишинёв<Country>
            МОЛДАВИЯ
          </Country>
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
    </Directions>
  );
}
