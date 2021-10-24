import React from 'react'
import classes from './Title.module.scss'

const Title = ({title}) => <h2 className={classes.Title} data-aos="zoom-in">{title}</h2>

export default Title
