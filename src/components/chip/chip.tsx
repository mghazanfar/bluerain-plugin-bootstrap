/**
 * Created by Ghazal Taimur on 12/29/17.
 */
import * as React from 'react';
import { Badge } from 'reactstrap';
import { IChip } from '@blueeast/bluerain-ui-interfaces/Components/Chip';

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
class Chip extends React.Component<IChip & IChipProps, {}> {
    render() {
      return (<Badge style={{...this.props.style}} pill color={this.props.color} {...this.props}>{this.props.children}</Badge>);
    }
}
 export default Chip;