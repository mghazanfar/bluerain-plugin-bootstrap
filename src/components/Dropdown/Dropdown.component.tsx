/**
 * Created by M.GhazanfarAli on 7/3/18.
 */

import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ListItem } from '../List';
import { PickerProperties } from '@blueeast/bluerain-ui-interfaces';

export interface BSProps extends PickerProperties{
  children: Array<any>,
  }
  
  export default class DropDown extends React.Component<BSProps, {dropdownOpen: boolean, value: any}> {
    constructor(props:BSProps) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false,
        value: props.selectedValue || 'Dropdown'
      };
    }
  
    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

    handleChange = event => {
      // TODO: Dropdown updates the value when it is a text. It does not show if a listItem is selected. This needs to be reviised.
      this.setState({value: event.target.innerHTML});
      this.props.onValueChange? this.props.onValueChange(): this.setState({value: event.target.innerHTML});
    }
  
    render() {
      const listItems = this.props.children.map((item, index) =>
        <DropdownItem onClick={this.handleChange} key={index}>{item}</DropdownItem>);
        
      return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={this.props.style}>
          <DropdownToggle caret>
            {this.state.value}
          </DropdownToggle>
          <DropdownMenu>
            {listItems}
          </DropdownMenu>
        </Dropdown>
      );
    }
  }
