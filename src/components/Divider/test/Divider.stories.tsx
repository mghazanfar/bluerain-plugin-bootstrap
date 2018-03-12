import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Divider from '../../Divider';
const stories = storiesOf('Divider', module);
stories.add('Divider (with light false)', () => {
	return <div style={{ padding: 20, backgroundColor: 'white' }}><Divider light={false} /></div>;
});

stories.add('Divider (with light true)', () => {
	return <div style={{ padding: 20, backgroundColor: 'white' }}><Divider light={true}/></div>;
});