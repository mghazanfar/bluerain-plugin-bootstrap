import * as React from 'react';
import { CardFooter } from '../../Card';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false})


storiesOf('CardFooter', module).add('CardFooter with className prop', () =>
<CardFooter
className="bg-footer"
    />);

storiesOf('CardFooter', module).add('CardFooter with style prop', () =>
<CardFooter
style={{width:200, height:30}}
    />);

storiesOf('CardFooter', module).add('CardFooter with children prop', () =>
<CardFooter>Hello</CardFooter>);
