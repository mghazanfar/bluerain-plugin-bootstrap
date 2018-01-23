import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import FooterBarComponent from './icon';
import React from 'react';

const stories = storiesOf('Footer Bar', module);

stories.add('Footer Icons', () => { const name = text('Icon Name', 'home');const color = text('Icon Color', 'black');const size = text('Icon Size', 200);return <FooterBarComponent name={name} color={color} size={size} />;
});
