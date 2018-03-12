# AppBar

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | Get the style object |
| color | enum: 'primary', 'success', 'secondary', 'light', 'dark','danger', 'info', 'warning', undefined | | Background color for AppBar. |
| children | Node | | Children of AppBar. |
| position | 'sticky' | 'fixed' | undefined | | position of AppBar. |
| className | string | | className props to extend styles through CSS for AppBar. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| expand | enum: 'xl', 'lg', 'md', 'sm', 'md' |  | Define from enum, the screen size where you want AppBar to expand (default 'sm'). |
| logo | Node |  |Write/addLogo on the logo's position. |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from '@blueeast/bluerain-os';

const AppBar = (props) => (
    const BR = props.bluerain;
    const AppBar = BR.Components.get('AppBar');
    const Button = BR.Components.get('Button');
    const Text = BR.Components.get('Text');
    return(<AppBar position="fixed" color="success">
    <li>
      <a href="/components/">Components</a>
    </li>
    <li>
      <a href="https://github.com/reactstrap/reactstrap">Github</a>
    </li>
      </AppBar>);

export default withBluerain(AppBar);
```

## Storybook

- All stories of the AppBar component in AppBar.stories.tsx file show variants of AppBar.

## Tests

- All the tests through jest are passed and create screenshot.