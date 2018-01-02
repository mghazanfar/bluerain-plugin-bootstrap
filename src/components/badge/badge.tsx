import * as React from 'react';
import { Badge } from 'reactstrap';
import {IBadge} from '@blueeast/bluerain-ui-interfaces/Components/Badge';

export interface IBadgeProps {
    color?: string;
}

const BadgeUi = (props: IBadge & IBadgeProps) => {
    return (<Badge {...props.style}{...props}>{props.badgeContent}</Badge>);

};

export default BadgeUi;