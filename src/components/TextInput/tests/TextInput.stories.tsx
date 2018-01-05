import * as React from 'react';
import TextInput from '../../TextInput';
import { storiesOf } from '@storybook/react';
import { Form, FormGroup, Label } from 'reactstrap';

function handleTextInputChange (value: any) {
   console.log('text input value', value.target.value);
}

const style = { background: 'red' };
const textFieldClasses = 'margin-left: 100px; margin-right: 100px; width: 50px; background-color: red; padding:100px;';

storiesOf('TextInput', module).add('with placeholder, default value, onChange',
    () => <Form> <FormGroup> <TextInput placeholder="hello" defaultValue="nooo" onChange={handleTextInputChange} autoFocus={true} /> </FormGroup></Form>) ;

storiesOf('TextInput', module).add('with type= textarea',
    () => <Form> <FormGroup> <TextInput placeholder="Multiline Text area" onChange={handleTextInputChange} multiline={true}  /> </FormGroup></Form>) ;

storiesOf('TextInput', module).add('with type email',
    () => <Form> <FormGroup> <TextInput placeholder="Type is email" type="email" onChange={handleTextInputChange}  /> </FormGroup></Form>) ;

storiesOf('TextInput', module).add('with type password',
    () => <Form> <FormGroup> <TextInput placeholder="Type is email" type="password" onChange={handleTextInputChange}  /> </FormGroup></Form>) ;

storiesOf('TextInput', module).add('with type textarea and multiline',
    () => <Form> <FormGroup> <TextInput placeholder="Type is email" name="Select" type="textarea" onChange={handleTextInputChange}  multiline={true} /> </FormGroup></Form>) ;

storiesOf('TextInput', module).add('with type select',
    () => <Form> <FormGroup> <TextInput placeholder="Select"  type="select" onChange={handleTextInputChange}  multiline={true} /> </FormGroup></Form>) ;



storiesOf('TextInput', module).add('with type file',
    () => <Form> <FormGroup> <TextInput placeholder="Select" type="file" onChange={handleTextInputChange} /> </FormGroup></Form>) ;

// storiesOf('TextInput', module).add('with readonly',
//     () => <Form> <FormGroup> <TextInput placeholder="Readonly" readonly  onChange={handleTextInputChange} /> </FormGroup></Form>) ;

storiesOf('TextInput', module).add('with disabled',
    () => <Form> <FormGroup> <TextInput placeholder="Disabled" disabled  onChange={handleTextInputChange} /> </FormGroup></Form>) ;

storiesOf('TextInput', module).add('with editable false',
    () => <Form> <FormGroup> <TextInput placeholder="Editable" editable={false}  onChange={handleTextInputChange} /> </FormGroup></Form>) ;

storiesOf('TextInput', module).add('with editable true',
    () => <Form> <FormGroup> <TextInput placeholder="Editable" editable={true}  onChange={handleTextInputChange} /> </FormGroup></Form>) ;

    storiesOf('TextInput', module).add('with style',
    () => <Form> <FormGroup> <TextInput placeholder="With Style" editable={true} style={style} onChange={handleTextInputChange} /> </FormGroup></Form>) ;

// storiesOf('TextInput', module).add('with type select multiple',
//     () => <Form> <FormGroup> <TextInput placeholder="Multi select"  type="select"  onChange={handleTextInputChange} ><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></TextInput> </FormGroup></Form>) ;
