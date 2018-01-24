import * as React from 'react';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Switch from '../../switch';
const stories = storiesOf('Switch', module);
stories.add('Switch (with knobs)', () => {
	const disabled = boolean('disabled', false);
	const value = boolean('value', true);
	return <Switch disabled={disabled} value={value} onValueChange={action('Value is',value)}/>;
});
stories.add('Switch (default without props)', () => {
	return  (
        <div style={{ margin:20 }}>
    <Switch value={true} />
    </div>);
});