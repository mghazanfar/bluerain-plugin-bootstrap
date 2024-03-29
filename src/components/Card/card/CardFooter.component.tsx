/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { CardFooterProperties } from '@blueeast/bluerain-ui-interfaces';
import { CardFooter } from 'reactstrap';

/**
 * The props of CardBody Component
 * @param {Object} props.style style object for Card's style.
 * @param {Node} props.children tag with which the Component will be rendered.
 * @param {string} props.className className for styling component with css.
 */

const BlueRainCardFooter: React.ComponentType<any> = (props: CardFooterProperties) => {
    return (
        <CardFooter
            {...props}
        >
        {props.children}
        </CardFooter>
    );

};

export default BlueRainCardFooter;