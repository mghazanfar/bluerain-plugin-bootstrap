import React from 'react';
import { withBlueRain, BlueRainType } from '@blueeast/bluerain-os';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { BreadcrumbProperties } from '@blueeast/bluerain-ui-interfaces';

/**
 * The props of Breadcrumb Component
 * @param {string} props.label The label of the Breadcrumb Component
 * @param {Array} props.data Array of object of data containing label and path of breadcrumb as an object
 * @param {string} props.colorActive The color of the active (current) page's label
 * @param {string} props.colorPrev The color of the previous page(s)'s label(s)
 */

const styles = {
	root: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	colorPrev: {
		color: 'dodgerblue',
		textDecoration: 'none',
	},
	colorActive: {
		color: 'black',
	},
	black: {
		color: 'black',
	},
};

const BlueRainBreadcrumb: React.ComponentType<any> = (props: BreadcrumbProperties) => {

	const label = props.label ? props.label : 'Home';

	if (props.data) {
		const listItems = props.data.map(item =>
<BreadcrumbItem active key={item.title}><a href={item.path} style={{ color: props.colorPrev ? props.colorPrev : '#007bff' }}>{item.title}</a></BreadcrumbItem>);
		return (
  <Breadcrumb style={styles.root} >{listItems}<BreadcrumbItem style={props.colorPrev ? { color: props.colorActive } : styles.colorActive}>{label}</BreadcrumbItem></Breadcrumb>);
	}
	return (<Breadcrumb><BreadcrumbItem style={props.colorPrev ? { color: props.colorActive } : styles.colorActive}>{label}</BreadcrumbItem></Breadcrumb>);

};

export default withBlueRain(BlueRainBreadcrumb);