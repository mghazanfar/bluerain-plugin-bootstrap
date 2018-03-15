import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import DialogComponent from '../Dialog Story';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
const stories = storiesOf('DialogComponent', module);

stories.add('DialogComponent ', () => {
	return <DialogComponent   />;
});

