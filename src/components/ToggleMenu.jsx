import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

// const ListItemsWrapper = styled.li`
//   list-style: none;
//   border-color: #e1e1e1;
//   border-top-style: solid;
//   border-bottom-style: solid;
//   border-width: 1px;
//   padding-top: 11px;
//   padding-bottom: 11px;
//   margin-bottom: 15px;
// `;
// const FlexContainerWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   flex-direction: row;
//   justify-content: space-between;
// `;
// const FlexContainerColumn = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   flex-direction: column;
// `;
// const FlexContainerRow = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   flex-direction: row;
// `;

// const Button = styled.button`
//   /* Adapt the colours based on primary prop */
//   color: ${props => (props.cancel ? '#7d8485' : '#ffffff')};
//   background-color: ${props => (props.cancel ? '#ffffff' : '#359010')};
//   font-size: 13px;
//   line-height: 20px;
//   font-weight: ${props => (props.cancel ? '400' : '500')};
//   border: ${props => (props.cancel ? '2px solid transparent' : '2px solid')};
//   border-radius: 4px;
//   cursor: pointer;

//   margin-right: 0.5em;
//   padding: 0.25em 0.7em;

//   /* display: ${props => (props.buttonIsVisible ? 'inline-block' : 'none')}; */
// `;

//==============================
const MenuIcon = styled.div`
  /* Adapt the colours based on primary prop */
  color: ${props => (props.cancel ? '#7d8485' : '#ffffff')};
  background-color: ${props => (props.cancel ? '#ffffff' : '#359010')};
  font-size: 13px;
  line-height: 20px;
  font-weight: ${props => (props.cancel ? '400' : '500')};
  border: ${props => (props.cancel ? '2px solid transparent' : '2px solid')};
  border-radius: 4px;
  cursor: pointer;

  margin-right: 0.5em;
  padding: 0.25em 0.7em;

  display: ${props => (props.buttonIsVisible ? 'inline-block' : 'none')};
`;
// ==========================
const MenuContents = styled.div`
  /* Adapt the colours based on primary prop */
  color: ${props => (props.cancel ? '#7d8485' : '#ffffff')};
  background-color: ${props => (props.cancel ? '#ffffff' : '#359010')};
  font-size: 13px;
  line-height: 20px;
  font-weight: ${props => (props.cancel ? '400' : '500')};
  border: ${props => (props.cancel ? '2px solid transparent' : '2px solid')};
  border-radius: 4px;
  cursor: pointer;

  margin-right: 0.5em;
  padding: 0.25em 0.7em;

  display: ${props => (props.isOpen ? 'none' : 'inline-block')};
`;
//=========================
// const ButtonDel = styled.button`
//   color: #e44232;
//   background-color: #ffffff;
//   border-color: #e44232;
//   font-size: 13px;
//   line-height: 15px;
//   font-weight: 500;
//   border: 2px solid;
//   border-radius: 4px;
//   padding: 8px 16px;
//   cursor: pointer;
//   transition: all 0.25s ease;
//   /* display: ${props => (props.buttonIsVisible ? 'inline-block' : 'none')}; */

//   &:hover {
//     color: #ffffff;
//     background-color: #e44232;
//     outline: 0;
//     border-color: transparent;
//   }
// `;
// ================================================

class ToggleMenu extends Component {
  state = {
    openMenu: true
  };

  handleToggleMenu = event => {
    event.preventDefault();
    console.log('handleToggleMenu ===> has been CLICKED');

    const isOpen = !this.state.openMenu ? true : false;
    console.log('THIS IS THE STATE OF =====> openMenu');
    console.log(this.state.openMenu);

    this.setState({
      openMenu: isOpen
    });
  };

  //           <div>
  //   <Button onClick={this.handleClickSave}>SaveE</Button>

  //   <Button onClick={this.handleClickCancel}>Cancel</Button>

  //   <ButtonDel onClick={this.handleClickDelete}>🗑</ButtonDel>
  // </div>

  render() {
    return (
      <Fragment>
        <MenuIcon buttonIsVisible={this.props.isAvailable} onClick={this.handleToggleMenu}>
          Yo
          {this.props.children}
        </MenuIcon>

        <MenuContents isOpen={this.state.openMenu}>LINK1</MenuContents>
      </Fragment>
    );
  }
}

export default ToggleMenu;
