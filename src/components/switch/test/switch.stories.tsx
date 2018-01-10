import * as React from 'react';
import Switch from '../../switch';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number} from '@storybook/addon-knobs';
const stories = storiesOf('Switch', module);
stories.add('Switch (with knobs)', () => {
    const disabled = boolean('disabled', false);
    const value = boolean('value', true);
    return <Switch disabled={disabled} value={value} onValueChange={action('Value is',value)}/>;
});
stories.add('Switch (default without props)', () => {
    return  (
        <div style={{margin:20}}>
    <Switch value={true} />
    </div>);
});