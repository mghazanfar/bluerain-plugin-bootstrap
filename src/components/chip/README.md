# Chip

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | Get the style object |
| children | ReactNode | | Content of the Chip |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| color | string |  | The color of the Chip. |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from "@blueeast/bluerain-os";

const ChipSample = (props) => (
    const BR = props.bluerain;
    const Chip = BR.Components.get('Chip');
    <Chip style={{'color':'white','background-color':'green'}}>10 % off</Chip>
);

export default withBluerain(ChipSample);
```

## Storybook

- 1st story of the Chip component in chip.stories.tsx file is written for Chip with default value.
- 2nd story of the Chip component in chip.stories.tsx file is written for Chip with knobs and prop "style".
- 3rd story of the Chip component in chip.stories.tsx file is written for Chip without knobs and prop.

## Tests

- All the tests through jest are passed and create screenshot.
