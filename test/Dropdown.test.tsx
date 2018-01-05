import * as React from 'react';
import { create } from 'react-test-renderer';
import  BR  from '@blueeast/bluerain-os';
import Dropdown from '../src/components/Dropdown/DropDown';
BR.boot({renderApp:false});

test('Dropdown component', () => {
    const DropDown = create(
        <Dropdown multiple{true}><option>123</option></Dropdown>
    ).toJSON();
    expect(Dropdown.props.multiple).toEqual(true);
    expect(Dropdown).toMatchSnapshot();
});
test('Dropdown component', () => {
    const DropDown = create(
        <Dropdown type{'select'}><option>123</option></Dropdown>
    ).toJSON();
    expect(Dropdown.props.type).toEqual('select');
    expect(Dropdown).toMatchSnapshot();
});