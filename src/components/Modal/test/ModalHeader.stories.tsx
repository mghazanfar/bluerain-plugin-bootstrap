import * as React from 'react';
import { storiesOf } from '@storybook/react';
import  DialogHeader from '../ModalHeader.Component';
const stories = storiesOf('Modal', module);

const Handler=()=>alert("clickked");
 stories.add('ModalHeader', () => {
		return(
			<DialogHeader toggle={Handler}>
          UserLocation Service
			</DialogHeader>
		);
	});




