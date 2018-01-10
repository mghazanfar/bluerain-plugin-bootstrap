# Switch

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | Get the style object |
| disabled | bool | | if true, switch is rendered in disabled form.. |
| value | bool | | value of the switch. |
| onValueChange | function | | Invoked with the new value when the value changes. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| className | string | | css className to extend component styling. |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from '@blueeast/bluerain-os';

const Switch = (props) => (
    const BR = props.bluerain;
    const Switch = BR.Components.get('Switch');
    return <Switch disabled={false} value={true} onValueChange={console.log('Value is changed!')} />;

export default withBluerain(Switch);
```

## Storybook

- 1st story of the Switch component in avatar.stories.tsx file is written for Switch with Knobs.

## Tests

- All the tests through jest are passed and create screenshot.