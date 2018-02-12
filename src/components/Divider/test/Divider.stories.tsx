import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Divider from '../../Divider';
const stories = storiesOf('Divider', module);
stories.add('Divider (with knobs)', () => {
	const light = boolean('light prop', false);
	return <div style={{ padding: 20, backgroundColor: 'white' }}><Divider light={light} /></div>;
});

stories.add('Divider (with MUI Props)', () => {
	return <div style={{ padding: 20, backgroundColor: 'white' }}><Divider light={false} inset={true}/></div>;
});