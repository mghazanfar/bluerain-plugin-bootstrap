import * as React from 'react';
import { FormControl, FormGroup } from '../../FormControl';
import Button from '../../Button';
import Input from '../../TextInput';
import { Label } from 'reactstrap';
import BR from '@blueeast/bluerain-os';
import { Favorite } from 'bluerain-icons';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false});

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const View = BR.Components.get('View');

storiesOf('FormControl', module).add('FormControl with style and raised props', () =>
<FormControl
    style={{width:'100%', height:300}}
    className="bg-main"
>
Raised
</FormControl>);

storiesOf('FormControl', module).add('Reactstrap example 1', () =>

<FormControl inline={true}>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" placeholder="something@idk.cool" />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" placeholder="don't tell!" />
    </FormGroup>
    <Button>Submit</Button>
</FormControl>);

storiesOf('FormControl', module).add('Reactstrap example 2', () =>

<FormControl>
    <FormGroup>
    <Label for="exampleEmail">Input with success</Label>
    <Input />
    <Text>Example help text that remains unchanged.</Text>
    </FormGroup>
    <FormGroup>
    <Label for="examplePassword">Input with danger</Label>
    <Input/>
    <Text>Example help text that remains unchanged.</Text>
    </FormGroup>
</FormControl>);



storiesOf('FormControl', module).add('Reactstrap example 3', () =>

<FormControl>
    <FormGroup inline={true}>
    <Label for="exampleEmail">Input with success</Label>
    <Input />
    <Text>Example help text that remains unchanged.</Text>
    </FormGroup>
    <FormGroup>
    <Label for="examplePassword">Input with danger</Label>
    <Input/>
    <Text>Example help text that remains unchanged.</Text>
    </FormGroup>
</FormControl>);
