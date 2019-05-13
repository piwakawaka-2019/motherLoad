import React from 'react'
import {connect} from 'react-redux'
import Slider from "react-slick";

class Carousel extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 350,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
        };
        return(<div className='carousel'>
        {/* <h2> Single Item</h2> */}
        {/* <Slider {...settings}>
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
        </Slider> */}
        <p>is broke</p>
      </div>)
    }
}
export default Carousel