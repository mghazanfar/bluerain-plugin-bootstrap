import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import IconComponent from './icon';
import React from 'react';

const stories = storiesOf('Icon Component', module);

stories.add('Icons', () => { const name = text('Icon Name', 'home');const color = text('Icon Color', 'black');const size = text('Icon Size', 200);return <IconComponent name={name} color={color} size={size} />;
});
