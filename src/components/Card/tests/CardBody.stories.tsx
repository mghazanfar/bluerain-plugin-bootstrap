import * as React from 'react';
import { CardBody } from '../../Card';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false})


storiesOf('CardBody', module).add('CardBody with className prop', () =>
<CardBody
className="cardBody"
    />);

storiesOf('CardBody', module).add('CardMedia with style prop', () =>
<CardBody
style={{width:200, height: 200}}
    />);

storiesOf('CardBody', module).add('CardMedia with children prop', () =>
<CardBody>
Hello
    </CardBody>);
