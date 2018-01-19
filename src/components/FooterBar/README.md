# Footer Bar

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

const FooterBarSample = (props) => (
    const BR = props.bluerain;
    const FooterBarComponent = BR.Components.get('FooterBarComponent');
    <FooterBarComponent name='home' color='black' size={200} />
)

export default FooterBarSample;
```

## Storybook

- 1st story of the Footer Bar component in footerBar.stories.tsx file is written for Footer Bar with knobs and props for icon name, color and size.

