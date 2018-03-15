import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import DialogComponent from '../Dialog Story';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import  DialogFooter from '../DialogFooter.Component';
import BlueRainButton    from '../../Button';

const stories = storiesOf('DialogComponent', module);

stories.add('DialogFooter', () => {
  const Handler =() => {
	alert('clicked');
	};
	return(
   	<DialogFooter>
				<BlueRainButton onPress={Handler} color="primary" >
					Agree
				</BlueRainButton>
				<BlueRainButton onPress={Handler} color="primary">
					Disagree
				</BlueRainButton>
		</DialogFooter>

	);

});



