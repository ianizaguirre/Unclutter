import React from 'react';
// import logo from '../logo.svg';
import '../css/Header.css';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: #568135;
  padding-top: 25px;
`;
const HeaderTag = styled.header`
  background-color: #67963f;
  height: 110px;
  font-size: 42px;
  letter-spacing: 2px;
  padding-top: 25px;
  font-weight: 500;
  text-align: center;
  font-family: 'Oswald', sans-serif;

  @media (max-width: 750px) {
    font-size: 36px;
    padding-top: 30px;
  }
`;

/* <li>
  <Link to="/">React</Link>
</li> */

/* <img src={logo} className="Header-logo" alt="logo" /> */

const Header = () => (
  <Wrapper>
    <HeaderTag>
      <Link className="logo-link" to="/">
        Unclutter
      </Link>
    </HeaderTag>
  </Wrapper>
);

export default Header;
