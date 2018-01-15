import * as React from 'react';
import { ListItem } from '../../List';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false});


storiesOf('ListItem', module).add('ListItem with tag, href and action props', () =>
<ListItem tag="a" href="#" action>Cras justo odio</ListItem>);
