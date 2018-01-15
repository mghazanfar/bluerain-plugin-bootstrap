/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { IListItem } from 'bluerain-ui-interfaces/Components/List';
import { ListGroupItem } from 'reactstrap';

/**
 * The props of ListItem Component
 * @param {Object} props.style style object for Card's style.
 * @param {Node} props.children tag with which the Component will be rendered.
 * @param {boolean} props.active If true, ListItem is rendered in active state.
 */

 /**
  * Platform specific props
  * @param {string} props.className class to extend styling of Listitem.
  * @param {enum} props.color background color of ListItem.
  */

  export interface IBSProps {
    className?: string,
    color?: 'primary' | 'secondary' | 'warning' | 'info' | 'danger' | 'success' | 'light' | 'dark' | 'link',
    tag?: string,
    href?: string,
    action?: boolean,
    }

const ListItem = (props: IListItem & IBSProps) => {
    return (
        <ListGroupItem
            {...props}
        >
        {props.children}
        </ListGroupItem>
    );
};

export default ListItem;