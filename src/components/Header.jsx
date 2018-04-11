import React from 'react';
import logo from '../logo.svg';

import styled from 'styled-components';
import '../css/Header.css';

const Wrapper = styled.div`
  background-color: #568135;
  padding-top: 25px;
`;
const HeaderTag = styled.header`
  background-color: #67963f;
  height: 110px;
  padding: 20px;
  color: white;
  text-align: center;
`;

const Header = () => (
  <Wrapper>
    <HeaderTag>
      <img src={logo} className="Header-logo" alt="logo" />
    </HeaderTag>
  </Wrapper>
);

export default Header;
