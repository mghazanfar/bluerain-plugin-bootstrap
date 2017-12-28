import * as React from 'react';
import Button from '../../Button';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';

BR.boot({renderApp:false})
const Text = BR.Components.get('Text');

storiesOf('Button', module).add('Button with label in Child', () => <Button><Text>Label</Text></Button>);