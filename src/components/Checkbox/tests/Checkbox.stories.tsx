import * as React from 'react';
import Checkbox from '../../Checkbox';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';

const Text = BR.Components.get('Text');

function handleTextInputChange (value: any) {
   console.log('Checkbox value', value);
}

storiesOf('Checkbox', module).add('disabled',
    () => <Checkbox label="disabled" color="red" disabled={true} checked={false}  /> ) ;


storiesOf('Checkbox', module).add('with onPress',
() => <Checkbox label="with onPress" onPress={action('I was pressed')} /> ) ;


storiesOf('Checkbox', module).add('with label as Node',
() => <Checkbox label={<Text>I am a text in Node</Text>} onPress={action('I was pressed')} /> ) ;