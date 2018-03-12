/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { ListItemAvatarProperties } from '@blueeast/bluerain-ui-interfaces';
import Avatar from '../../Avatar';

/**
 * The props of ListItemAvatar Component
 * @param {Object} props.style style object for ListItemAvatar's style.
 * @param {number} props.size size of the ListItemAvatar.
 * @param {string} props.className className for styling component with css.
 * @param {string} props.src src of the image.
 */

const ListItemAvatar: React.ComponentType<any> = (props: ListItemAvatarProperties) => {
    return (
        <Avatar
        {...props}
        />
    );

};

export default ListItemAvatar;