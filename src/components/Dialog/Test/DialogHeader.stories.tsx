import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import  DialogHeader from '../DialogHeader.Component';
const stories = storiesOf('DialogComponent', module);

const Handler=()=>{

alert("clickked");

}
	stories.add('DialogHeader', () => {
		return(
			<DialogHeader toggle={Handler}>
          UserLocation Service
      </DialogHeader>

		);
	});




