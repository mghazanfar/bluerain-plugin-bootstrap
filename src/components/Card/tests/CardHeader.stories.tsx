import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { CardHeader } from '../../Card';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';

BR.boot({ renderApp:false });

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const label = text('label as child', 'with knobs');
storiesOf('CardHeader', module).add('CardHeader with title prop', () =>
<CardHeader title="Title"/>);

storiesOf('CardHeader', module).add('CardHeader Node as title props', () =>
<CardHeader title={<h1>Header</h1>} />);
