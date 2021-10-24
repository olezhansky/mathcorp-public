import React  from "react";
import Slider from "react-slick";
import classes from './ReviewsCarousel.module.scss'
import { reviews } from '../../data/data'

const ReviewsCarousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <>
        <Slider {...settings} className={classes.Test}>
          {reviews.map((review) => (
            <div className={classes.Slide}>
              <img src={review.img} alt="img" />
            </div>
          ))}
        </Slider>
      </>
    );
}

export default ReviewsCarousel

