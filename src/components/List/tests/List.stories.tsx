import * as React from 'react';
import List, { ListItem, ListItemText, ListItemAvatar, ListItemIcon, ListItemRightButton, ListHeader } from '../../List';
import Button from '../../Button';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false});

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const label = text('label as child', 'with knobs');
storiesOf('List', module).add('List with style and raised props', () =>
<List
    style={{width:'100%', height:300}}
    className="bg-main"
>
Raised
</List>);

storiesOf('List', module).add('List of ReactStrap1', () =>
<List
    style={{width:'100%', height:300}}
    className="bg-main"
>
Raised
</List>);

storiesOf('List', module).add('List of ReactStrap2', () =>
<List
    style={{width:'100%', height:300}}
    className="bg-main"
>
Raised
</List>);

storiesOf('List', module).add('List of ReactStrap3', () =>
<List
    style={{width:'100%', height:300}}
    className="bg-main"
>
Raised
</List>);
