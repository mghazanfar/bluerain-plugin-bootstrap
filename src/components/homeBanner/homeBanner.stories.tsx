import * as React from 'react';
import HomeBannerComponent from './homeBanner';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, object, array } from '@storybook/addon-knobs';
import BR from '@blueeast/bluerain-os';

const stories = storiesOf('Home Screen Banner', module);
stories.addDecorator(withKnobs);


BR.boot({renderApp:false});
stories.add('Complete Home Banner', () => {
  const Image = BR.Components.get('Image');
  const View = BR.Components.get('View');
  const dots = boolean('Show Dots', true);
  const keyboard = boolean('Keyboard scrolling', true);
  const altText = text('Alt Text', 'bannerImage');
  const animate = boolean('Animate transition', true);
  const activeIndex = number('Current Slide', 0);
  const imgStyle = {
    width: '100%',
    height: 500
  };
  const data = (
    <View>
      <Image
        source={'https://s3.amazonaws.com/dukaan-ui/banner-01.png'}
        resizeMode={'auto'}
        style={imgStyle}
        alt={altText} />
      <Image
        source={'https://getbootstrap.com/assets/img/bootstrap-stack.png'}
        resizeMode={'auto'}
        style={imgStyle}
        alt={altText} />
      <Image
        source={'https://s3.amazonaws.com/dukaan-ui/banner-01.png'}
        resizeMode={'auto'}
        style={imgStyle}
        alt={altText} />
    </View>
  );
  return (
    <HomeBannerComponent banners={data}
                           activeIndex={activeIndex} animate={animate}
                           altText={altText} dots={dots} keyboard={keyboard} />
  );
});

// stories.add('Home Banner with default values', () => {
//   const banners = array('Images', ['banner-01.png', 'banner-01.png', 'banner-01.png']);
//   return (
//     <HomeBannerComponent banners={banners} />
//   );
// });
//
// stories.add('Home Banner without default values', () => {
//   const banners = array('Images', ['banner-01.png', 'banner-01.png', 'banner-01.png']);
//   return (
//     <HomeBannerComponent banners={banners}
//                            activeIndex={1} animate={false} altText="my-image" dots={true} keyboard={false} />
//   );
// });

