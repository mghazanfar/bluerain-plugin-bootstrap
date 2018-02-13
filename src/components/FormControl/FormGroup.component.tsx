/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { FormGroupProp } from '@blueeast/bluerain-ui-interfaces';
import { FormGroup } from 'reactstrap';

/**
 * The props of ListHeader Component
 * @param {Node} props.children Children of FormGroup.
 * @param {Object} props.row If true, children are shown in a compact row.
 * @param {Object} props.style style object for FormGroup's style.
 * @param {Object} props.className className for FormGroup's extended style.
 */
export interface BSProps {
    inline?: boolean,
    check?: boolean,
    disabled?: boolean,
    tag?: React.ReactNode,
    cssModule?: {},
}

const BlueRainFormGroup = (props: FormGroupProp & BSProps) => {
    return (
        <FormGroup {...props} />
    );

};

export default BlueRainFormGroup;