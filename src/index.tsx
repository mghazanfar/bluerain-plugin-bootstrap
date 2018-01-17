import React from 'react';
import { Plugin ,bluerain} from '@blueeast/bluerain-os';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Avatar from './components/avatar';
import Card , { CardBody, CardHeader, CardMedia, CardFooter} from './components/Card';
import List , { ListItem, ListHeader, ListItemAvatar, ListItemIcon, ListItemText, ListItemRightButton} from './components/List';

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
		ctx.Components.register('Avatar', Avatar);
        ctx.Components.register('List', List);
        ctx.Components.register('ListItem', ListItem);
        ctx.Components.register('ListHeader', ListHeader);
        ctx.Components.register('ListItemAvatar', ListItemAvatar);
        ctx.Components.register('ListItemIcon', ListItemIcon);
        ctx.Components.register('ListItemText', ListItemText);
        ctx.Components.register('ListItemRightButton', ListItemRightButton);
	}
}

export default BootstrapPlugin;
