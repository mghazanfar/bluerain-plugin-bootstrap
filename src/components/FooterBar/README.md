# Footer Bar

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| name | String |  | Name of the icon to be shown |
| color | String | | Color of the icon |
| borderColor | String | | Border color of the icon |


## How to use

```JavaScript
import React from 'react';
import {Icon} from 'react-fa';

const FooterBarSample = (props) => (
    const BR = props.bluerain;
    const FooterBarComponent = BR.Components.get('FooterBarComponent');
    <FooterBarComponent name={name} color={color} />
)

export default FooterBarSample;
```

## Storybook

- 1st story of the Footer Bar component in footerBar.stories.tsx file is written for Footer Bar with knobs and props for icon name, color and border color.

