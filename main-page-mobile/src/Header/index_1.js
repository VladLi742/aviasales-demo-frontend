import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Header = styled.header`
  padding-left: 8px;
  padding-top: 12px;
  position: absolute;
  top: 0;
`;

export default () => {
  return (
    <Header>
      <img src={logo} alt="logo" />
    </Header>
  );
};
