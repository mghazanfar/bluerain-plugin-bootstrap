import React from 'react';
import { Plugin ,bluerain} from '@blueeast/bluerain-os';
import Chip from './components/chip';
import BadgeUi from './components/badge';
import TextInput from './components/TextInput';
import MapComponent from './components/map';
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
        ctx.Components.register('TextInput', TextInput);
        ctx.Components.register('BadgeUi', BadgeUi);
        ctx.Components.register('MapComponent', MapComponent);
        ctx.Components.register('Card', Card);
        ctx.Components.register('Card', CardHeader);
        ctx.Components.register('Card', CardMedia);
        ctx.Components.register('Card', CardBody);
        ctx.Components.register('Card', CardFooter);
    }
}

export default BootstrapPlugin;
