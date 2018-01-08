# TextInput

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| autoFocus | boolean | false | TextInput gets focus on firstmount if true |
| multiline | boolean | | Allows multiline textInput |
| placeholder | string | | Placeholder of TextInput |
| editable | boolean |true | If false, TextInput is not editable |
| style | object | | This prop styles the TextInput |
| onChange | func | | Callback that is called when the text input's text changes. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| type | string | | Type attribute of the Input element. It should be a valid HTML5 input type. |
| name | string | | Name of input field |
| id | string | | The id of the input element. |
| multiple | boolean | | This bool is used for multiple selection in select type input|
| disabled | boolean | | If true, textfield is disabled |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from "@blueeast/bluerain-os";

function handleTextInputChange (value: any) {
   console.log('text input value', value.target.value);
}

const appPage = (props) => {
    const BR = props.bluerain;
    const TextInput = BR.Components.get('TextInput');
    return (
        <TextInput placeholder="hello" defaultValue="nooo" onChange={handleTextInputChange} autoFocus={true} />
    )
}

export default withBluerain(appPage);
```
