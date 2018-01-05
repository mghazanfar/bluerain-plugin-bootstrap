import React from 'react';
import { create } from 'react-test-renderer';
import TextInput from '../src/components/TextInput';

test('when placeholder prop is passed', () => {
    const textInput = create(
        <TextInput placeholder="hello" />
    ).toJSON();
    expect(textInput.props.placeholder).toEqual('hello');
    expect(textInput).toMatchSnapshot();
});
test('when autoFocus prop is passed', () => {
    const textInput = create(
        <TextInput autoFocus={true} />
    ).toJSON();
    expect(textInput.props.autoFocus).toEqual(true);
    expect(textInput).toMatchSnapshot();
});
