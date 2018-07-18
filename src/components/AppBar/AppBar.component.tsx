import * as React from 'react';
import { AppBarProperties } from '@blueeast/bluerain-ui-interfaces';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';

/**
 * The universal props of AppBar Component
 * @param {Object} props.style Get the style object.
 * @param {'primary' | 'success' | 'secondary' | 'light' | 'dark' | 'inverse' | 'danger' | 'info' | 'warning' | undefined} props.color BackgroundColor for AppBar.
 * @param {Node} props.children children of AppBar.
 * @param { 'static' | 'fixed' | 'absolute' | undefined } props.position position of AppBar.
 * @param {string} props.className className props to extend styles through CSS for AppBar.
 * Platform specific props of AppBar Component
 * @param {'xl'|'lg'|'md'|'sm'|'md'} props.expand Define from enum, the screen size where you want AppBar to expand (default 'sm').
 * @param {Node} props.logo Write/addLogo on the logo's position.
 */


export interface BSProps extends AppBarProperties {
	color?: 'primary' | 'success' | 'secondary' | 'light' | 'dark' | 'danger' | 'info' | 'warning' | undefined,
	position?: 'fixed' | 'sticky' ,
	expand?: 'xl' | 'lg' | 'md' | 'sm' | 'md',
	logo?: React.ReactNode,
}

class AppBar extends React.Component<BSProps, { isOpen: boolean }> {
	constructor(props) {
	  super(props);
	  this.toggle = this.toggle.bind(this);
	  this.state = {
		isOpen: false
	  };
	}
	toggle() {
	  this.setState({
		isOpen: !this.state.isOpen
	  });
	}
	render() {
	  return (
		  <Navbar color={this.props.color} light expand={this.props.expand || 'sm' } fixed={this.props.position==='fixed'? 'top': 'sticky' } sticky={this.props.position==='sticky'? 'top': 'sticky' }>
			<NavbarBrand href="/">{this.props.logo}</NavbarBrand>
			<NavbarToggler onClick={this.toggle} />
			<Collapse isOpen={this.state.isOpen} navbar>
			  <Nav className="ml-auto" navbar>
				{this.props.children}
			  </Nav>
			</Collapse>
		  </Navbar>
	  );
	}
  }

export default AppBar;