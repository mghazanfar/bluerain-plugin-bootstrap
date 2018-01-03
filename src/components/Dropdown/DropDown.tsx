import React from 'react';
import {IPicker} from '@blueeast/bluerain-ui-interfaces/Components/Picker';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
/**
 * The props of IReactstarpDropdownItem Component
 * @param {Node} props.children children of the component.
 * @param {boolean} props.type type of input.
 * @param {boolean} props.size size of the component.
 * @param {boolean} props.bsSize size of the base.
 * @param {function |string } props.tag default: 'div' unless nav=true, then 'li'.
 * @param { function | string} props.innerRef For inner component
 * @param {function} props.plaintext  For plaintext.
 * @param {function} props.addon for addon handling .
 * @param {string} props.className for styles.
 * @param {object} props.cssModule for styles .
 * @param {object} props.valid for for validation .
 */
interface ISelect {
    type?:string,
    size?:string,
    bsSize?: string,
    valid?: boolean,
    tag?: ()=>void |string,
    innerRef?: ()=>void |string,
    plaintext?: boolean,
    addon?: boolean,
    className?: string,
    cssModule?: object,
}
const Select=(props:IPicker & ISelect)=> {
        return (
                <Input {...props} />
        );
};
export default Select;