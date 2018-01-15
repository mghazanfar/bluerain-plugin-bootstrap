/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { IListHeader } from 'bluerain-ui-interfaces/Components/List';
import { ListGroupItemHeading } from 'reactstrap';

/**
 * The props of ListHeader Component
 * @param {Node} props.children children of ListHeader.
 * @param {Object} props.style style object for ListHeader's style.
 */


const ListHeader = (props: IListHeader) => {
    return (
        <ListGroupItemHeading
            {...props}
        >{props.children}
        </ListGroupItemHeading>
    );

};

export default ListHeader;