import * as React from 'react';
import DropDown from '../DropDown';
import { Label} from 'reactstrap';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

const stories = storiesOf('Dropdown', module);
stories.add('DropDown (normal)', () => {

    return (
        <DropDown type="select">
            <option>111111</option>
            <option>222222</option>
            <option>333333</option>
            <option>444444</option>
            <option>555555</option>
        </DropDown>
    );});

stories.add('DropDown (multiple)', () => {
    return (
        <DropDown type="select" tag="fieldset" multiple={true} plaintext={true}>
            <option>111111</option>
            <option>222222</option>
            <option>333333</option>
            <option>444444</option>
            <option>555555</option>
        </DropDown>
    );});


