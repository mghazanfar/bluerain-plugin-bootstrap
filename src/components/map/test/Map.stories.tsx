import BR, { BlueRainProvider } from '@blueeast/bluerain-os';
import {   boolean, number, text } from '@storybook/addon-knobs';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import MapComponent from '../index';
import React from 'react';
const stories = storiesOf('Map', module);
BR.boot({ renderApp:false });

const onDragEnd = (e) => {
	const { latLng } = e;
	const latitude = latLng.lat();
	const longitude = latLng.lng();
	alert('Latitude and longitude');
};
stories.add('Map with OnMarkDragEnd(withKnobs)', () => {
	const draggable = boolean('draggable', true);
	const zoom = number('zoom', 12);
	const height = text('height', '500px');
	const width = text('width', '100%');
	return (
        <BlueRainProvider>
            <IntlProvider>
                <MapComponent
                    draggable={draggable}
                    zoom={zoom}
                    height={height}
                    width={width}
                    onMarkerDragEnd={onDragEnd}
                    region={{ latitude: 31.3892751, longitude: 74.1502481 }}
                />
            </IntlProvider>
        </BlueRainProvider>);
});
stories.add('Map with draggable(Knobs)', () => {
	const draggable = boolean('draggable', false);
	return (
        <BlueRainProvider>
            <IntlProvider>
                <MapComponent
                    draggable={draggable}
                    region={{ latitude: 31.3892751, longitude: 74.1502481 }}
                />
            </IntlProvider>
        </BlueRainProvider>);
});

stories.add('Map with zooming(Knobs)', () => {
	const zoom = number('zoom', 12);
	return (
        <BlueRainProvider>
            <IntlProvider>
                <MapComponent
                    zoom={zoom}
                    region={{ latitude: 31.3892751, longitude: 74.1502481 }}
                />
            </IntlProvider>
        </BlueRainProvider>);
});
