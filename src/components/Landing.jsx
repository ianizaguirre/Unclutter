import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Header from './Header';
// import { Link } from 'react-router-dom';
// import '../css/Landing.css';

const Wrapper = styled.div`
  background-color: #fafafa;
`;

const Column = styled.div`
  width: 33.3%;
  /* min-height: 100vh; */
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: ${props => (props.primary ? '50%' : '15%')};
  }

  @media (max-width: 750px) {
    width: ${props => (props.primary ? '100%' : '0')};
  }
`;

const MiddleColumn = Column.extend`
  min-height: 100vh;
  border-left: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  background-color: #ffffff;

  @media (max-width: 750px) {
    min-height: 80vh;
  }
`;

const Gutter = styled.div`
  width: 90%;
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
  /* margin-top: 3.5rem; */
`;

// =================================================================

const Intro = styled.div`
  font-size: 16px;
  line-height: 1.4;

  padding-top: 3.5rem;
  margin-bottom: 3.5rem;

  @media (max-width: 750px) {
    font-size: 16px;
  }
`;

const Form = styled.form`
  padding-top: 1px;
`;

const Input = styled.input`
  font-size: 14px;
  color: #535a5b;
  min-width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  overflow: hidden;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.08);
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;

  &:focus {
    outline: none;
  }

  @media (max-width: 750px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  color: #ffffff;
  background-color: #359010;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  border: 1px solid;
  border-radius: 3px;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 1px;
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.8;
  }
`;
// =================================================================

const AuthorWrap = styled.div`
  /* font-size: 16px; */
  line-height: 1.4;

  margin-top: 3.5rem;

  border-color: #e1e1e1;
  border-top-style: solid;
  border-width: 1px;

  @media (max-width: 750px) {
    /* font-size: 16px; */
  }
`;

const Title = styled.h3`
  font-size: 21px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: 'Open Sans', sans-serif;

  font-weight: 400;
  letter-spacing: 1px;

  @media (max-width: 750px) {
    /* text-align: center; */
    font-size: 25px;
  }
`;

const OutsideLink = styled.a`
  color: #4ccff9;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;

  font-weight: 400;
  letter-spacing: 1px;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  @media (max-width: 750px) {
    /* text-align: center; */
    font-size: 16px;
  }
`;

class Landing extends Component {
  myInput = React.createRef();

  goToMainApp = event => {
    event.preventDefault();
    const sessionIdName = this.myInput.value.value;
    this.props.history.push(`/app/${sessionIdName}`);
  };

  render() {
    return (
      <Fragment>
        <Header />

        <Wrapper>
          <Column />

          <MiddleColumn primary>
            <Gutter>
              <Intro>
                To start this application, enter a unique session name below. This session name is how you can return
                back to your same dashboard at a later time.
              </Intro>
              <Form onSubmit={this.goToMainApp}>
                <Input
                  required
                  type="text"
                  innerRef={this.myInput}
                  placeholder="Enter Session Name"
                  autocorrect="off"
                  autocapitalize="none"
                />
                <Button type="submit"> Visit Application → </Button>
              </Form>
              <AuthorWrap>
                <Title>Project Details</Title>
                <OutsideLink href="https://github.com/ianizaguirre/Unclutter">Visit GitHub Repository →</OutsideLink>
              </AuthorWrap>
            </Gutter>
          </MiddleColumn>
          <Column />
        </Wrapper>
      </Fragment>
    );
  }
}

export default Landing;
