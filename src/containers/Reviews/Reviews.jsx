import React from 'react'
import classes from './Reviews.module.scss'
import Title from '../../components/Title/Title'
import ReviewsCarousel from '../../components/ReviewsCarousel/ReviewsCarousel'
import { useTranslation } from 'react-i18next'

const Reviews = () => {
    const { t } = useTranslation()
    return (
        <div className={classes.Wrapper}>
           <div className="container">
                <div className={classes.Title}>
                    <Title title={t('reviews.title')}/>    
                </div>
                <div className={classes.Reviews}>
                    <ReviewsCarousel />
                    <div className={classes.Link}>
                        <a 
                            href="https://www.google.com/maps/place/Math+Corporation/@50.4546356,30.5027635,13z/data=!4m5!3m4!1s0x0:0xfad5bb028d2be4ab!8m2!3d50.4502882!4d30.5941653" 
                            rel="noreferrer"
                            target="_blank"
                        >
                            {t('reviews.googleReviews')}
                            </a>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Reviews
