# Breadcrumb

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| label | string | Home | Label of the Breadcrumb component to be shown as disabled. |
| data | [ { } ] | | Data should be an object of title and pathname of types "node" and "string" respectively i.e. [ { title: ' ', pathname: '/' }] |
| colorActive | string | black | Color of the text of current page name. Can be string consisting of rgba, hsl, name or #code format. |
| colorPrev | string | dodgerblue | Color of the text of previous page name. Can be string consisting of rgba, hslava, name or #code format. |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from '@blueeast/bluerain-os';

const Breadcrumb = (props) => (
    const BR = props.bluerain;
    const Breadcrumb = BR.Components.get('Breadcrumb');
    return (<Breadcrumb
      style={{ padding: 20, backgroundColor:'white' }}
      data={[{ title:'CardView', path: 'www.facebook.com' }]}
      label={'Site'}
      colorPrev={'red'}
      colorActive={'yellow'}
    />);

export default withBluerain(Breadcrumb);
```

## Storybook

- All the tests through storyshots are passed.