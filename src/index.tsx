import React from 'react';
import { Plugin ,bluerain} from '@blueeast/bluerain-os';
import CarosuelComponent from './components/carousel';
/**
 * Bootstrap Plugin
 * @property {string} pluginName "BootstrapPlugin"
 * @property {string} slug "bootstrap"
 */
class BootstrapPlugin extends Plugin {

	static pluginName = 'BootstrapPlugin';
	static slug = 'bootstrap';

	static initialize(config = {}, ctx:bluerain) {

		ctx.Components.register('CarosuelComponent', CarosuelComponent);
		let theme = ctx.Configs.get('theme');
		if (!theme) {
			theme = {};
		}
	}
}

export default BootstrapPlugin;
