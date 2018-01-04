# Card

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object | | style object for Card. |
| children | Node | | Children of Card component. |
| raised | bool | true | If true, Card is generated with raised styling (with border).|
| tag | string or func | div | Tag with which the Component will be rendered. |
| className | string |  | className for styling component with css. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| color | string | white | color of the background of Card component. |
| inverse | bool | false | If true, turns text color of card into white. |
| body | bool | false | If true, card is generated with body specific styling. |

# CardHeader

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object | | style object for CardHeader. |
| children | Node | | Children of CardHeader component. |
| title | Node | | title of the CardHeader.|
| tag | string or func | div | Tag with which the Component will be rendered i.e. h1,p and b etc. |
| className | string |  | className for styling component with css. |

# CardMedia

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | style object for CardMedia. |
| src | string |  | src for the CardMedia.|
| tag | string or func | img | Tag with which the Component will be rendered. |
| className | string |  | className for styling component with css. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| top | bool | false | use top prop to assign position of component at top. |
| bottom | bool | false | use bottom prop to assign position of component at bottom. |

# CardBody

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | style object for CardBody. |
| children | Node | | Children of CardBody component. |
| className | string |  | className for styling component with css. |

# CardFooter

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | style object for CardFooter. |
| children | Node | | Children of CardFooter component. |
| className | string |  | className for styling component with css. |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from "@blueeast/bluerain-os";


const myCard = (props) => {
    const BR = props.bluerain;
    const Card = BR.Components.get('Card');
    const CardMedia = BR.Components.get('CardMedia');
    const CardBody = BR.Components.get('CardBody');
    return (
    <Card style={{width:300}} >
        <CardMedia top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" />
        <CardBody>
          <h2>Card Title</CardTih2tle>
          <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p>
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </CardBody>
    </Card>
    );
}

export default withBluerain(myCard);
```

## Storybook

- 1st story of the Card component in Card.stories.tsx file is written with knobs to visualize the effects when different props are changed.

## Tests

- All the tests through jest are passed and create screenshot.