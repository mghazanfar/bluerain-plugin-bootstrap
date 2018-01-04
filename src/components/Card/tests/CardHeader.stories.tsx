import * as React from 'react';
import {CardHeader} from '../../Card';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false});

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const label = text('label as child', 'with knobs');
storiesOf('CardHeader', module).add('CardHeader with title prop', () =>
<CardHeader
title="Title"
    />);

storiesOf('CardHeader', module).add('CardHeader with tag and title props', () =>
<CardHeader
title="Title"
tag={()=>'h2'}
    />);

storiesOf('CardHeader', module).add('CardHeader with tag and Node as title props', () =>
<CardHeader
title={<h1>Header</h1>}
tag={()=>'h2'}
    />);
