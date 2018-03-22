import React, { Component, Fragment } from 'react';

import '../css/Landing.css';
import Header from './Header';

class Landing extends Component {
  goToMainApp = event => {
    event.preventDefault();
    this.props.history.push(`/app/`);
  };

  render() {
    return (
      <Fragment>
        <Header />

        <div className="Center-this">
          <form onSubmit={this.goToMainApp}>
            <h2>This is The Landing Page, Would You Like To Enter The Application?</h2>
            <button type="submit"> Visit Application → </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Landing;
