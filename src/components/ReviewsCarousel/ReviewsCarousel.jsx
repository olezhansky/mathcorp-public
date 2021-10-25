import React  from "react";
import Slider from "react-slick";
import classes from './ReviewsCarousel.module.scss'
import { reviews } from '../../data/data'

const ReviewsCarousel = () => {
    const settings = {
      speed: 1500,
      infinite: true,
      dots: false,
      adaptiveHeight: true,
      variableWidth: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: false,
      autoplay: true,
      pauseOnHover: true
    };
    return (
      <>
        <Slider {...settings} className={classes.ReviewsCarousel}>
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

