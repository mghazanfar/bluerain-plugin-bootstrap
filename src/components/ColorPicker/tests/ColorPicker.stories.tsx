import * as React from 'react';
import { ColorPicker } from '../../ColorPicker';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
const Text = BR.Components.get('Text');
const rgbaAndHsl = { r:255, g:247, b: 109, a:100, h: 180, s: 0.5, l: 0.5 };
const hsl = { h: 180, s: 0.5, l: 0.5 };

function handleTextInputChange () {
   console.log('ColorPicker value changed');
}

storiesOf('ColorPicker', module).add('all Props',
    () => <ColorPicker value={rgbaAndHsl} hs={false} onChange={handleTextInputChange} label="Picker"  /> ) ;


storiesOf('ColorPicker', module).add('with hsl value',
() => <ColorPicker value={hsl} hs label="HSL" /> ) ;


storiesOf('ColorPicker', module).add('with # code',
() => <ColorPicker value="#2AF795" hs={false} label="#Code"/>) ;

storiesOf('ColorPicker', module).add('with violet as value',
() => <ColorPicker value="violet" hs={false} label="string"/> ) ;

storiesOf('ColorPicker', module).add('with no value',
() => <ColorPicker hs={false} label="no value given"/> ) ;