/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { IListItemAvatar } from 'bluerain-ui-interfaces/Components/List';
import Avatar from '../../avatar';

/**
 * The props of ListItemAvatar Component
 * @param {Object} props.style style object for ListItemAvatar's style.
 * @param {number} props.size size of the ListItemAvatar.
 * @param {string} props.className className for styling component with css.
 * @param {string} props.src src of the image.
 */

const ListItemAvatar = (props: IListItemAvatar) => {
    return (
        <Avatar
        {...props}
        />
    );

};

export default ListItemAvatar;