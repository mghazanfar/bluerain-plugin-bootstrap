import * as React from 'react';
import Slider from '../../slider';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number} from '@storybook/addon-knobs';
const stories = storiesOf('Slider', module);
stories.add('Slider (with knobs)', () => {
    const disabled = boolean('disabled', false);
    const defaultValue = number('defaultValue', 150);
    return <Slider disabled={disabled} defaultValue={defaultValue} onValueChange={action('Value is changed')} maximumValue={200} minimumValue={100} onSlidingComplete={action('Sliding Complete at')}/>;
});
stories.add('Slider (default without knobs)', () => {
    return  (
        <div style={{margin:20}}>
    <Slider onSlidingComplete={action('Value is changed commpletely')} />
    </div>);
});