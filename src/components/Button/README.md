# Button

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object | | style object for button. |
| children | Node | | Content of the button component. |
| color | enum: 'primary', 'secondary', 'warning', 'info', 'danger', 'success', 'light', 'dark', 'link' | 'primary' | Color of button component.|
| onPress | func | () => {} | Callback function fired when button is onPress. |
| disabled | bool |  | If true, renders a disabled button. |
| href | string | | href prop to move to a link. |
| fullWidth | bool |  | If true, button is generated with 100% width of the cnotainer. |
| active | bool |  | If true, button is generated with active state. |
| bordered | bool |  | If true, button is generated with border. |
| iconLeft | Node |  | icon prop to show icon on the left side of label. |
| iconRight | Node | | icon prop to show icon on the right side of label. |
| small | bool |  | If true, renders a small sized button. |
| large | bool |  | If true, renders a large sized button.|

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| tag | func, string | button | tag prop to generate component with any other component and not with default 'button'. |
| size | string |  | Useful to set size of button component. |

## How to use

```JavaScript
import React from 'react';
import Button from  'bluerain-plugin-bootstrap-ui/Button';

const buttonSample = () => (
       <Button fullWidth color='dark'>Press me!</Button>
);

export default buttonSample;
```

## Storybook

- 1st story of the Button component in Button.stories.tsx file is written with knobs to visualize the effects when different props are changed.

## Tests

- All the tests through jest are passed and create screenshot.