import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './style.css';
import BR from '@blueeast/bluerain-os';
import { ICarousel } from '@blueeast/bluerain-ui-interfaces/Components/Carousel';

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

let carouselData;
let slides;

export class CarouselComponent extends React.Component<ICarousel, {}> {

  public static defaultProps: Partial<ICarousel> = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    banners: []
  };

  render() {
    const {
      dots,
      infinite,
      speed,
      slidesToShow,
      slidesToScroll
    } = this.props;
    const View = BR.Components.get('View');
    const settings = {
      dots: dots,
      infinite: infinite,
      speed: speed,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll
    };
    const viewStyle = {
      width: '100%',
      display: 'block',
      float: 'left',
      height: '100%'
    };
    const myData = this.props.banners ? this.props.banners : [];
    if (myData && myData.props){
      carouselData = myData.props.children;
      slides = carouselData.map((item) => {
        return (
          <View style={viewStyle}>
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
  }
}