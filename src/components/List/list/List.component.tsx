/**
 * Created by M.GhazanfarAli on 15/01/18.
 */

import * as React from 'react';
import IList from 'bluerain-ui-interfaces/Components/List';
import { ListGroup } from 'reactstrap';

/**
 * The props of List Component
 * @param {Node} props.children Children of List component.
 * @param {Object} props.style style object for List's style.
 */

 /**
  * Platform specific props
  * @param {string} props.className className to give css styling.
  */

 export interface IBSProps {
 className?: string,
 }

const List = (props: IList & IBSProps) => {
    return (
        <ListGroup
            style = {props.style}
            className={props.className}
        >
        {props.children}
        </ListGroup>
    );

};

export default List;