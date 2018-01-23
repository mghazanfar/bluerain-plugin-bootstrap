import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Chip from './chip';
import React from 'react';

const chipDefaultStyle = { 'color':'white','background-color':'green' };
const stories = storiesOf('Chip', module);
stories.add('Chip with default value', () => {
	return <Chip color="primary">12 % off</Chip>;
});

stories.add('Chip with style', () => {
    // const styleProps = {'background-color': backgroundColor};
	const style = object('Style of Chip',chipDefaultStyle);
	const content = text('Text', '10 % off');
	return <Chip style={style}>{content}</Chip>;
});

stories.add('Chip without knobs', () => {
	return <Chip style={chipDefaultStyle}>10 % off</Chip>;
});
