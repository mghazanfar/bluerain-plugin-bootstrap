/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { CardBodyProperties } from '@blueeast/bluerain-ui-interfaces';
import { CardBody } from 'reactstrap';

/**
 * The props of CardBody Component
 * @param {Object} props.style style object for Card's style.
 * @param {Node} props.children tag with which the Component will be rendered.
 * @param {string} props.className className for styling component with css.
 */


const BlueRainCardBody: React.ComponentType<any> = (props: CardBodyProperties) => {
    return (
        <CardBody
        {...props}>
        {props.children}
        </CardBody>
    );
};

export default BlueRainCardBody;