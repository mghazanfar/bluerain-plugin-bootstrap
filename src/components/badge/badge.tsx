import React from 'react';
import { Badge } from 'reactstrap';
import {IBadge} from 'bluerain-ui-interfaces/Components/Badge';

/**
 * The universal props of Badge Component
 * @param {Object} props.style Get the style object.
 * @param {ReactNode} props.badgeContent Content of the Badge.
 *  The specific libraray props of Badge Component
 * @param {string} props.color The color of Badge.
 */

export interface IBadgeProps {
    color?: string;
}

const BadgeUi = (props: IBadge & IBadgeProps) => {
    return (<Badge {...props.style}{...props}>{props.badgeContent}</Badge>);

};

export default BadgeUi;