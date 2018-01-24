import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';

import { CardBody } from '../../Card';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';

BR.boot({ renderApp:false });


storiesOf('CardBody', module).add('CardBody with className prop', () =>
<CardBody className="cardBody"/>);

storiesOf('CardBody', module).add('CardMedia with style prop', () =>
<CardBody style={{ width:200, height: 200 }} />);

storiesOf('CardBody', module).add('CardMedia with children prop', () =>
<CardBody>Hello</CardBody>);
