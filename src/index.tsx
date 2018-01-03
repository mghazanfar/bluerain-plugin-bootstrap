import React from 'react';
import { Plugin ,bluerain} from '@blueeast/bluerain-os';
import BadgeUi from './components/badge';


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
    }
}

export default BootstrapPlugin;