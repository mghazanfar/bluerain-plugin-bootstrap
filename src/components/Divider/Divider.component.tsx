import * as React from 'react';
import { DividerProperties } from '@blueeast/bluerain-ui-interfaces';


/**
 * The universal props of Divider Component
 * @param {ReactNode} props.light If true, Divider is generated with light color.
 *  The specific libraray props of Divider Component
 * @param {ReactNode} props.component component to generate Divider with.
 * @param {ReactNode} props.inset if true, Divider is generated indented.
 */

const Divider: React.ComponentType<any> = (props: DividerProperties) => {
	return (
        <hr style={{backgroundColor: props.light?'rgba(0, 0, 0, 0.075)': 'rgba(0, 0, 0, 0.12)', height: 1, margin: 0, border: 'none', flexShrink: 0}}/>
	);

};

export default Divider;