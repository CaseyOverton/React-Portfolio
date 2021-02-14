import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
 import ContactCard from "../ContactCard"
import '../../../style/style.css'



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
          <Slide index={0}><ContactCard /></Slide>
          <Slide index={1}><ContactCard /></Slide>
          <Slide index={2}><ContactCard /></Slide>
        </Slider>
      </CarouselProvider>
      </div>
    );
  }
}