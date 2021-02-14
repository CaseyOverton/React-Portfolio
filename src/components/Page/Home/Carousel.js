import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
 import '../../../style/style.css'
 import ContactCard1 from "../../cards/ContactCard1"
 import ContactCard2 from "../../cards/ContactCard2"
 import ContactCard3 from "../../cards/ContactCard3"
 import ContactCard4 from "../../cards/ContactCard4"


export default class Carousels extends React.Component {
  render() {
    return (
       <div class='slider'>

      
      <CarouselProvider
      isPlaying={true} 
      width="90px"
      height="70px"
      dragEnabled={true}
      touchEnabled={true}
      interval={5000}
        naturalSlideWidth={50}
        naturalSlideHeight={50}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}><ContactCard1 /></Slide>
          <Slide index={1}><ContactCard2 /></Slide>
          <Slide index={2}><ContactCard3 /></Slide>
        </Slider>
      </CarouselProvider>
      </div>
    );
  }
}