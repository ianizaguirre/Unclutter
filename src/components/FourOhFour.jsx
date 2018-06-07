import React, { Fragment } from 'react';
import Header from '../components/Header';

import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;
const Title = styled.h1`
  font-size: 47px;
  margin-top: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;

  /* @media (max-width: 750px) {
    text-align: center;
  } */
`;

const SubHeading = styled.span`
  font-size: 49px;
`;

const FourOhFour = () => (
  <Fragment>
    <Header />
    <Wrapper>
      <Title> 404 Page </Title>
      <SubHeading role="img"> 👻 </SubHeading>
    </Wrapper>
  </Fragment>
);

export default FourOhFour;
