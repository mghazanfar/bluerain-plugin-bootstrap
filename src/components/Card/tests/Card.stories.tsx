import * as React from 'react';
import Card, { CardBody, CardFooter, CardHeader, CardMedia } from '../../Card';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import Button from '../../Button';

BR.boot({ renderApp:false });

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const label = text('label as child', 'with knobs');
storiesOf('Card', module).add('Card with style and raised props', () =>
<Card raised={true} style={{ width:'100%', height:300 }}className="bg-main">Raised</Card>);

storiesOf('Card', module).add('Card and raised prop false', () =>
<Card raised={false} style={{ width:'100%', height:300 }} className="bg-main" color="success">UnRaised success</Card>);

storiesOf('Card', module).add('Card with inverse prop false tag Card', () =>
<Card inverse={true} color="dark" body={true} style={{ maxWidth:100 }} tag="Card">Inverse turned text into White, tag is Card and Max width 100 in style prop</Card>);

storiesOf('BluerainCard', module).add('Reactstrap Card story', () =>
<Card style={{ width:300 }} raised={true}><CardMedia top={true} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" /><CardBody><h3>Card title</h3><h5>Card subtitle</h5><p>Some quick example text to build on the card title and make up the bulk of the card's content.</p><Button>Button</Button></CardBody></Card>);

storiesOf('BluerainCard', module).add('Reactstrap Card story with header and footer', () =>
<Card style={{ width:300 }} raised={true}> <CardHeader title="Header"/><CardBody><h3>Special Title Treatment</h3><p>With supporting text below as a natural lead-in to additional content.</p><Button color="success" >Go somewhere</Button></CardBody><CardFooter>Footer</CardFooter></Card>);