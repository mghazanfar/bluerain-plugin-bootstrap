/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { ListHeaderProperties } from '@blueeast/bluerain-ui-interfaces';
import { ListGroupItemHeading } from 'reactstrap';

/**
 * The props of ListHeader Component
 * @param {Node} props.children children of ListHeader.
 * @param {Object} props.style style object for ListHeader's style.
 */


const ListHeader: React.ComponentType<any> = (props: ListHeaderProperties) => {
    return (
        <ListGroupItemHeading
            {...props}
        >{props.children}
        </ListGroupItemHeading>
    );

};

export default ListHeader;