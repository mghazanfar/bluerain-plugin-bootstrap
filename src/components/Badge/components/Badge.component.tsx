import * as React from 'react';
import {IBadge} from '@blueeast/bluerain-ui-interfaces/Components/Badge';
import { Badge } from 'reactstrap';

const BadgeUi = (props: IBadge) => {
    return (<Badge {...props.style}{...props}>{props.badgeContent}</Badge>);

};

export default BadgeUi;