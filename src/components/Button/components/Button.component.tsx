/**
 * Created by M.GhazanfarAli on 12/27/17.
 */

import * as React from 'react';
import IButton from '@blueeast/bluerain-ui-interfaces/Components/Button';
import { Button } from 'reactstrap';

const BlueRainButton = (props: IButton) => {
    if(props.iconLeft){
        return (
            <Button color={props.color==='default' || !(props.color) ? 'primary': props.color} block={props.fullWidth} outline={props.bordered} size={props.large ? 'lg' : props.small ? 'sm' : ''} {...props}>{props.iconLeft} {props.children}</Button>
        );
    }
    else if(props.iconRight){
        return (
            <Button color={props.color==='default' || !(props.color) ? 'primary': props.color} block={props.fullWidth} outline={props.bordered} {...props}>{props.children} {props.iconRight}</Button>
        );
    }
    return (
        <Button color={props.color==='default' || !(props.color) ? 'primary': props.color} block={props.fullWidth} outline={props.bordered} size={props.large ? 'lg' : props.small ? 'sm' : ''} {...props}>{props.children}</Button>
    );

}

export default BlueRainButton;