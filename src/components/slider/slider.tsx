import * as React from 'react';
import 'rc-slider/assets/index.css';
import BR from '@blueeast/bluerain-os';
import Slider from 'rc-slider';
import { ISlider } from '@blueeast/bluerain-ui-interfaces/Components/Slider';

/**
 * The universal props of Slider Component
 * @param {boolean} props.disabled if true, slider is rendered in disabled form.
 * @param {number} props.value value of the slider.
 * @param {number} props.step value of step for the slider.
 * @param {number} props.maxValue maxValue of the slider.
 * @param {number} props.minValue minValue of the slider.
 * @param {function} props.onSlidingComplete Invoked when the slider is completely stopped.
 * @param {function} props.onValueChange Invoked when the value changes.
 * @param {Object} props.style Style object for switch component.
 * The Specific library props
 */

 export interface ISwitchProps {
     className?:string,
 }
const BlueRainSlider = (props:ISlider & ISwitchProps) => {
   return (
    <Slider
        disabled={props.disabled}
        min={props.minimumValue}
        max={props.maximumValue}
        step={props.step}
        defaultValue={props.defaultValue}
        onChange={props.onValueChange}
        onAfterChange={props.onSlidingComplete}
        className={props.className}
      />
    );

};

export default BlueRainSlider;
