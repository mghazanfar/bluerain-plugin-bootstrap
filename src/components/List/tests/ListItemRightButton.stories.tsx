import * as React from 'react';
import  { ListItemRightButton } from '../../List';
import Button from '../../Button';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false});

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const label = text('label as child', 'with knobs');
storiesOf('ListItemRightButton', module).add('Card with style and raised props', () =>
<ListItemRightButton style={{backgroundColor:'grey'}}
    >
    <Button color="dark"><Text>Dark</Text></Button>
</ListItemRightButton>);
