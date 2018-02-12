/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { ListItemProp } from '@blueeast/bluerain-ui-interfaces';
import { ListGroupItem } from 'reactstrap';

/**
 * The props of ListItem Component
 * @param {Object} props.style style object for ListItem's style.
 * @param {Node} props.children Children of ListItem.
 * @param {boolean} props.active If true, ListItem is rendered in active state.
 */

 /**
  * Platform specific props
  * @param {string} props.className className to extend styling of Listitem.
  * @param {enum} props.color background color of ListItem.
  * @param {string} props.tag tag with which ListItem will be rendered.
  * @param {string} props.href src to which the ListItem will be directed.
  * @param {boolean} props.action ListItem if generated with action state if true and tag is button.
  * @param {boolean} props.disabled If true, ListItem is rendered disabled.
  */

  export interface IBSProps {
    className?: string,
    color?: 'primary' | 'secondary' | 'warning' | 'info' | 'danger' | 'success' | 'light' | 'dark' | 'link',
    tag?: string,
    href?: string,
    action?: boolean,
    disabled?: boolean,
    }

const ListItem = (props: ListItemProp & IBSProps) => {
    return (
        <ListGroupItem
            {...props}
        >
        {props.children}
        </ListGroupItem>
    );
};

export default ListItem;