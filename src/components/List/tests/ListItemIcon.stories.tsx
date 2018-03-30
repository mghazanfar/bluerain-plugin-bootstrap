import * as React from 'react';
import { ListItemIcon } from '../../List';
// import { Favorite } from 'bluerain-icons';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false});


storiesOf('ListItemIcon', module).add('ListItemIcon with Icon as child', () =>
<ListItemIcon></ListItemIcon>);