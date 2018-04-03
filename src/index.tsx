import * as React from 'react';
import { AppBar } from './components/AppBar';
import { BlueRain, BlueRainType , Plugin } from '@blueeast/bluerain-os';
import { ButtonProperties, CardMediaProperties, ListHeaderProperties, ListItemIconProperties, ListItemRightButtonProperties } from '@blueeast/bluerain-ui-interfaces';
import { Card, CardBody, CardFooter, CardHeader, CardMedia } from './components/Card';
import { ColorPicker } from './components/ColorPicker';
import { Divider } from './components/Divider';
import { List, ListHeader , ListItem, ListItemAvatar, ListItemIcon, ListItemRightButton, ListItemText } from './components/List';
import { TextInput } from './components/TextInput';
import { Avatar } from './components/Avatar';
import { Breadcrumb } from './components/Breadcrumb';
import { Button } from './components/Button';
/**
 * BootstrapPlugin Plugin
 * @property {string} pluginName "BootstrapPlugin"
 * @property {string} slug "botstrap"
 */

class BootstrapPlugin extends Plugin {
	static pluginName = 'BootstrapPlugin';
	static slug = 'bootstrap';

	static components = {
		AppBar,
		Avatar,
		Button,
		Card,
		CardHeader,
		CardBody,
		CardMedia,
		CardFooter,
		ColorPicker,
		Divider,
		List,
		ListHeader,
		ListItem,
		ListItemAvatar,
		ListItemIcon,
		ListItemRightButton,
		ListItemText,
		TextInput,
		Breadcrumb, // Deprecated, remove in next semver major version
	};

	// static hooks = {
	// 	'bluerain.system.initialized': (BR: BlueRain) => {
	// 		BR.Components.addHocs('SystemLayout', withReboot);
	// 	},
	// };
}

export default BootstrapPlugin;