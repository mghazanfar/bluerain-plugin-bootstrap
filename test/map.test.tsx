import React from 'react';
import { create } from 'react-test-renderer';
import Map from '../src/components/map/Map.component';

test('Map component with width', () => {
    const map = create(
        <Map
            zoom={12}
            height={'100px'}
            width={'500px'}
            region={{ latitude: 31.3892751, longitude: 74.1502481 }}
        />
    ).toJSON();
    expect(map.props.style.width).toEqual('500px' );
    expect(map).toMatchSnapshot();
});

test('Map component with height', () => {
    const map = create(
        <Map height={'600px'} />
    ).toJSON();
    expect(map.props.style.height).toEqual('600px');
    expect(map).toMatchSnapshot();
});