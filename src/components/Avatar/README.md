# Avatar

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | Get the style object |
| src | string | | src of image. |
| children | Node | | Children of avatar. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| alt | string |  | string to be shown if image was not rendered due to any error. |
| classes | object | | classes prop to override styling. |
| component | string or function | 'div' | Component with which the avatar will be rendered |
| imgProps | Object |  | Props of image tag. |
| sizes | string | | sizes of image. |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from '@blueeast/bluerain-os';

const Avatar = (props) => (
    const BR = props.bluerain;
    const Avatar = BR.Components.get('Avatar');
    return <Avatar alt="Remy Sharp" src="https://material-ui-next.com/static/images/remy.jpg" style={{height:35, width:35}} />;

export default withBluerain(Avatar);
```

## Storybook

- 1st story of the Avatar component in avatar.stories.tsx file is written for Avatar with Knobs.

## Tests

- All the tests through jest are passed and create screenshot.