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

function loadStories() {
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