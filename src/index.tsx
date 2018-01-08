import React from 'react';
import { Plugin ,bluerain} from '@blueeast/bluerain-os';
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

		ctx.Components.register('TextInput', TextInput);
		let theme = ctx.Configs.get('theme');
		if (!theme) {
			theme = {};
		}
	}
}

export default BootstrapPlugin;
