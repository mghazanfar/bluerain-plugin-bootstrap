import React from 'react';
import { Plugin ,bluerain} from '@blueeast/bluerain-os';
import TextInput from './components/TextInput';
import AppBar from './components/AppBar';
import Button from './components/Button';
import Avatar from './components/Avatar';
import Breadcrumb from './components/Breadcrumb';
import Card , { CardBody, CardHeader, CardMedia, CardFooter} from './components/Card';
import Checkbox from './components/Checkbox';
import Divider from './components/Divider';
import List , { ListItem, ListHeader, ListItemAvatar, ListItemIcon, ListItemText, ListItemRightButton} from './components/List';
import {Dialog,DialogBody,DialogFooter,DialogHeader}from './components/Dialog'
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
        ctx.Components.has('Button') ? ctx.Components.replace('Button', Button) : ctx.Components.set('Button', Button);
        ctx.Components.set('Card', Card);
        ctx.Components.set('CardHeader', CardHeader);
        ctx.Components.set('CardMedia', CardMedia);
        ctx.Components.set('CardBody', CardBody);
        ctx.Components.set('CardFooter', CardFooter);
        ctx.Components.set('Checkbox', Checkbox);
        ctx.Components.has('TextInput') ? ctx.Components.replace('TextInput', TextInput) : ctx.Components.set('TextInput', TextInput);
		ctx.Components.set('Avatar', Avatar);
        ctx.Components.set('Dialog', Dialog);
        ctx.Components.set('DialogHeader', DialogHeader);
        ctx.Components.set('DialogBody', DialogBody);
        ctx.Components.set('DialogFooter', DialogFooter);
        ctx.Components.set('List', List);
        ctx.Components.set('ListItem', ListItem);
        ctx.Components.set('ListHeader', ListHeader);
        ctx.Components.set('ListItemAvatar', ListItemAvatar);
        ctx.Components.set('ListItemIcon', ListItemIcon);
        ctx.Components.set('ListItemText', ListItemText);
        ctx.Components.set('ListItemRightButton', ListItemRightButton);
        ctx.Components.set('Breadcrumb', Breadcrumb);
        ctx.Components.set('Divider', Divider);
        ctx.Components.set('AppBar', AppBar);
	}
}

export default BootstrapPlugin;
