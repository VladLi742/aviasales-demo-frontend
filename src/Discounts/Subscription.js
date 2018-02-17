import React, { Component } from "react";

import styled from "styled-components";

import topLine from "./images/top-line.jpg";

const TopLine = styled.picture`
  width: 100%;
  height: 7px;
`;

const Wrapper = styled.section`
  display: flex;
`;

const Title = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
`;

const Description = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
`;

export default function() {
  return (
    <Wrapper>
      <topLine>
        <img srcSet={topLine} />
      </topLine>
      <Title>Хотите знать всё о скидках на авиабилеты?</Title>
      <Description>
        Вы можете подписаться на нашу рассылку через соцсети или по электронной
        почте.
      </Description>
    </Wrapper>
  );
}
