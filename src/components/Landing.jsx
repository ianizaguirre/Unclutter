import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

// import '../css/Landing.css';
import Header from './Header';

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

  @media (max-width: 750px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  color: #ffffff;
  background-color: #359010;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  border: 2px solid;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.8;
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
                To enter this application, enter a unique session name below. This session name is how you can return
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
            </Gutter>
          </MiddleColumn>
          <Column />
        </Wrapper>
      </Fragment>
    );
  }
}

export default Landing;
