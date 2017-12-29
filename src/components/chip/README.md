# Logo

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| altText | string | Logo | The Alter text of the Logo Component when image not found |
| src | string | | The source of the logo image in Logo Component |
| to | string |  | The Url of the desired page in Logo Component |

## Component Usages

1. If 'to' prop is not provided, then link is disabled.

## How to use

```JavaScript
import React from 'react';
import Logo from  'dukaan-ui/Logo';
import { MemoryRouter } from 'react-router-dom';

const LogoSample = () => (
    <MemoryRouter>
        <Logo
            src='imagename.png'
            altText='Logo image',
            to='testLogoUrl'
        />
    </MemoryRouter>
);

export default LogoSample;
```

## Storybook

- 1st story of the Logo component in logo.stories.tsx file is written for Header logo with knobs and props "src","altText","to","linkTag".
- 2nd story of the Logo component in logo.stories.tsx file is written for Header logo without default values only use prop "src".
- 3rd story of the Logo component in logo.stories.tsx file is written for Footer logo with knobs and props "src","altText","to","linkTag".
- 4th story of the Logo component in logo.stories.tsx file is written for Footer logo without default values only use prop "src".

## Tests

- All the tests through jest are passed and create screenshot.
