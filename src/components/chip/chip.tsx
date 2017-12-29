/**
 * Created by Ghazal Taimur on 12/29/17.
 */
import * as React from 'react';
import { Badge } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { IChip } from '@blueeast/bluerain-ui-interfaces/Components/Chip';

/**
 * The props of Chip Component
 * @param {Object} props.style Get the style object
 * @param {ReactNode} props.children Content of the Chip
 */
export default class Chip extends React.Component<any, IChip> {
    constructor(props: IChip){
        super(props);
    }

    public render() {
        return (
            <Badge style={{...this.props.style}} {...this.props} pill>{this.props.children}</Badge>
        );
    }
}