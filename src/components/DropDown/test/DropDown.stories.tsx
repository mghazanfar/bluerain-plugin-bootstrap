import * as React from 'react';
import {DropDown, DropDownItem, DropDownToggle,DropDownMenu } from '../DropDown';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

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
            <DropDownToggle disabled >
                Dropdown
            </DropDownToggle>
            <DropDownMenu>
                <DropDownItem disabled>Another Action</DropDownItem>
                <DropDownItem disabled>Another Action</DropDownItem>
                <DropDownItem disabled>Another Action</DropDownItem>
                <DropDownItem disabled>Another Action</DropDownItem>
                <DropDownItem disabled>Another Action</DropDownItem>
                <DropDownItem>Another Action</DropDownItem>
            </DropDownMenu>
        </DropDown>
    );});
stories.add('DropDown (ontoggle)', () => {
onchange=()=>{
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

