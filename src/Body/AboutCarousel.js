import React, {Component} from 'react';
import carouselHomeWorking from "../Images/About/home-working.jpg"
import carouselHomeExperience from "../Images/About/home-experience.jpg"
import carouselEventGadgets from "../Images/About/event-gadgets.jpg"
import Carousel from 'react-bootstrap/Carousel'


class AboutCarousel extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }



  render() {
    return (
      <div align="center" style={{padding: "20px"}} >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselHomeWorking}
              alt="First slide"
              style={{objectFit: "cover", width:"100%", height:"250px", borderRadius: "8px"}}
            />
            <Carousel.Caption className={"about-carousel"}>
              <h3><b>Remote Working Solutions</b></h3>
              <p>Increase your productivity working at home or hotel.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselHomeExperience}
              alt="Second slide"
              style={{objectFit: "cover", width:"100%", height:"250px", borderRadius: "8px"}}
            />
            <Carousel.Caption className={"about-carousel"}>
              <h3><b>Try First, Buy Later</b></h3>
              <p>Before buying, experience first-hand if you would like it.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselEventGadgets}
              alt="Third slide"
              style={{objectFit: "cover", width:"100%", height:"250px", borderRadius: "8px"}}
            />
            <Carousel.Caption className={"about-carousel"}>
              <h3><b>Gadgets for your Events</b></h3>
              <p>Rent a gadget to support your event.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default AboutCarousel;
