/*jshint esversion: 6 */
/* jshint node: true */
'use strict';
import { configure, setAddon } from '@storybook/react';
const req = require.context('../src', true, /.stories.tsx$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);