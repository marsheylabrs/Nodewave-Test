import React from 'react';
import './Works.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from '../../Assets/Thumnail 4.png';
import img2 from '../../Assets/Thumnail 5.png';


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



function Works() {
  return (
    <Carousel responsive={responsive}>
        <div className="works-slider">
            <img src={img1} alt="" className="works-image" />
        </div>
        <div className="works-slider">
            <img src={img2} alt="" className="works-image" />
        </div>
    </Carousel>
  )
}

export default Works