# Carousel component

## Component Usages

 Carousel component will be used to show slider view whatever data is passed to it. Data can be images or product cards etc.

## Props

| Name | Type | Default | Description | Required
|:---|:-----|:--------|:------------|-----------
| dots | boolean | true | Show dots or not  | no |
| keyboard | boolean | false | Keyboard click scrolling is active or not | no |
| animate | boolean | true | Animate while transition | no |
| activeIndex | number | 0 | Current slide to be shown | no |
| banners | any | () | Data to scroll can be passed in any form | no |


## Knobs

Knobs are added for props.

- dots
- keyboard
- animate
- activeIndex
- banners

## Test

Jest Testing through storyshots

## Storybook

- 1st story of the Carousel component in Carousel.stories.tsx file is written for first carousel component for showing product cards in slider with knobs and props "dots", "keyboard", "animate", "activeIndex", "banners".
- 2nd story of the Carousel component in Carousel.stories.tsx file is written for second carousel component for showing simple images in slider with knobs and props "dots", "keyboard", "animate", "activeIndex", "banners".