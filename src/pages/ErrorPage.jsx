import React from 'react'
import errorImg from '../assets/images/error/error.png'
import classes from './Pages.module.scss'

const ErrorPage = () => {
    return (
        <div className={classes.ErrorPage} data-aos="zoom-in-up">
            <div className="container">
                <div className={classes.ErrorPageImage}>
                    <img src={errorImg} alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
