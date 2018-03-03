/**
 * Created by amna on 12/27/17.
 */

import React, {ReactNode} from 'react';
import { CheckboxProperties } from '@blueeast/bluerain-ui-interfaces';
import { Form, FormGroup, Label, Input, } from 'reactstrap';


const Checkbox: React.ComponentType<any> = (props: CheckboxProperties) => {
    return (
    <Form>
        <FormGroup check>
            <Label check>
            <Input type="checkbox" onClick={props.onPress} disabled={props.disabled} {...props}/> {' '}
            {props.label}
            </Label>
        </FormGroup>
    </Form>
    );

};

export default Checkbox;
