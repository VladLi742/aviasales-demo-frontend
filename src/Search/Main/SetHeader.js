import React from "react";
import styled from "styled-components";

import emodjiCheap from "./images/emoji-cheap.png";
import emodjiFast from "./images/emoji-fast.png";
import emodjiBest from "./images/emoji-best.png";

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

function ChangeHeader(props) {
  if (props.type === "1") {
    return (
      <HeaderCheap>
        <Title>Самый дешевый</Title>
        <Emoji src={emodjiCheap} />
      </HeaderCheap>
    );
  } else if (props.type === "2") {
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

export default function SetHeader(props) {
  if (props.type) {
    return <ChangeHeader type={props.type} />;
  }

  return false;
}
