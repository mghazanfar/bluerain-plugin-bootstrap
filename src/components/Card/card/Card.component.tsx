/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { CardProperties } from '@blueeast/bluerain-ui-interfaces';
import { Card } from 'reactstrap';

/**
 * The props of Card Component
 * @param {Node} props.children Label to be passed as child.
 * @param {Object} props.style style object for Card's style.
 * @param {boolean} props.raised If true, card is generated with raised styling.
 * @param {string or function} props.tag tag with which the Component will be rendered.
 * @param {string} props.className className for styling component with css.
 */

 /**
  * Platform specific props
  * @param {string} props.color background color of the card.
  * @param {boolean} props.inverse If true, turns text color of card into white.
  * @param {boolean} props.body If true, card is generated with body specific styling.
  */

 export interface IBSProps {
 color?: string,
 inverse?: boolean,
 body?: boolean,
 }

const BlueRainCard: React.ComponentType<any> = (props: CardProperties & IBSProps) => {
    const raisedFalse = {...props.style, border:0};
    return (
        <Card
        {...props}
        style = { !(props.raised) ? raisedFalse : props.style }
        tag={props.tag}
        className={props.className}
        >
        {props.children}
        </Card>
    );

};

export default BlueRainCard;