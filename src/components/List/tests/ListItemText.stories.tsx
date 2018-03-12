import * as React from 'react';
import  { ListItemText } from '../../List';
import Button from '../../Button';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false});

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const label = text('label as child', 'with knobs');
storiesOf('ListItemText', module).add('ListItemText with text as child', () =>
<ListItemText
    >
    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
</ListItemText>);
