import React from "react";
import styled from "styled-components";

const Proposals = styled.section`
  display: none;
  flex-direction: column;
  margin-top: 24px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Proposal = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Service = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #59bce5;
`;

const Cost = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-align: right;
  color: #59bce5;
`;

const Others = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #59bce5;
  margin-top: 9px;
`;

export default function SetProposal(props) {
  if (props.services) {
    return (
      <Proposals>
        <Proposal>
          <Service>{props.services[0]}</Service>
          <Cost>{props.costs[0]}</Cost>
        </Proposal>
        <Proposal>
          <Service>{props.services[1]}</Service>
          <Cost>{props.costs[1]}</Cost>
        </Proposal>
        <Others>+ Ещё {props.others}</Others>
      </Proposals>
    );
  }

  return false;
}
