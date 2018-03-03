import * as React from 'react';
import BR from '@blueeast/bluerain-os';
import { AvatarProperties } from '@blueeast/bluerain-ui-interfaces';

const Image = BR.Components.get('Image');
const View = BR.Components.get('View');
const Text = BR.Components.get('Text');
/**
 * The universal props of Avatar Component
 * @param {Object} props.style Get the style object.
 * @param {string} props.src src for Avatar.
 * @param {Node} props.children children of Avatar.
 * @param {number} props.size size of Avatar.
 */
const BlueRainAvatar: React.ComponentType<any> = (props: AvatarProperties) => {
    const size = props.size? props.size: 70;
    const avatarStyle = [{width:size, height:size, backgroundColor:'lightgrey', borderRadius:1000, display:'flex', justifyContent:'center', alignItems:'center', fontSize:.5*size}, {...props.style}];
if (props.children) {
    return <View style={avatarStyle}><Text style={{display:'flex'}}>{props.children}</Text></View>;
}
 return <Image source={props.src} style={avatarStyle}></Image>;

};

export default BlueRainAvatar;