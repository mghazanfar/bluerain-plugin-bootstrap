import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import DialogBody from '../DialogBody.Component';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import  DialogHeader from '../DialogHeader.Component';
const stories = storiesOf('DialogComponent', module);

stories.add('DialogBody', () => {
	return(
		<DialogBody>
				 Let Google help apps determine location. This means sending anonymous location data to
						 Google, even when no apps are running.
		</DialogBody>

	);
});




