import * as React from 'react';
import CarouselComponent from './carousel';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, object, array } from '@storybook/addon-knobs';
import BR from '@blueeast/bluerain-os';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

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
      <Card>
        <CardImg
          top={true}
          width="100%"
          src="https://s3.amazonaws.com/dukaan-ui/banner-01.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title 1</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top={true}
          width="100%"
          src="https://s3.amazonaws.com/dukaan-ui/banner-01.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title 2</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title.</CardText>
          <Button>Button</Button>
        </CardBody>
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


