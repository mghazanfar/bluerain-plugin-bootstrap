import * as React from 'react';
import { CarouselComponent } from './carousel';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, object, array } from '@storybook/addon-knobs';
import BR from '@blueeast/bluerain-os';
import Card, { CardMedia, CardBody, CardFooter, CardHeader } from '../Card';
import Button from '../Button';

const stories = storiesOf('Carousel', module);
stories.addDecorator(withKnobs);


BR.boot({renderApp:false});
stories.add('Carousel of Images', () => {
  const Image = BR.Components.get('Image');
  const View = BR.Components.get('View');
  const dots = boolean('Show Dots', true);
  const infinite = boolean('Infinite Scroll', true);
  const speed = number('Scroll Speed', 500);
  const slidesToShow = number('Slides Shown', 1);
  const slidesToScroll = number('Slides Scrolled', 1);
  const altText = text('Alt Text', 'bannerImage');
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
        alt="bannerImage"
      />
      <Image
        source={'https://getbootstrap.com/assets/img/bootstrap-stack.png'}
        resizeMode={'auto'}
        style={imgStyle}
        alt="bannerImage"
      />
      <Image
        source={'https://s3.amazonaws.com/dukaan-ui/banner-01.png'}
        resizeMode={'auto'}
        style={imgStyle}
        alt="bannerImage"
      />
    </View>
  );
  return (
    <CarouselComponent
      banners={data}
      dots={dots}
      infinite={infinite}
      speed={speed}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
    />
  );
});

stories.add('Carousel of Cards', () => {
  const View = BR.Components.get('View');
  const dots = boolean('Show Dots', true);
  const infinite = boolean('Infinite Scroll', true);
  const speed = number('Scroll Speed', 500);
  const slidesToShow = number('Slides Shown', 1);
  const slidesToScroll = number('Slides Scrolled', 1);
  const data = (
    <View>
      <Card style={{width:300}} raised={true}>
        <CardHeader title="Header 1"/>
        <CardMedia top={true} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" />
        <CardBody>
          <h3>Special Title Treatment</h3>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <Button color="success" >Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card style={{width:300}} raised={true}>
        <CardHeader title="Header 2"/>
        <CardMedia top={true} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" />
        <CardBody>
          <h3>Special Title Treatment</h3>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <Button color="success" >Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </View>
  );
  return (
    <CarouselComponent
      banners={data}
      dots={dots}
      infinite={infinite}
      speed={speed}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
    />
  );
});


