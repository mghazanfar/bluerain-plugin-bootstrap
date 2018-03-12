import * as React from 'react';
import { number,  text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import AppBar from '../../AppBar';
import { Favorite } from 'bluerain-icons';
import Button from '../../Button';
import {
	NavItem,
	NavLink,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';

const stories = storiesOf('AppBar', module);
stories.add('AppBar with primary color and position="fixed"', () => {
	return  (
    <AppBar position="fixed" color="primary" logo='AppBar'>
    <NavItem>
      <NavLink href="/components/">Components</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
    </NavItem>
      </AppBar>);
});

stories.add('AppBar with position static and secondary color', () => {
	return  (
        <AppBar position="fixed" color="secondary" logo='AppBar'>
        <NavItem>
          <NavLink href="/components/">Components</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
        </NavItem>
      </AppBar>);
});

stories.add('AppBar with dark color and  position="absolute"', () => {
	return  (
<AppBar position="sticky" color="dark" logo='AppBar'>
    <NavItem>
      <NavLink href="/components/">Components</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
    </NavItem>
      </AppBar>);
});
stories.add('AppBar with light color and  position="absolute"', () => {
	return  (
<AppBar color="light" logo='AppBar'>
    <NavItem>
      <NavLink href="/components/">Components</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
    </NavItem>
      </AppBar>);
});


stories.add('AppBar with danger color', () => {
	return  (
<AppBar color="danger" logo='AppBar'>
    <NavItem>
      <NavLink href="/components/">Components</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
    </NavItem>
      </AppBar>);
});

stories.add('AppBar with info color', () => {
	return  (
<AppBar color="info" logo='AppBar'>
    <NavItem>
      <NavLink href="/components/">Components</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
    </NavItem>
      </AppBar>);
});

stories.add('AppBar with warning color', () => {
	return  (
<AppBar color="warning" logo='AppBar'>
    <NavItem>
      <NavLink href="/components/">Components</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
    </NavItem>
      </AppBar>);
});


stories.add('AppBar with success color', () => {
	return  (
<AppBar color="success" logo='AppBar'>
    <NavItem>
      <NavLink href="/components/">Components</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
    </NavItem>
      </AppBar>);
});
