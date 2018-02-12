/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { CardFooterProp } from '@blueeast/bluerain-ui-interfaces';
import { withBlueRain, BlueRainType } from '@blueeast/bluerain-os';

/**
 * The props of ListItemRightButton Component
 * @param {Object} props.style style object for ListItemRightButton's style.
 * @param {Node} props.children children of ListItemRightButton (expects a Button).
 */

 export interface IBSProps {
     bluerain?: BlueRainType,
 }

const ListItemRightButton = (props: CardFooterProp & IBSProps) => {
    const View = props.bluerain.Components.get('View');
    const Right = {...props.style, float:'right'};
    return (
        <View
            {...props}
            style={Right}
        >
        {props.children}
        </View>
    );

};

export default withBlueRain(ListItemRightButton);