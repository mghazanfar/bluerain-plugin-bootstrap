import * as React from 'react';
import { DropDown, DropDownItem, DropDownMenu, DropDownToggle, } from '../DropDown';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('DropDown', module);
stories.add('DropDown (normal)', () => {

	return (
        <DropDown isOpen={true}>
        <DropDownToggle  >
            Dropdown
        </DropDownToggle>
        <DropDownMenu>
            <DropDownItem >Another Action</DropDownItem>
            <DropDownItem >Another Action</DropDownItem>
            <DropDownItem>Another Action</DropDownItem>
            <DropDownItem>Another Action</DropDownItem>
            <DropDownItem>Another Action</DropDownItem>
            <DropDownItem>Another Action</DropDownItem>
        </DropDownMenu>
    </DropDown>
	);});
stories.add('DropDown (with disabled)', () => {

	return (
        <DropDown isOpen={true}>
            <DropDownToggle disabled={true} >
                Dropdown
            </DropDownToggle>
            <DropDownMenu>
                <DropDownItem disabled={true}>Another Action</DropDownItem>
                <DropDownItem disabled={true}>Another Action</DropDownItem>
                <DropDownItem disabled={true}>Another Action</DropDownItem>
                <DropDownItem disabled={true}>Another Action</DropDownItem>
                <DropDownItem disabled={true}>Another Action</DropDownItem>
                <DropDownItem>Another Action</DropDownItem>
            </DropDownMenu>
        </DropDown>
	);});
stories.add('DropDown (ontoggle)', () => {
	onchange=() => {
		alert('hello');
	};
	return (
        <DropDown isOpen={true} toggle={onchange} >
            <DropDownToggle >
                Dropdown
            </DropDownToggle>
            <DropDownMenu>
                <DropDownItem >Another Action</DropDownItem>
                <DropDownItem >Another Action</DropDownItem>
                <DropDownItem>Another Action</DropDownItem>
                <DropDownItem>Another Action</DropDownItem>
                <DropDownItem>Another Action</DropDownItem>
                <DropDownItem>Another Action</DropDownItem>
            </DropDownMenu>
        </DropDown>
	);});

