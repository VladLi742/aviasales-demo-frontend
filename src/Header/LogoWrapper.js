import React from "react";
import styled from "styled-components";

import logo from "./images/logo.svg";

const LogoWrapper = styled.section`
  display: ${props => (props.search ? "none" : "flex")};
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Logo = styled.img`
  display: flex;
`;

const Title = styled.h1`
  display: none;
  margin-right: 12px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  font-size: 20px;
  color: #fff;
  margin-left: 10px;

  @media (min-width: 768px) {
    display: block;
  }
`;

export default function() {
  return (
    <LogoWrapper search>
      <Logo src={logo} alt="aviasales" width="30px;" height="29px;" />
      <Title>aviasales</Title>
    </LogoWrapper>
  );
}
