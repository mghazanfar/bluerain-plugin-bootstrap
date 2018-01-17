import React from 'react';
// import { Icon } from '@blueeast/bluerain-ui-interfaces/Components/Icon';
import {Icon} from 'react-fa';

/**
 * The props of Footer Bar
 * @param {string} props.name The name of the icon
 * The icons are fonts and you can change the color of them just with the css color property.
 * So, changing the color of the font, you will change the background.
 * Now, fonts have no border-color property, but you can simulate it using text-shadow
 */

export interface IconProps {
    name?: string;
    color?: string;
    borderColor?: string;
}

const FooterBarComponent = (props: IconProps) =>
    (
      <Icon name={props.name} style={{color: props.color, textShadow: `-1px 0 ${props.borderColor}, 0 1px ${props.borderColor}, 1px 0 ${props.borderColor}, 0 -1px ${props.borderColor}`}} />
    );
export default FooterBarComponent;