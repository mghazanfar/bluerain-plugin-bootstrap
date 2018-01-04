/**
 * Created by M.GhazanfarAli on 01/04/18.
 */

import * as React from 'react';
import { ICardMedia } from '@blueeast/bluerain-ui-interfaces/Components/Card';
import { CardImg } from 'reactstrap';

/**
 * The props of CardMedia Component
 * @param {Object} props.style style object for Card's style.
 * @param {string or function} props.tag tag with which the Component will be rendered.
 * @param {string} props.className className for styling component with css.
 * @param {string} props.src src of the image.
 */


 /**
 * Platform specific props
 * @param {boolean} props.top use top prop to assign styles for image at top position.
 * @param {boolean} props.bottom use bottom prop to assign styles for image at bottom position.
 */

export interface BSProps {
    top ?: boolean,
    bottom ?: boolean,
    }
 
const BlueRainCardMedia = (props: ICardMedia & BSProps) => {
    return (
        <CardImg
        {...props}
        />
    );

}

export default BlueRainCardMedia;