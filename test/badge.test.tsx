import * as React from 'react';
import { create } from 'react-test-renderer';
import  BR  from '@blueeast/bluerain-os';
import Badge from '../src/components/badge/badge';
BR.boot({renderApp:false});

test('Badge component with default values', () => {
    const badge = create(
        <Badge badgeContent={'hello'}/>
    ).toJSON();
    expect(badge.props.badgeContent).toEqual('hello');
    expect(badge).toMatchSnapshot();
});

test('Badge component with style', () => {
    const badge = create(
        <Badge badgeContent={'123'} style={{'background-color':'green'}}>10 % off</Badge>
    ).toJSON();
    expect(badge.props.style).toEqual({'background-color':'green'});
    expect(badge).toMatchSnapshot();
});
