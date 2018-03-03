/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { ListItemTextProperties } from '@blueeast/bluerain-ui-interfaces';
import { ListGroupItemText } from 'reactstrap';

/**
 * The props of CardBody Component
 * @param {Object} props.style style object for Card's style.
 * @param {Node} props.children tag with which the Component will be rendered.
 * @param {string} props.className className for styling component with css.
 */

const ListItemText: React.ComponentType<any> = (props: ListItemTextProperties) => {
    return (
        <ListGroupItemText
            {...props}
        >
        {props.children}
        </ListGroupItemText>
    );

};

export default ListItemText;