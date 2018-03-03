import React from 'react';
import { create } from 'react-test-renderer';
import Checkbox from '../src/components/TextInput';

test('when title prop is passed', () => {
    const checkbox = create(
        <Checkbox title="hello" />
    ).toJSON();
    expect(checkbox.props.placeholder).toEqual('hello');
    expect(checkbox).toMatchSnapshot();
});
test('when checked prop is passed', () => {
    const checkbox = create(
        <Checkbox checked={true} />
    ).toJSON();
    expect(checkbox.props.autoFocus).toEqual(true);
    expect(checkbox).toMatchSnapshot();
});
