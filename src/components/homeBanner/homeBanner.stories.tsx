import * as React from 'react';
import HomeBannerComponent from './homeBanner';
import { MemoryRouter} from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, object, array } from '@storybook/addon-knobs';
import BR from '@blueeast/bluerain-os';

const stories = storiesOf('Home Screen Banner', module);
stories.addDecorator(withKnobs);


BR.boot({renderApp:false})
stories.add('Complete Home Banner', () => {
  const dots = boolean('Show Dots', true);
  const keyboard = boolean('Keyboard scrolling', true);
  const altText = text('Alt Text', 'bannerImage');
  const animate = boolean('Animate transition', true);
  const activeIndex = number('Current Slide', 0);
  const banners = array('Images', ['banner-01.png', 'banner-01.png', 'banner-01.png']);
  return (
    <MemoryRouter>
      <HomeBannerComponent banners={banners}
                           activeIndex={activeIndex} animate={animate}
                           altText={altText} dots={dots} keyboard={keyboard} />
    </MemoryRouter>
  );
});

stories.add('Home Banner with default values', () => {
  const banners = array('Images', ['banner-01.png', 'banner-01.png', 'banner-01.png']);
  return (
    <MemoryRouter>
      <HomeBannerComponent banners={banners} />
    </MemoryRouter>
  );
});

stories.add('Home Banner without default values', () => {
  const banners = array('Images', ['banner-01.png', 'banner-01.png', 'banner-01.png']);
  return (
    <MemoryRouter>
      <HomeBannerComponent banners={banners}
                           activeIndex={1} animate={false} altText="my-image" dots={true} keyboard={false} />
    </MemoryRouter>
  );
});

