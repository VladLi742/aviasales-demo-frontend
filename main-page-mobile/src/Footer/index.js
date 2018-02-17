import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import Links from "./Links";
import AdditionalInfo from "./AdditionalInfo";
import styled from "styled-components";
const Copyright = styled.span`
  display: block;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  margin-top: 25px;
  color: #5b5b5c;
  margin-bottom: 20px;
`;
export default function() {
  return (
    <div className="App">
      <Links />
      <AdditionalInfo />
      <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
    </div>
  );
}
