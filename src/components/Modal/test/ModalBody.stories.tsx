import * as React from 'react';
import DialogBody from '../ModalBody.Component';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Modal', module);
stories.add('ModalBody', () => {
	return(
		<DialogBody>
				 Let Google help apps determine location. This means sending anonymous location data to
						 Google, even when no apps are running.
		</DialogBody>

	);
});




