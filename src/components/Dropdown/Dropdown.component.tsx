/**
 * Created by M.GhazanfarAli on 7/3/18.
 */

import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { PickerProperties } from '@blueeast/bluerain-ui-interfaces';

export interface BSProps extends PickerProperties{
  value?: React.ReactNode;
  }
  
  export default class DropDown extends React.Component<BSProps, {dropdownOpen: boolean, value: React.ReactNode}> {
    constructor(props:BSProps) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false,
        value: props.value || 'Dropdown'
      };
    }
  
    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

    handleChange = event => {
      this.setState({ value: event.target.value });
      this.props.onValueChange;
      };
  
    render() {
      return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={this.props.style}>
          <DropdownToggle caret>
            {this.state.value}
          </DropdownToggle>
          <DropdownMenu>
          {this.props.children}
          </DropdownMenu>
        </Dropdown>
      );
    }
  }
