import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import Breadcrumb from '../../Breadcrumb';


const stories = storiesOf('Breadcrumb', module);

stories.add('Breadcrumb (knobs)', () => {
	const label = text('label', 'Site');
	const colorPrev = text('previous color', 'red');
	const colorActive = text('active color', 'yellow');
	const data = object('object of data ', [{ title:'CardView', path: 'www.facebook.com' }]);
	return (
  <div style={{ padding: 20, display:'inline-block' }}>
    <Breadcrumb
      data={data}
      label={label}
      colorPrev={colorPrev}
      colorActive={colorActive}
    />
  </div>
);
});

stories.add('Breadcrumb (with default colors)', () => {
	const label = 'Site';
	const data = [{ title:'CardView', path: 'www.facebook.com' }];

	return (
  <div style={{ padding: 20, display:'inline-block' }}><Breadcrumb
    data={data}
    label={label}
  /></div>
);
});

stories.add('Breadcrumb default', () => (<div style={{ padding: 20, display:'inline-block' }}><Breadcrumb /></div>));


stories.add('Breadcrumb with multiple breadcrumb entries', () => (
<div style={{ padding: 20, display:'inline-block' }}>
  <Breadcrumb data={[{ title:'CardView1', path: 'www.facebook.com' }, { title:'CardView2', path: 'www.linkedin.com' }, { title:'CardView3', path: 'www.instagram.com' }]} label="Current" />
</div>));


// stories.add('Breadcrumb Bad data', () => (
//   <Breadcrumb
//     data={'{ title:\'CardView1\', path: \'www.facebook.com\' }, { title:\'CardView2\', path: \'www.linkedin.com\' }, { title:\'CardView3\', path: \'www.instagram.com\' }'}
//     colorActive={'8'}
//     colorPrev={'123'}
//     label={'12'}
//   />
// ));
