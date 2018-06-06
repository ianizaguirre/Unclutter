import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import ellipsis from '../ellipsis-icon.png';

//==============================
const MenuIconWrap = styled.div`

  /* color: ${props => (props.cancel ? '#7d8485' : '#ffffff')}; */

  cursor: pointer;


  /* margin-right: 0.5em;
  padding: 0.25em 0.7em; */

  display: ${props => (props.buttonIsVisible ? 'inline-block' : 'none')};
`;
// ==========================
const MenuContents = styled.div`
  color: #7d8485;
  background-color: #ffffff;
  /* line-height: 20px; */

  border: 1px solid #e1e1e1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  /* top: 36%; */
  /* left: 63%; */
  /* margin-left: -17px; */
  margin-top: 27px;
  width: 112px;

  padding: 0.25em 0em;

  display: ${props => (props.isOpen ? 'none' : 'inline-block')};

  @media (max-width: 750px) {
    /* margin-left: auto;
    margin-top: auto;
    position: relative; */
    margin-top: ${props => (props.toolBoxOpen ? '-78px' : '-48px')};
    margin-left: -17px;
    /* top: 218px; */
    width: 85px;
  }
`;
//=========================
// ==========================
const EllipsisImg = styled.img`
  /* background-color: red; */
   width: 2em;
  /* font-size: 13px;
  line-height: 20px;
  font-weight: ${props => (props.cancel ? '400' : '500')};
  border: ${props => (props.cancel ? '2px solid transparent' : '2px solid')};
  border-radius: 4px; */
  cursor: pointer;

  /* position: absolute; */

  /* margin-right: 0.5em;
  padding: 0.25em 0.7em; */

  display: ${props => (props.isOpen ? 'none' : 'inline-block')};
`;

// ================================================

class ToggleMenu extends Component {
  state = {
    openMenu: true
  };

  handleToggleMenu = event => {
    event.preventDefault();
    // console.log('handleToggleMenu ===> has been CLICKED');
    // console.log(this.props.isAvailable);

    const isOpen = !this.state.openMenu ? true : false;
    // console.log('THIS IS THE STATE OF =====> openMenu');
    // console.log(this.state.openMenu);

    this.setState({
      openMenu: isOpen
    });
  };

  // {this.props.children}

  // ==>  <ToggleMenu isAvailable={this.props.isAvailable} />

  render() {
    return (
      <Fragment>
        <MenuIconWrap buttonIsVisible={true} onClick={this.handleToggleMenu}>
          <EllipsisImg src={ellipsis} alt="" />
        </MenuIconWrap>

        <MenuContents isOpen={this.state.openMenu} toolBoxOpen={this.props.isAvailable}>
          {this.props.children}
        </MenuContents>
      </Fragment>
    );
  }
}

export default ToggleMenu;
