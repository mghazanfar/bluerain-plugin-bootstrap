import * as React from 'react';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import { Dropdown } from '../../Dropdown';
import { DropdownItem } from 'reactstrap';

const Text = BR.Components.get('Text');
const style={ root:{ padding:20 }, dropdown:{ width:400 } };

function onChange (value: any) {
   console.log('Checkbox value', value);
}

storiesOf('Dropdown', module).add('general',
    () => 
    <Dropdown onValueChange={onChange} value={'xyz'} style={style.dropdown}>
        <DropdownItem>Item 1 </DropdownItem>
        <DropdownItem>Item 2 </DropdownItem>
        <DropdownItem>Item 3 </DropdownItem>
        <DropdownItem>Item 4 </DropdownItem>
        <DropdownItem>Item 5 </DropdownItem>
</Dropdown> ) ;

