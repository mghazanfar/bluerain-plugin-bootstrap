# DropDown

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| children | ReactNode | | children of the component |

## DropDown Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| type | string |  |type of the input  |
| size | string | | size of feild |
| bsSize | string | | size of the base |
| valid | boolean | | validations of field |
| innerRef | function | | For inner component |
| tag | string | | default: 'div' unless nav=true, then 'li'. |
| plaintext | boolean | | For plaintext |
| addon | boolean | | addon handling |
| className | string | | implements a specific class  |
| cssModule | object | | cssModule for styles  |


## How to use

```JavaScript
import React from 'react';
import { withBluerain } from "@blueeast/bluerain-os";

const DropDown = (props) => {
    const BR = props.bluerain;
    const {DropDown} = BR.Components.get('DropDown');
    return (
         <DropDown type="select">
            <option>111111</option>
            <option>222222</option>
            <option>333333</option>
         </DropDown>
    )
};
export default withBluerain(DropDown);
```