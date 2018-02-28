import React from "react";
import styled from "styled-components";

const Companies = styled.section`
  display: flex;

  & > :first-child {
    margin-right: 12px;
  }
`;

const Company = styled.img`
  width: ${props => (props.logo ? "36px" : "99px")};
  height: 36px;
  border: ${props => (props.logo ? "1px #DDD solid" : "0")};
  padding: ${props => (props.logo ? "4px" : "0")};
`;

export default function SetLogo(props) {
  const logo = props.logo;
  if (logo.length === 2) {
    return (
      <Companies>
        <Company src={props.logo[0]} logo />
        <Company src={props.logo[1]} logo />
      </Companies>
    );
  }

  return <Company src={props.logo} />;
}
