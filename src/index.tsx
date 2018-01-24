import Card, { CardBody, CardFooter, CardHeader, CardMedia } from './components/Card';
import { Plugin ,bluerain } from '@blueeast/bluerain-os';
import Avatar from './components/avatar';
import BadgeUi from './components/badge';
import Button from './components/Button';

import Chip from './components/chip';
import Dropdown from './components/DropDown';
import MapComponent from './components/map';

import React from 'react';
import Switch from './components/switch';
import TextInput from './components/TextInput';


/**
 * Bootstrap Plugin
 * @property {string} pluginName "BootstrapPlugin"
 * @property {string} slug "bootstrap"
 */
class BootstrapPlugin extends Plugin {

	static pluginName = 'BootstrapPlugin';
	static slug = 'bootstrap';

	static initialize(config:any = {}, ctx:bluerain) {

		let theme = ctx.Configs.get('theme');
		if (!theme) {
			theme = {};
		}
		ctx.Components.register('Chip', Chip);
		ctx.Components.register('Avatar', Avatar);
		ctx.Components.register('Button', Button);
		ctx.Components.register('TextInput', TextInput);
		ctx.Components.register('BadgeUi', BadgeUi);
		ctx.Components.register('Dropdown', Dropdown);
		ctx.Components.register('MapComponent', MapComponent);
		ctx.Components.register('Card', Card);
		ctx.Components.register('CardHeader', CardHeader);
		ctx.Components.register('CardMedia', CardMedia);
		ctx.Components.register('CardBody', CardBody);
		ctx.Components.register('CardFooter', CardFooter);
		ctx.Components.register('Avatar', Avatar);
		ctx.Components.register('Switch', Switch);
	}
}

export default BootstrapPlugin;
