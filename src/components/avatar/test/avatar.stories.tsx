import * as React from 'react';
import { number, object, text, withKnobs } from '@storybook/addon-knobs';
import { Favorite } from 'bluerain-icons';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Avatar from '../../avatar';

const stories = storiesOf('Avatar', module);
stories.add('Avatar (with knobs)', () => {
	const content = text('content', 'abc');
	const colour = text('color', 'green');
	const size = number('size', 800);
	return <Avatar src="https://material-ui-next.com/static/images/remy.jpg" size={size} style={{ backgroundColor:colour }}>{content}</Avatar>;
});
stories.add('Avatar (withOut knobs)', () => {
	return  (
    <Avatar
        src="https://material-ui-next.com/static/images/remy.jpg"
        size={200}
    />);
});

stories.add('Avatar (with Icons)', () => {
	return  (
<div style={{ display:'flex', }}>
    <Avatar style={{ backgroundColor:'pink' }}>
    <Favorite />
    </Avatar>
    <Avatar style={{ backgroundColor:'grey' }}>
    <Favorite />
    </Avatar>
    <Avatar style={{ backgroundColor:'green' }}>
    <Favorite style={{ width:55, height: 55 }} />
    </Avatar>
</div>);
});

stories.add('Avatar with text', () => {
	return  (
<div style={{ display:'flex', }}>
    <Avatar style={{ backgroundColor:'grey' }}>
    H
    </Avatar>
    <Avatar style={{ backgroundColor:'orange' }}>
    N
    </Avatar>
    <Avatar style={{ backgroundColor:'purple' }}>
    OP
    </Avatar>
</div>);
});