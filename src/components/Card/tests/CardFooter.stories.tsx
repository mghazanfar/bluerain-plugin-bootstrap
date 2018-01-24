import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { CardFooter } from '../../Card';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import BR from '@blueeast/bluerain-os';

BR.boot({ renderApp:false });


storiesOf('CardFooter', module).add('CardFooter with className prop', () =>
<CardFooter className="bg-footer" />);

storiesOf('CardFooter', module).add('CardFooter with style prop', () =>
<CardFooter style={{ width:200, height:30 }}/>);

storiesOf('CardFooter', module).add('CardFooter with children prop', () =>
<CardFooter>Hello</CardFooter>);
