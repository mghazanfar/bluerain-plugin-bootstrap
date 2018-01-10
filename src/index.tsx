import React from 'react';
import { Plugin ,bluerain} from '@blueeast/bluerain-os';
import Chip from './components/chip';
import BadgeUi from './components/badge';
import TextInput from './components/TextInput';
import MapComponent from './components/map';
import Avatar from './components/avatar';
import Button from './components/Button';
import Dropdown from './components/DropDown';
import Switch from './components/switch';
import Slider from './components/slider';
import Card, {CardHeader, CardMedia, CardBody, CardFooter} from './components/Card';


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
        ctx.Components.register('Slider', Slider);
    }
}

export default BootstrapPlugin;
