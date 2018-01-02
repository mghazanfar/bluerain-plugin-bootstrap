# Badge

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | Get the style object |
| badgeContent | ReactNode | | Content of the Badge |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| color | string |  | The color of the Badge. |

## How to use

```JavaScript
import React from 'react';
import Badge from  'dukaan-ui/Badge';

const BadgeSample = () => (
       <Badge badgeContent={123} style={{'color':'white','background-color':'green'}}/>
);

export default BadgeSample;
```

## Storybook

- 1st story of the Badge component in badge.stories.tsx file is written for Badge with default value.
- 2nd story of the Badge component in badge.stories.tsx file is written for Badge with knobs and prop "style".
- 3rd story of the Badge component in badge.stories.tsx file is written for Badge without knobs.

## Tests

- All the tests through jest are passed and create screenshot.
