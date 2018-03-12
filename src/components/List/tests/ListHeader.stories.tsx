import * as React from 'react';
import { ListHeader } from '../../List';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false});

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const label = text('label as child', 'with knobs');
storiesOf('ListHeader', module).add('ListHeader with children prop', () =>
<ListHeader>ListHeader</ListHeader>);