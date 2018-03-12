import * as React from 'react';
import Button from '../../Button';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false});

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const label = text('label as child', 'with knobs');
const disabled = boolean('disabled', false);
const fullWidth = boolean('fullWidth', false);
const small = boolean('small', false);
storiesOf('Button', module).add('Primary Button with knobs', () =>

<Button
    color={'primary'}
    onClick={action('I was clicked with knobs')}
    disabled={disabled}
    fullWidth={fullWidth}
    small={small}
    >
{label}
</Button>);
storiesOf('Button', module).add('Dark Button with label in Child', () => <Button color="dark"><Text>Dark</Text></Button>);

storiesOf('Button', module).add('Default Button without Text tag in Child', () => <Button>Default</Button>);

storiesOf('Button', module).add('Secondary Button with style prop', () => <Button color="secondary" style={{backgroundColor:'purple', borderColor:'purple'}} >Customm Purple</Button>);

storiesOf('Button', module).add('Light Button with onClick prop', () => <Button color="light" onClick={()=>{console.log('I was clicked');}} >onClick</Button>);

storiesOf('Button', module).add('Warning Button with disabled prop true', () => <Button color="warning" disabled >Disabled</Button>);

storiesOf('Button', module).add('Info Button with href prop', () => <Button color="info" href="https://www.facebook.com" >href</Button>);

storiesOf('Button', module).add('Danger Button with onClick prop', () => <Button color="danger" fullWidth>FullWidth</Button>);

storiesOf('Button', module).add('Success Button with active prop true', () => <Button color="success" active>Active</Button>);

storiesOf('Button', module).add('Default Button with bordered prop true', () => <Button bordered>Bordered</Button>);

storiesOf('Button', module).add('Link Button ', () => <Button color="link" >Link</Button>);

storiesOf('Button', module).add('Rounded Button ', () => <Button color="dark">Rounded</Button>);
storiesOf('Button', module).add('Transparent Button with icon as child', () => <Button style={{backgroundColor:'transparent', boxShadow:'none', border:0}} ><img src="https://getbootstrap.com/assets/img/bootstrap-stack.png" width="35" height="35"/></Button>);

storiesOf('Button', module).add('Warning Button with iconLeft prop', () => <Button color="warning" iconLeft={<img src="https://getbootstrap.com/assets/img/bootstrap-stack.png" width="15" height="15"/>} >Icon Left</Button>);

storiesOf('Button', module).add('Info Button with iconRight prop', () => <Button color="info" iconRight={<img src="https://getbootstrap.com/assets/img/bootstrap-stack.png" width="15" height="15"/>} >Icon Right</Button>);

storiesOf('Button', module).add('Secondary Button with fab prop', () => <Button color="warning" fab>FAB</Button>);

storiesOf('Button', module).add('Danger Button with large prop true', () => <Button color="danger" large>Large</Button>);

storiesOf('Button', module).add('Success Button with small prop true', () => <Button color="success" small>Small</Button>);