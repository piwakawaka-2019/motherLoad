import React, { Component } from "react";
import Slider from "react-slick";
import {connect} from 'react-redux'
import RandomTips from './RandomTips'
import RandomTutorials from './RandomTutorials'

//const pickOne = Math.floor(Math.random() * (arrayToPull + 1));


export default class Carousel extends Component {
  // componentDidMount(){
  //   this.props.dispatch(fetchTips())
  // }
  // componentDidMount(){
  //   this.props.dispatch(fetchTutorials())
  // }
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
            <h3>
              Welcome to MotherLoad! Our aim is to bring information around PC building to make your life easier.
              Whether you're new to the area or an expert, we hope you leave us learning something new.
              We also encourage viewers to share whatever knowledge they have that we may have missed,
              as an expert you probably have come across a few things you wish you had learnt sooner,
              so don't be afraid to share!
            </h3>
          </div>
          <div>
            <h3>
              If you haven't come across it already, <a href='https://pcpartpicker.com'>PC Partpicker</a> is a really good place that helps bring your build together.
              It tells you when parts don't work together and also gives you the best and cheapest places to get them from.
              You can save your builds as well as look at other people's builds.
            </h3>
          </div>
          <div>
            <h3><a href='https://www.logicalincrements.com'>Logical Increments</a> is a great place in that it can take in your needs and give you possible builds based on those.
              The only thing that isn't so great about it is that it doesn't have room for compromise if the build is mid-range, then all the parts will be mid-range.
              There's no mix-and-match.
            </h3>
          </div>
          <div>
            <h3>At <a href='https://www.computerhope.com'>Computer Hope</a>, you can find people who have a lot of knowledge and have your best intentions at heart.</h3>
          </div>
          <div>
            <h3><RandomTips /></h3>
          </div>
          <div>
            <h3><RandomTutorials /></h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
        </Slider>
      </div>
    );
  }
}