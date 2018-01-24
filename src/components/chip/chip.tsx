/**
 * Created by Ghazal Taimur on 12/29/17.
 */
import { Badge } from 'reactstrap';
import { IChip } from 'bluerain-ui-interfaces/Components/Chip';
import React from 'react';

/**
 * The props of Chip Component
 * @param {string} props.style Get the style object
 * @param {string} props.children Content of the Chip
 * The specific library props of Chip Component
 * @param {string} props.color The color of the Chip
 */

export interface IChipProps {
	color?: string;
}

const Chip = (props: IChip & IChipProps) =>
    (<Badge style={{ ...props.style }} pill={true} color={props.color} {...props}>{props.children}</Badge>);
export default Chip;