import * as React from 'react';
import FooterBarComponent from './footerBar';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

const stories = storiesOf('Footer Bar', module);

stories.add('Footer Icons', () => {
    const name = text('Icon Name', 'home');
    const color = text('Icon Color', 'black');
    const borderColor = text('Icon Border Color', 'green');
  return <FooterBarComponent name={name} color={color} borderColor={borderColor} />;
});
