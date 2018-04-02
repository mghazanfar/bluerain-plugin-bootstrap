
import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import BR, { BlueRainProvider } from '@blueeast/bluerain-os';
import 'bootstrap/dist/css/bootstrap.css';

// Add BlueRain
const BluerainApp = BR.boot({platform: [require('@blueeast/bluerain-platform-reactxp')], renderApp: false });
const BlueRainDecorator = (storyFn) => (<BlueRainProvider>{storyFn()}</BlueRainProvider>);
addDecorator(BlueRainDecorator);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
	req.keys().forEach((filename) => req(filename));
}
configure(loadStories, module);
