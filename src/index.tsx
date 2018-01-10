import React from 'react';
import { Plugin ,bluerain} from '@blueeast/bluerain-os';
import CarosuelComponent from './components/carousel';
import HomeBannerComponent from './components/homeBanner';

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
    ctx.Components.register('CarosuelComponent', CarosuelComponent);
    ctx.Components.register('HomeBannerComponent', HomeBannerComponent);
  }
}

export default BootstrapPlugin;
