import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BadgeUi from './index';
import React from 'react';

const stories = storiesOf('Badge', module);
const BadgeDefaultStyle = { 'color':'white','background-color':'green' };


stories.add('Badge with default value', () => {return <BadgeUi badgeContent={'1'} color="primary"/>;
});

stories.add('Badge with style', () => {const style = object('Style of Badge',BadgeDefaultStyle);const content = text('Text', '007');return <BadgeUi badgeContent={content} style={style}/>;
});

stories.add('Badge without knobs', () => {return <BadgeUi badgeContent={'3'} style={BadgeDefaultStyle}/>;
});