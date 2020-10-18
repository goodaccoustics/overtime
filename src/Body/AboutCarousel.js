import React, {Component} from 'react';
import carouselHomeWorking from "../Images/About/home-working.jpg"
import carouselHomeExperience from "../Images/About/home-experience.jpg"
import Carousel from 'react-bootstrap/Carousel'


class AboutCarousel extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }



  render() {
    return (
      <div align="center" style={{padding: "20px", maxHeight:"200px"}} height="200px">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselHomeWorking}
              alt="First slide"
              style={{objectFit: "cover", width:"100%", height:"250px", borderRadius: "8px"}}
            />
            <Carousel.Caption>
              <h3>Remote Working Solutions</h3>
              <p>Increase your productivity working at home or hotel.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselHomeWorking}
              alt="Second slide"
              style={{objectFit: "cover", width:"100%", height:"250px", borderRadius: "8px"}}
            />
            <Carousel.Caption>
              <h3>Try First, Buy Later</h3>
              <p>Before buying, experience it first-hand if you would like it.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselHomeWorking}
              alt="Third slide"
              style={{objectFit: "cover", width:"100%", height:"250px", borderRadius: "8px"}}
            />
            <Carousel.Caption>
              <h3>Gadgets for your Events</h3>
              <p>Rent a gadget to support your event.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default AboutCarousel;
