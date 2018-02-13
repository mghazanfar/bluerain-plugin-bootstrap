/**
 * Created by amna on 12/27/17.
 */

import React, {ReactNode} from 'react';
import { TextInputProp } from '@blueeast/bluerain-ui-interfaces';
import { Form, FormFeedback, Input } from 'reactstrap';

export interface IBootstrapTextInput {
    type?: string,
    name?: string,
    multiple?: boolean,
    disabled?: boolean
}

const BlueRainTextInput = (props: TextInputProp & IBootstrapTextInput) => {
    if(props.multiline !== undefined && props.multiline) {
        return (
            <Form>
                <Input type="textarea" onClick={props.onChange} valid={!props.error} {...props} />
                <FormFeedback>{props.errorText}</FormFeedback>
            </Form>
        );
    }
    return (
        <Form>
            <Input onClick={props.onChange} valid={!props.error} {...props} />
            <FormFeedback>{props.errorText}</FormFeedback>
        </Form>
    );

};

export default BlueRainTextInput;
