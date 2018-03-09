import * as React from 'react';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import { Dropdown } from '../../Dropdown';

const Text = BR.Components.get('Text');
const View = BR.Components.get('View');
const Image = BR.Components.get('Image');
const style={ root:{ padding:20 }, dropdown:{ width:400 } };

 const onChange = () => {
   console.log('Checkbox value');
}

const Item = <View style={{flexDirection: 'row'}}>
<Image source={'https://avatars0.githubusercontent.com/u/295630?s=400&v=4'} style={{width:70, height: 70, borderRadius: 500}}/>
<Text>{'Abdul Rehman'}</Text>
</View>;

storiesOf('Dropdown', module).add('general',
    () => 
    <Dropdown onValueChange={onChange} value={'hello'} style={style.dropdown}>
        {['Item1', 'Item2', 'Item3']}
    </Dropdown> ) ;


storiesOf('Dropdown', module).add('specific story',
() => 
<Dropdown onValueChange={onChange} value={'hello'} style={style.dropdown}>
    {[Item, Item, Item]}
</Dropdown> ) ;

