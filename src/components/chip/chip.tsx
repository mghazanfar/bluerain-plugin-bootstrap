import * as React from 'react';
import { Badge } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { IChip } from '@blueeast/bluerain-ui-interfaces/Components/Chip';

/**
 * The props of Chip Component
 * @param {string} props.style Get the style object
 * @param {string} props.children Content of the Chip
 */
const ChipBluerain = (props: IChip) => {
    return (<Badge style={{...props.style}} pill color="primary">{props.children}</Badge>);

};
export default ChipBluerain;