import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './style.css';
import { withBlueRain } from '@blueeast/bluerain-os';
import { ICarousel } from 'bluerain-ui-interfaces/Components/Carousel';

/**
 * * This is the list of the props which this component accepts
 * @param {boolean} props.dots Dots to be shown or not.
 * @param {boolean} props.infinite Scrolling is infinite or not.
 * @param {number} props.speed Speed of the scrolling.
 * @param {number} props.slidesToShow Number of slides to be shown.
 * @param {number} props.slidesToScroll Number of slides to scroll.
 * @param {array} props.banners Data to be shown in scroll.
 * @name Home Banner Component
 */

let slides;

export interface Icaros {
  bluerain:any
}
const CarouselComponent = (props: ICarousel & Icaros ) => {
  const {
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    bluerain: BR
  } = props;
  const myData = props.banners ? props.banners : [];
  const View = BR.Components.get('View');
  const settings = {
    dots: dots,
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll
  };
  // React Slick expects each item inside a div, after using View, UI was discturbed so
  // I had to apply the styles on View
  const viewStyle = {
    width: '100%',
    display: 'block',
    float: 'left',
    height: '100%'
  };
  if (myData && myData.props){
    const carouselData = myData.props.children;
    slides = carouselData.map((item, i) => {
      return (
        <View key={i} style={viewStyle}>
          {item}
        </View>
      );
    });
  }
  return (
    <Slider {...settings}>
      {slides}
    </Slider>
  );
};


export default withBlueRain(CarouselComponent);
