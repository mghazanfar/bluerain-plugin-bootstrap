<<<<<<< HEAD

import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import BR, { BlueRainProvider } from '@blueeast/bluerain-os';
import 'bootstrap/dist/css/bootstrap.css';
=======
import React from 'react';
import { IntlProvider } from 'react-intl';
import { initializeRTL } from 'storybook-addon-rtl';
import { BlueRainProvider } from '@blueeast/bluerain-os';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import urLocaleData from 'react-intl/locale-data/ur';
import zhLocaleData from 'react-intl/locale-data/zh';
import arLocaleData from 'react-intl/locale-data/ar';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import 'bootstrap/dist/css/bootstrap.css';

initializeRTL();
setAddon();

addLocaleData(enLocaleData);
addLocaleData(arLocaleData);
addLocaleData(urLocaleData);
addLocaleData(zhLocaleData);

const messages = {
	'en': require('../src/lang/en.json'),
	'ur': require('../src/lang/ur.json'),
	'ar': require('../src/lang/ar.json'),
	'zh': require('../src/lang/zh.json'),


};

const getMessages = (locale) => messages[locale];

// Set intl configuration
setIntlConfig({
	locales: ['en', 'ur','ar','zh'],
	defaultLocale: 'en',
	getMessages
});


addDecorator(withIntl);
addDecorator(withKnobs);
const req = require.context('../src/', true, /.stories.tsx$/);
>>>>>>> a5325f815057dc12ba2ab481ca691f64a58b06b8

// Add BlueRain
const BluerainApp = BR.boot({platform: [require('@blueeast/bluerain-platform-reactxp')], renderApp: false });
const BlueRainDecorator = (storyFn) => (<BlueRainProvider>{storyFn()}</BlueRainProvider>);
addDecorator(BlueRainDecorator);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
<<<<<<< HEAD
	req.keys().forEach((filename) => req(filename));
}
configure(loadStories, module);
=======
	req.keys().forEach((filename) => req(filename))
}

addDecorator(story => (
  <IntlProvider locale={navigator.language}>
    <BlueRainProvider>
          {story()}
    </BlueRainProvider>
  </IntlProvider>
));



configure(loadStories, module);
>>>>>>> a5325f815057dc12ba2ab481ca691f64a58b06b8
