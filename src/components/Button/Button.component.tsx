/**
 * Created by M.GhazanfarAli on 12/27/17.
 */

import * as React from 'react';
import IButton from 'bluerain-ui-interfaces/Components/Button';
import { Button } from 'reactstrap';


/**
 * The props of Button Component
 * @param {Node} props.children Label to be passed as child.
 * @param {Object} props.style style object for button's style.
 * @param {enum} props.color color prop of type enum. Default color is 'primary'.
 * @param {function} props.onClick callback function fired when button is pressed.
 * @param {boolean} props.disabled if true, renders a disabled button.
 * @param {string} props.href href prop to move to a link.
 * @param {boolean} props.fullWidth if true, button is generated with 100% width of the cnotainer.
 * @param {boolean} props.active  if true, shows active state of the button.
 * @param {boolean} props.bordered if true, button is generated with border.
 * @param {Node} props.iconLeft icon prop to show icon on the left side of label.
 * @param {Node} props.iconRight icon prop to show icon on the right side of label.
 * @param {boolean} props.small if true, small button is generated.
 * @param {boolean} props.large if true, large button is generated.
 */

 export interface IBSProps {
 tag?: ()=> void | string | undefined,
 size?: string,
 }

const BlueRainButton = (props: IButton & IBSProps) => {
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

};

export default BlueRainButton;