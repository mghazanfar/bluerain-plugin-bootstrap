# Divider

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| light | bool | | If true, Divider is generated with light color. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| component | Node | hr | component to generate Divider with. |
| inset | bool |  | if true, Divider is generated indented. |
| absolute | bool | false | Position of component. |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from '@blueeast/bluerain-os';

const DividerSample = (props) => (
    const BR = props.bluerain;
    const Divider = BR.Components.get('Divider');
    return <Divider light={false} />;

export default withBluerain(DividerSample);
```

## Storybook

- 1st story of the Divider component in Divider.stories.tsx file is written for Divider with Knobs.
- 2nd story of the Divider component in DividerBadge.stories.tsx file is written for Divider MUI Props.

## Tests

- All the tests through jest are passed and create screenshot.