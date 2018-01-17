import * as React from 'react';
import List, { ListItem, ListItemText, ListItemAvatar, ListItemIcon, ListItemRightButton, ListHeader } from '../../List';
import Button from '../../Button';
import BR from '@blueeast/bluerain-os';
import { Favorite } from 'bluerain-icons';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false});

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const View = BR.Components.get('View');

const label = text('label as child', 'with knobs');
storiesOf('List', module).add('List with style and raised props', () =>
<List
    style={{width:'100%', height:300}}
    className="bg-main"
>
Raised
</List>);

storiesOf('List', module).add('List of ReactStrap1', () =>
<List>
    <ListItem>Cras justo odio</ListItem>
    <ListItem>Dapibus ac facilisis in</ListItem>
    <ListItem>Morbi leo risus</ListItem>
    <ListItem>Porta ac consectetur a</ListItem>
    <ListItem>Vestibulum at eros</ListItem>
</List>);

storiesOf('List', module).add('List of ReactStrap2', () =>
<List>
    <ListItem disabled tag="a" href="#">Cras justo odio</ListItem>
    <ListItem tag="a" href="#">Dapibus ac facilisis in</ListItem>
    <ListItem tag="a" href="#">Morbi leo risus</ListItem>
    <ListItem tag="a" href="#">Porta ac consectetur a</ListItem>
    <ListItem tag="a" href="#">Vestibulum at eros</ListItem>
</List>);

storiesOf('List', module).add('List of ReactStrap3', () =>
<List>
    <ListItem active tag="a" href="#" action>Cras justo odio</ListItem>
    <ListItem tag="button" action>Dapibus ac facilisis in</ListItem>
    <ListItem tag="button" action>Morbi leo risus</ListItem>
    <ListItem tag="button" action>Porta ac consectetur a</ListItem>
    <ListItem disabled tag="a" href="#" action>Vestibulum at eros</ListItem>
</List>);

storiesOf('List', module).add('List of ReactStrap4', () =>
<List>
    <ListItem color="dark">Cras justo odio</ListItem>
    <ListItem color="primary">Dapibus ac facilisis in</ListItem>
    <ListItem color="success">Morbi leo risus</ListItem>
    <ListItem color="warning">Porta ac consectetur a</ListItem>
    <ListItem color="danger">Vestibulum at eros</ListItem>
</List>);

storiesOf('List', module).add('List of ReactStrap5', () =>
<List>
<ListItem active>
  <ListHeader>List group item heading</ListHeader>
  <ListItemText>
  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
  </ListItemText>
</ListItem>
<ListItem>
  <ListHeader>List group item heading</ListHeader>
  <ListItemText>
  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
  </ListItemText>
</ListItem>
<ListItem>
  <ListHeader>List group item heading</ListHeader>
  <ListItemText>
  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
  </ListItemText>
</ListItem>
</List>);

storiesOf('List', module).add('BlueRainList', () =>
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
<ListItem>
  <ListHeader>List group item heading</ListHeader>
  <ListItemText>
  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
  </ListItemText>
</ListItem>
</List>);