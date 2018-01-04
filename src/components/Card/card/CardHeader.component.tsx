/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { ICardHeader } from '@blueeast/bluerain-ui-interfaces/Components/Card';
import { CardHeader } from 'reactstrap';

/**
 * The props of CardHeader Component
 * @param {Node} props.children Label to be passed as child.
 * @param {Object} props.style style object for Card's style.
 * @param {Node} props.title If true, card is generated with raised styling.
 * @param {string or function} props.tag tag with which the Component will be rendered.
 * @param {string} props.className className for styling component with css.
 */

 
const BlueRainCardHeader = (props: ICardHeader) => {
    return (
        <CardHeader
        {...props}
        >
        {props.title} {props.children}
        </CardHeader>
    );

}

export default BlueRainCardHeader;