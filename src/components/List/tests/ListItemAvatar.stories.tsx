import * as React from 'react';
import { ListItemAvatar } from '../../List';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false});


storiesOf('ListItemAvatar', module).add('ListItemAvatar with size and src props', () =>
<ListItemAvatar
    src="https://lh3.googleusercontent.com/-XSLXxx7YjLs/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT4iEH_45OgsOLVCGU8YKIKqLuVtcQ/s32-c-mo/photo.jpg"
    size={80}
    />);
