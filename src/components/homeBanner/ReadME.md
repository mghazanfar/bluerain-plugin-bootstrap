# Home Banner component

## Component Usages

 Home banner component will be used to show the banner on home screen on which user can see different products as a slider.

## Props

| Name | Type | Default | Description | Required
|:---|:-----|:--------|:------------|-----------
| dots | boolean | true | Show dots or not  | optional |
| keyboard | boolean | false | Keyboard click scrolling is active or not | optional |
| animate | boolean | true | Animate while transition | optional |
| activeIndex | number | 0 | Current slide to be shown | optional |
| altText | any | myImage | Alternative text for the image | optional |
| banners | array | [] | The array in which all data to be shown will come | required |


## Knobs

Knobs are added for props.

- dots
- keyboard
- animate
- activeIndex
- altText
- banners

## Internationalization

Multiple Languages are supported for alternative text of the image.

## Test

Jest Testing through storyshots

## Storybook

- 1st story of the Home banner component in homeBanner.stories.tsx file is written for home banner component with knobs and props "dots","keyboard", "animate", "altText", "banners".
- 2nd story of the Home banner component in homeBanner.stories.tsx file is written for home banner component without knobs and props "dots","keyboard", "animate", "altText", "banners".
- 3rd story of the Home banner component in homeBanner.stories.tsx file is written for home banner component without knobs and with default values for "dots","keyboard", "animate", "altText", "banners".