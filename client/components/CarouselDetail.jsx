import React, { Component } from "react";
import Slider from "react-slick";

export default class CarouselDetail extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 350,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div className='carousel'>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}