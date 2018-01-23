import { Plugin ,bluerain } from '@blueeast/bluerain-os';
import BadgeUi from './components/badge';
import Chip from './components/chip';
import IconComponent from './components/Icon';
import MapComponent from './components/map';
import React from 'react';

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
		ctx.Components.register('BadgeUi', BadgeUi);
		ctx.Components.register('MapComponent', MapComponent);
		ctx.Components.register('IconComponent', IconComponent);
	}
}

export default BootstrapPlugin;
