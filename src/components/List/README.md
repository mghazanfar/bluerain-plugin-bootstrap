# List

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object | | style object for List. |
| children | Node | | Children of List component. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| className | string |  | className to give css styling. |

# ListItem

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object | | style object for ListItem. |
| children | Node | | Children of ListItem component. |
| active | bool | | If true, ListItem is rendered in active state. |

## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| className | string |  | className to extend styling of Listitem. |
| color | enum |  | background color of ListItem. |
| tag | string | li | tag with which ListItem will be rendered. |
| href | string |  | src to which the ListItem will be directed. |
| action | bool |  | ListItem if generated with action state if true and tag is button. |
| disabled | bool |  | If true, ListItem is rendered disabled. |

# ListItemAvatar

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | style object for ListItemAvatar. |
| src | string |  | src for the CardMedia.|
| size | number | 70  | size of the ListItemAvatar (in px). |
| className | string |  | className for styling component with css. |

# ListItemRightButton

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | style object for ListItemRightButton. |
| children | Node | | children of ListItemRightButton (expects a Button). |

# ListHeader

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | style object for ListHeader. |
| children | Node | | Children of ListHeader component. |

# ListItemText

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | style object for ListItemText. |
| children | Node | | Children of ListItemText component. |
| className | string |  | className for styling component with css. |

# ListItemIcon

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| style | Object |  | style object for ListItemIcon. |
| children | Node | | children of ListItemIcon (expects an Icon). |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from "@blueeast/bluerain-os";


const myList = (props) => {
    const BR = props.bluerain;
    const View = BR.Components.get('View');
    const List = BR.Components.get('List');
    const ListItem = BR.Components.get('ListItem');
    const ListHeader = BR.Components.get('ListHeader');
    const ListItemText = BR.Components.get('ListItemText');
    const ListItemRightButton = BR.Components.get('ListItemRightButton');
    const ListItemIcon = BR.Components.get('ListItemIcon');
    const ListItemAvatar = BR.Components.get('ListItemAvatar');
    return (
    <List>
        <ListItem active>
            <ListItemRightButton><Button color="dark">Dark</Button></ListItemRightButton>
            <View style={{flexDirection:'row'}}>
            <ListItemIcon><Favorite /></ListItemIcon>
            <ListHeader>List group item heading</ListHeader>
            </View>
            <ListItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </ListItemText>
        </ListItem>
        <ListItem>
            <ListItemRightButton><Button color="danger">Danger</Button></ListItemRightButton>
            <View style={{flexDirection:'row'}}>
                <ListItemAvatar src="https://reactstrap.github.io/assets/logo.png" />
                <View style={{marginLeft:15, marginTop:8}}>
                    <ListHeader>List group item heading</ListHeader>
                    <ListItemText>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    </ListItemText>
                </View>
            </View>
        </ListItem>
    </List>
    );
}

export default withBluerain(myList);
```

## Storybook

- Last story of the List component in List.stories.tsx file is written with knobs to visualize the effects when different props are changed.

## Tests

- All the tests through jest are passed and create screenshot.