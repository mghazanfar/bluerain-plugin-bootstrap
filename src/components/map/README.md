# Map Component

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| Region | object |  | The region to be displayed by the map.The region is defined by the center coordinates and the span of coordinates to display.|
| onMarkerDragEnd | func |  | Callback that is called when the Mark pointer changes. |
## Specific Library Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| width | string |  | TThe width of the map.|
| height | string | | The height of the map. |
| zoom | number | |  The user able to pinch/zoom the map. |
| draggable | boolean | | If false the user can't drag the map. |
| params | object |  | Params are the default object value of Google Api 'Key' and 'V' value. |


## How to use

```JavaScript
import React from 'react';
import { withBluerain } from "@blueeast/bluerain-os";

const onDragEnd = (e) => {
      const { latLng } = e;
      lat = latLng.lat();
      lng = latLng.lng();
  
}
const appPage = (props) => {
    const BR = props.bluerain;
    const MapComponent = BR.Components.get('MapComponent');
    return (
        <GoogleMap
                zoom={15}
                height={'500px'}
                onMarkerDragEnd={onDragEnd}
                region={{ latitude: lat, longitude: lng }}
            />
    )
}

export default withBluerain(appPage);