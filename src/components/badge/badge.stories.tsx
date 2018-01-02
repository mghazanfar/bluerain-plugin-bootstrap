import * as React from 'react';
import BadgeUi from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

const stories = storiesOf('Badge', module);
const BadgeDefaultStyle = {'color':'white','background-color':'green'};


stories.add('Badge with default value', () => {
    return <BadgeUi badgeContent={'1'} color="primary"/>;
});

stories.add('Badge with style', () => {
    // const styleProps = {'background-color': backgroundColor};
    const style = object('Style of Badge',BadgeDefaultStyle);
    const content = text('Text', '007');
    return <BadgeUi badgeContent={content} style={style}/>;
});

stories.add('Badge without knobs', () => {
    return <BadgeUi badgeContent={'3'} style={BadgeDefaultStyle}/>;
});