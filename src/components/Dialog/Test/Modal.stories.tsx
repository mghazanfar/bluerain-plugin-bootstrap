import * as React from 'react';
import DialogComponent from '../ModalStory';
import { storiesOf } from '@storybook/react';
const stories = storiesOf('Modal', module);

stories.add('ModalComponent ', () => {
	return <DialogComponent   />;
});