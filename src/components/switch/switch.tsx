import * as React from 'react';
import 'rc-switch/assets/index.css';
import BR from '@blueeast/bluerain-os';
import Switch from 'rc-switch';
import { ISwitch } from '@blueeast/bluerain-ui-interfaces/Components/switch';

/**
 * The universal props of Switch Component
 * @param {boolean} props.disabled if true, switch is rendered in disabled form.
 * @param {boolean} props.value value of the switch.
 * @param {function} props.onValueChange Invoked with the new value when the value changes.
 * @param {Object} props.style Style object for switch component.
 * The Specific library props
 * @param {string} props.className CSS className to extend styling of component Switch.
 */

 export interface ISwitchProps {
     className?:string,
 }
const BlueRainSwitch = (props:ISwitch & ISwitchProps) => {
   return (
    <Switch
          onChange={props.onValueChange}
          disabled={props.disabled}
          className={props.className}
        />
    );

};

export default BlueRainSwitch;
