import * as React from 'react';
import { Button } from '../../Button';

import { storiesOf } from '@storybook/react';

storiesOf('Button', module).add('Button with label in Child', () => <Button>Label</Button>);