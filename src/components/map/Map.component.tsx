import React from 'react';
import { Gmaps, Marker } from 'react-gmaps';
import  { IMap } from '@blueeast/bluerain-ui-interfaces/Components/Map';


/**
 * The Map Component.
 * @param {string} props.width The width of the map.
 * @param {string} props.height The height of the map.
 * @param {zoom} props.zoom The user able to pinch/zoom the map.
 * @param {draggable} props.draggable If false the user can't drag the map.
 * @param {Function} props.onDragEnd Callback that is called when the Mark pointer changes.
 * @param {object} props.params Params are the default object value of Google Api 'Key' and 'V' value.
 */

export interface IGoogleMaps {
    width?: string,
    height?: string,
    zoom?: number,
    draggable?: boolean,
    params?: object,
}


const MapComponent:React.StatelessComponent<IMap & IGoogleMaps> = (props) =>(
        <Gmaps
            lat={props.region.latitude}
            lng={props.region.longitude}
            {...props}
        >
            <Marker
                lat={props.region.latitude}
                lng={props.region.longitude}
                onDragEnd={props.onMarkerDragEnd}
                {...props}
            />
        </Gmaps>);

MapComponent.defaultProps = {
    params: {
        v: '3.exp',
        key: 'AIzaSyCgVYH02v3XYmCSIokoLOZzvUqJG6ZamMY'
    },
    region:{
        latitude:31.3892751,
        longitude:74.1502481
    },
    zoom:5,
    height:'600px'
};

export default MapComponent;