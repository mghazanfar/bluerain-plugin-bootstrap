import * as React from 'react';
import { create } from 'react-test-renderer';
import  BR  from '@blueeast/bluerain-os';
import HomeBannerComponent from '../src/components/homeBanner/homeBanner';
BR.boot({renderApp:false});

// describe('Dummy test', () => {
//   it('works if true is truthy', () => {
//     expect(true).toBeTruthy();
//   });
// });

test('Home Banner component...', () => {
  const banners = ['banner-01.png', 'banner-01.png', 'banner-01.png'];
  const banner = create(
    <HomeBannerComponent
      banners={banners}
      altText="myIMage"
      keyboard={true}
      dots={true}
      animate={1000}
    />
  ).toJSON();
  // expect(banner.children[0].type).toEqual('div');
  // expect(banner.type).toEqual('a');
  // expect(banner.props.href).toEqual('apps');
  expect(banner).toMatchSnapshot();
});


// test('Home Banner with default values', () => {
//   const banners = ['banner-01.png', 'banner-01.png', 'banner-01.png'];
//   const banner = create(
//       <HomeBannerComponent banners={banners} />
//   ).toJSON();
//   expect(banner.children[0].type).toEqual('svg');
//   expect(banner.type).toEqual('div');
//   expect(banner).toMatchSnapshot();
// });
