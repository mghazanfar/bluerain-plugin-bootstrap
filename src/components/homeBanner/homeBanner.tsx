import * as React from 'react';
import { FormattedMessage } from 'react-intl';
// tslint:disable-next-line:no-submodule-imports
import 'bootstrap/dist/css/bootstrap.css';
import BR, { withBlueRain, BlueRainType } from '@blueeast/bluerain-os';
// tslint:disable-next-line:no-submodule-imports
import { ICarousel } from '@blueeast/bluerain-ui-interfaces/Components/Carousel';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

/**
 * * This is the list of the props which this component accepts
 * @param {boolean} props.dots Dots to be shown or not.
 * @param {boolean} props.keyboard Scrolling is infinite or not.
 * @param {any} props.altText Alt text of the image.
 * @param {boolean} props.animate Transition is animated.
 * @param {number} props.activeIndex Index of slide to be shown.
 * @param {any} props.banners Data to be shown in scroll.
 * @name Home Banner Component
 */
BR.boot({renderApp:false});

export interface IHomeBannerComponentState {
  index? : number
}

let items;
let slides;
let carouselData;
class HomeBannerComponent extends React.Component<ICarousel, IHomeBannerComponentState> {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(ICarousel:any) {
    super(ICarousel);
    items = this.props.banners;
    this.state = { index: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    (this as any).animating = true;
  }

  onExited() {
    (this as any).animating = false;
  }
  next() {
    if ((this as any).animating) { return; }
    if (this.state.index) {
      const nextIndex = this.state.index === items.length - 1 ? 0 : this.state.index + 1;
      this.setState({ index: nextIndex });
    }
  }

  previous() {
    if ((this as any).animating) { return; }
    if (this.state.index) {
      const nextIndex = this.state.index === 0 ? items.length - 1 : this.state.index - 1;
      this.setState({ index: nextIndex });
    }
  }

  // tslint:disable-next-line:typedef
  goToIndex(index) {
    if ((this as any).animating) { return; }
    this.setState({ index: index });
  }

  render() {
    const {
      dots,
      keyboard,
      animate,
      activeIndex
    } = this.props;
    const myData = this.props.banners ? this.props.banners : [];
    const { index } = this.state;
    if (myData && myData.props){
      carouselData = myData.props.children;
      slides = carouselData.map((item, i) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={i}
          >
            {item}
            <CarouselCaption captionText="" />
          </CarouselItem>
        );
      });
    }
    const dotsShow =
      dots?
        <CarouselIndicators items={slides}
                            activeIndex={activeIndex?activeIndex:index} onClickHandler={this.goToIndex} />:'';
      return (
        <Carousel
          activeIndex={activeIndex?activeIndex:index}
          next={this.next}
          previous={this.previous}
          keyboard={keyboard}
          slide={animate}
        >
          {dotsShow}
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      );


  }
}

export default withBlueRain(HomeBannerComponent);