import React from "react";
import styled from "styled-components";

const LuggagePicker = styled.section`
  display: none;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 10px;
    width: 100%;
  }
`;

const Luggages = styled.section`
  display: none;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    padding: 10px 17px 10px;
    width: 100%;
    border-right: ${props => (props.first ? "1px #dede solid" : "0")};
    border-bottom: ${props => (props.first ? "1px #dede solid" : "0")};
  }
`;

const LuggageWrapper = styled.section`
  display: flex;
  align-self: center;
  position: relative;

  & > :nth-child(4) {
    right: 3px;
  }
`;

const Luggage = styled.img`
  width: ${props => (props.hand ? "17px" : "19px")};
  height: ${props => (props.hand ? "23px" : "20px")};

  &:first-child {
    margin-right: 4px;
  }
`;

const NumberOfKgs = styled.span`
  width: 12px;
  height: 12px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 10px;
  text-align: center;
  letter-spacing: -0.4px;
  color: #9ab0b9;
  position: absolute;
  top: 6px;
  right: 25px;
`;

const Price = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: ${props => (props.active ? "500" : "normal")};
  line-height: 15px;
  font-size: 10px;
  text-align: center;
  color: ${props => (props.active ? "#66D295" : "#9ab0b9")};
  margin-top: 5px;
`;

function Baggage(props) {
  const { icon, kilograms, handIcon, handKilograms } = props.luggage[0];

  return (
    <LuggageWrapper>
      <Luggage src={icon} />
      <NumberOfKgs>{kilograms}</NumberOfKgs>
      <Luggage src={handIcon} hand />
      <NumberOfKgs>{handKilograms}</NumberOfKgs>
    </LuggageWrapper>
  );
}

export default function SetLuggage(props) {
  const { luggage } = props;

  if (luggage.length === 1) {
    return (
      <Luggages>
        <Baggage luggage={props.luggage} />
      </Luggages>
    );
  } else {
    return (
      <LuggagePicker>
        <Luggages first>
          <LuggageWrapper>
            <Luggage src={luggage[0].icon} />
            <NumberOfKgs>{luggage[0].kilograms}</NumberOfKgs>
            <Luggage src={luggage[0].handIcon} hand />
            <NumberOfKgs>{luggage[0].handKilograms}</NumberOfKgs>
          </LuggageWrapper>
          <Price>{luggage[0].cost}</Price>
        </Luggages>
        <Luggages>
          <LuggageWrapper>
            <Luggage src={luggage[1].icon} />
            <NumberOfKgs>{luggage[1].kilograms}</NumberOfKgs>
            <Luggage src={luggage[1].handIcon} hand />
            <NumberOfKgs>{luggage[1].handKilograms}</NumberOfKgs>
          </LuggageWrapper>
          <Price active>{luggage[1].cost}</Price>
        </Luggages>
      </LuggagePicker>
    );
  }

  return false;
}
