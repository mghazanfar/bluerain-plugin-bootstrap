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
    size?: string;
}
let iconName;
const FooterBarComponent = (props: IconProps) => {
  const {
    name,
    size,
    color
  } = props;
  switch(name) {
    case 'cart':
      iconName = 'shopping-cart';
      break;
    case 'menu':
      iconName = 'bars';
      break;
    case 'settings':
      iconName = 'gear';
      break;
    default:
      iconName = name;
  }
  return (
    <Icon name={iconName} style={{fontSize: size, color: color}} />
  );
};
export default FooterBarComponent;