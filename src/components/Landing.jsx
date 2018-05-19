import React, { Component, Fragment } from 'react';

import '../css/Landing.css';
import Header from './Header';

class Landing extends Component {
  myInput = React.createRef();

  goToMainApp = event => {
    event.preventDefault();
    const sessionIdName = this.myInput.current.value;
    this.props.history.push(`/app/${sessionIdName}`);
  };

  render() {
    return (
      <Fragment>
        <Header />

        <form onSubmit={this.goToMainApp}>
          <h2>This is The Landing Page, Would You Like To Enter The Application?</h2>
          <input required type="text" ref={this.myInput} placeholder="Session Name" />
          <button type="submit"> Visit Application → </button>
        </form>
      </Fragment>
    );
  }
}

export default Landing;
