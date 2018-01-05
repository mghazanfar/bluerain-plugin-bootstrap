import React from 'react';
import { create } from 'react-test-renderer';
import Map from '../src/components/map/Map.component';

test('Map component with default values', () => {
    const map = create(
        <Map
            zoom={12}
            height={'100px'}
            width={'500px'}
        />
    ).toJSON();
    expect(map.props.width).toEqual(undefined);
    expect(map).toMatchSnapshot();
});

test('Map component with region', () => {
    const map = create(
        <Map height={'600px'} />
    ).toJSON();
    expect(map.props.style).toEqual({ height:'600px' });
    expect(map).toMatchSnapshot();
});
