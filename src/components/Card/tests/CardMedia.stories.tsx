import * as React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';

import { CardMedia } from '../../Card';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';

BR.boot({ renderApp:false });


storiesOf('CardMedia', module).add('CardMedia with src prop', () =>
<CardMedia src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"/>);

storiesOf('CardMedia', module).add('CardMedia with tag prop', () =>
<CardMedia src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"/>);

storiesOf('CardMedia', module).add('CardMedia with className prop', () =>
<CardMedia className="bg-img" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" />);

storiesOf('CardMedia', module).add('CardMedia with style prop', () =>
<CardMedia src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" style={{ width:200 }} />);