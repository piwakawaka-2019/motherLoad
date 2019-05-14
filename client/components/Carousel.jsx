import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 350,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div className='carousel'>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            <div>
              <h3 className="">A useful tool!</h3>
            </div>
            
            <p className="has-text-left">
              If you haven't come across it already, PC Part picker is a really good place that helps 
              bring your build together. It tells you when parts don't work together and also gives 
              you the best and cheapest places to get them. Another great feature they have, is that it allows
              you to save your builds as well as look at other people's builds to gain ideas.
            </p>
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