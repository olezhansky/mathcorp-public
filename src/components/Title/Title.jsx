import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import classes from './Title.module.scss'

const Title = ({title}) => {
    const tabletMatch = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const mobileMatch = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    return (
        <>
            {tabletMatch && ( 
            <h2 
                className={classes.Title} 
                data-aos="zoom-in"
            >
                {title}
            </h2>)}
            {mobileMatch && !tabletMatch && ( 
            <h2 
                className={classes.Title} 
                data-aos="fade-right"
            >
                {title}
            </h2>)}  
        </> 
    )
}

export default Title
