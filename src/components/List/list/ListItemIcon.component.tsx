/**
 * Created by M.GhazanfarAli on 01/15/18.
 */

import * as React from 'react';
import { ListItemIconProperties } from '@blueeast/bluerain-ui-interfaces';
import { withBlueRain, BlueRainType } from '@blueeast/bluerain-os';


/**
 * The props of ListItemIcon Component
 * @param {Object} props.style style object for ListItemIcon's style.
 * @param {Node} props.children tag with which the Component will be rendered.
 */

 export interface IBSProps {
     bluerain?: BlueRainType,
 }
const ListItemIcon: React.ComponentType<any> = (props: ListItemIconProperties & IBSProps) => {
    const View = props.bluerain.Components.get('View');
    return (
        <View
            {...props}
        >
        {props.children}
        </View>
    );

};

export default withBlueRain(ListItemIcon);