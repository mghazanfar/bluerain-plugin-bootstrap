import React from 'react';
import { Plugin ,bluerain} from '@blueeast/bluerain-os';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Card , { CardBody, CardHeader, CardMedia, CardFooter} from './components/Card';

/**
 * Bootstrap Plugin
 * @property {string} pluginName "BootstrapPlugin"
 * @property {string} slug "bootstrap"
 */
class BootstrapPlugin extends Plugin {

	static pluginName = 'BootstrapPlugin';
	static slug = 'bootstrap';

	static initialize(config = {}, ctx:bluerain) {
		let theme = ctx.Configs.get('theme');
		if (!theme) {
			theme = {};
		}
        ctx.Components.register('Button', Button);
        ctx.Components.register('Card', Card);
        ctx.Components.register('CardHeader', CardHeader);
        ctx.Components.register('CardMedia', CardMedia);
        ctx.Components.register('CardBody', CardBody);
        ctx.Components.register('CardFooter', CardFooter);
		ctx.Components.register('TextInput', TextInput);
	}
}

export default BootstrapPlugin;
