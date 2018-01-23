# Icon component

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| name | String |  | Name of the icon to be shown |
| color | String | | Color of the icon |
| size | String | | Size of the icon |


## How to use

```JavaScript
import React from 'react';
import {Icon} from 'react-fa';

const IconComponentSample = (props) => (
    const BR = props.bluerain;
    const IconComponent = BR.Components.get('Icon');
    <IconComponent name='home' color='black' size={200} />
)

export default IconComponentSample;
```

## Storybook

- 1st story of the Icon component in icon.stories.tsx file is written for Icon with knobs and props for icon name, color and size.

