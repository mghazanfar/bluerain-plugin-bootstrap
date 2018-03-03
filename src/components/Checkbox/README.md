# TextInput

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| disabled | boolean | false | If true, disable all interactions for this component. |
| onPress | ()=>{} |  | Callback when the checkbox is pressed. |
| color | string | | color of checkbox. (not supported for bootstrap). |
| label | Node |  | label to show with checkbox. |
| checked | boolean | | The value of the checkbox. If true the checkbox will be turned on. Default value is false. |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from "@blueeast/bluerain-os";

const Checkbox = (props) => {
    const BR = props.bluerain;
    return (
        <BR.Components.Checkbox label="disabled" color="red" disabled={true} checked={false}  />
    )
}

export default withBluerain(Checkbox);
```
