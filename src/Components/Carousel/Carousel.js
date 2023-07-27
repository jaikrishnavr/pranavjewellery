import React, { useEffect, useRef } from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import img1 from "../../Assets/New-Banner01.jpg";
import img2 from "../../Assets/New-Banner02.jpg";
import img3 from "../../Assets/New-Banner03.jpg";
import img4 from "../../Assets/New-Banner04.jpg";
import './Carousel.css'; 

const Carousel = () => {

  return (
    <div>
      <CCarousel controls indicators >
        <CCarouselItem>
          <CImage className="d-block w-100 carousel-image" src={img1} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100 carousel-image" src={img2} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100 carousel-image" src={img3} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100 carousel-image" src={img4} alt="slide 2" />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}

export default Carousel;
