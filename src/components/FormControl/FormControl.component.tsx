/**
 * Created by M.GhazanfarAli on 13/03/18.
 */

import * as React from 'react';
import { FormControlProp } from '@blueeast/bluerain-ui-interfaces';
import { Form } from 'reactstrap';

/**
 * The props of FormControl Component
 * @param {Node} props.children Children of FormControl component.
 * @param {Object} props.style style object for FormControl's style.
 * @param {Object} props.component component to generate FormControl component with.
 * @param {Object} props.className className for FormControl's extended style.
 */

export interface BSProps {
    inline?: boolean,
    innerRef?: React.ReactNode,
    cssModule?: {},

}
const FormControl = (props: FormControlProp & BSProps) => {
    return (
        <Form {...props} />
    );

};

export default FormControl;