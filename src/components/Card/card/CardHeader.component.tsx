/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { CardHeaderProperties } from '@blueeast/bluerain-ui-interfaces';
import { CardHeader } from 'reactstrap';

/**
 * The props of CardHeader Component
 * @param {Node} props.children Label to be passed as child.
 * @param {Object} props.style style object for Card's style.
 * @param {Node} props.title If true, card is generated with raised styling.
 * @param {string or function} props.tag tag with which the Component will be rendered.
 * @param {string} props.className className for styling component with css.
 */


const BlueRainCardHeader: React.ComponentType<any> = (props: CardHeaderProperties) => {
    return (
        <CardHeader
        {...props}
        >
        {props.title} {props.children}
        </CardHeader>
    );

};

export default BlueRainCardHeader;