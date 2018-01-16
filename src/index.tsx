import React from 'react';
import { Plugin ,bluerain} from '@blueeast/bluerain-os';
import Chip from './components/chip';
import BadgeUi from './components/badge';
import MapComponent from './components/map';
import CarouselComponent from './components/carousel';


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
        ctx.Components.register('CarouselComponent', CarouselComponent);
    }
}

export default BootstrapPlugin;
