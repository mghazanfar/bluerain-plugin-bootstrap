import React from 'react';
import { Plugin ,bluerain} from '@blueeast/bluerain-os';
import BadgeUi from './components/badge';
import Dropdown from './components/Dropdown';


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
        ctx.Components.register('BadgeUi', BadgeUi);
        ctx.Components.register('Dropdown', Dropdown);
    }
}

export default BootstrapPlugin;