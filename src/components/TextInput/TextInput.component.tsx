/**
 * Created by amna on 12/27/17.
 */

import React, {ReactNode} from 'react';
import { TextInputProperties } from '@blueeast/bluerain-ui-interfaces';
import { Input } from 'reactstrap';

export interface IBootstrapTextInput {
    type?: string,
    name?: string,
    multiple?: boolean,
    disabled?: boolean
}

const BlueRainTextInput: React.ComponentType<any> = (props: TextInputProperties & IBootstrapTextInput) => {
    if(props.multiline !== undefined && props.multiline) {
        return (
            <Input type="textarea" onClick={props.onChange} {...props} />
        );
    }
    return (
        <Input onClick={props.onChange} disabled={!props.editable} {...props} />
    );

};

export default BlueRainTextInput;
