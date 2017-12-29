import * as React from 'react';
import BadgeUi from '../../Badge';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Badge', module);
stories.add('Badge (with knobs)', () => {

    return <BadgeUi badgeContent={'test'}></BadgeUi>;
});