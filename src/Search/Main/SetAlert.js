import React from "react";
import styled from "styled-components";

const Alert = styled.span`
  display: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #ff654e;

  @media (min-width: 768px) {
    display: inline;
  }
`;

export default function SetAlert(props) {
  if (props.remained) {
    return <Alert>Осталось {props.remained}</Alert>;
  }

  return false;
}
