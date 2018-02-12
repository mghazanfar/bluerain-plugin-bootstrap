# Divider

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| light | bool | | If true, Divider is generated with light color. |


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

## Tests

- All the tests through jest are passed and create screenshot.