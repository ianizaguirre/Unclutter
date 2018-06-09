import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import ellipsis from '../ellipsis-icon.png';

//==============================
const MenuIconWrap = styled.button`
  cursor: pointer;
  display: ${props => (props.buttonIsVisible ? 'inline-block' : 'none')};

  /* Remove Browser Default Button Styles */
  padding: 0;
  border: 0;
  background-color: transparent;
  color: inherit;

  &:focus {
    outline: none;
  }
`;

const MenuContents = styled.div`
  color: #7d8485;
  background-color: #ffffff;
  /* line-height: 20px; */

  border: 1px solid #e1e1e1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  /* top: 36%; */
  /* left: 63%; */
  /* margin-left: -17px; */
  margin-top: 27px;
  width: 112px;

  padding: 0.25em 0em;

  display: ${props => (props.isOpen ? 'inline-block' : 'none')};

  @media (max-width: 750px) {
    /* margin-left: auto;
    margin-top: auto;
    position: relative; */
    margin-top: ${props => (props.toolBoxOpen ? '-91px' : '-54px')};
    margin-left: -40px;
    /* margin-left: -17px; */
    /* top: 218px; */
    width: 85px;
  }
`;

// ================================================
const EllipsisImg = styled.img`
  position: relative;
  width: 2em;
  cursor: pointer;

  display: ${props => (props.isOpen ? 'none' : 'inline-block')};
`;

class ToggleMenu extends Component {
  handleToggleMenu = event => {
    event.preventDefault();

    let isOpen = this.props.openMenu ? false : true;

    this.props.toggleMenu(isOpen, this.props.indexman);

    // console.log('this.props.mouseOnTask ------- 💎💎💎💎💎💎💎💎💎💎💎💎');
    // console.log(this.props.indexman);

    // If open then Close task ToolBox
    this.props.updateCurrentItem(null);
  };

  render() {
    return (
      <Fragment>
        <MenuIconWrap buttonIsVisible={true} onClick={this.handleToggleMenu}>
          <EllipsisImg src={ellipsis} alt="" />
        </MenuIconWrap>

        <MenuContents isOpen={this.props.openMenu} toolBoxOpen={this.props.isAvailable}>
          {this.props.children}
        </MenuContents>
      </Fragment>
    );
  }
}

export default ToggleMenu;
