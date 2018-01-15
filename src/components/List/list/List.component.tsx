/**
 * Created by M.GhazanfarAli on 15/01/18.
 */

import * as React from 'react';
import IList from 'bluerain-ui-interfaces/Components/List';
import { ListGroup } from 'reactstrap';

/**
 * The props of List Component
 * @param {Node} props.children Label to be passed as child.
 * @param {Object} props.style style object for Card's style.
 */

 /**
  * Platform specific props
  * @param {string} props.color background color of the card.
  * @param {boolean} props.inverse If true, turns text color of card into white.
  * @param {boolean} props.body If true, card is generated with body specific styling.
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