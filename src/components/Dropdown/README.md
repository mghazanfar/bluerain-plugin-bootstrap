# DropDown

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| selectedValue | any |  | value of selection |
| onValueChange | function | | callback Function for handle change |
| children | Node[] | | Children will be passed as an array of Node. |

## Specific Library Props

## How to use

```JavaScript
import React from 'react';
import  { BlueRainConsumer, BlueRain } from  '@blueeast/bluerain-os';

const DropDown = () => {
    return(
<BlueRainConsumer>{(BR:BlueRain) => {
    return(
    <BR.Components.Dropdown onValueChange={onChange} selectedValue={'hello'} style={style.dropdown}>
        {['Item1', 'Item2', 'Item3']}
    </BR.Components.Dropdown>);}}
</BlueRainConsumer>
);
};

export default withBlueRain(DropDown);
```

## Tests

Unit tests are passed and storyshot tests are also passed.