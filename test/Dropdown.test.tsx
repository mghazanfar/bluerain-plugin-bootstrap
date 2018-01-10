import * as React from 'react';
import { create } from 'react-test-renderer';
import Dropdown from '../src/components/Dropdown-with-input/DropDown';

test('Dropdown-with-input component', () => {
    const DropDown = create(
        <Dropdown multiple{true}><option>123</option></Dropdown>
    ).toJSON();
    expect(DropDown.props.multiple).toEqual(true);
    expect(DropDown).toMatchSnapshot();
});
test('Dropdown-with-input component', () => {
    const DropDown = create(
        <Dropdown type={'select'}><option>123</option></Dropdown>
    ).toJSON();
    expect(DropDown.props.type).toEqual(undefined);
    expect(DropDown).toMatchSnapshot();
});