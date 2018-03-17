import  React from 'react';
import { storiesOf } from '@storybook/react';
import  DialogFooter from '../ModalFooter.Component';
import BlueRainButton    from '../../Button';

const stories = storiesOf('Modal', module);

stories.add('ModalFooter', () => {
  const Handler =() => alert('clicked');
	
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



