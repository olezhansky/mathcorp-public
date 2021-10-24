import { useMediaQuery } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import fixedImg from '../../assets/icons/fixed-email.svg'
import fixedImgMobile from '../../assets/icons/fixed-email-mobile.svg'
import { openModalAction } from '../../store/actions/settingsActions'
import classes from './FixedEmail.module.scss'

const FixedEmail = () => {
    const dispatch = useDispatch()
    const tabletMatch = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const mobileMatch = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const handleClick = () => {
        dispatch(openModalAction())
    }
    return (
        <div className={classes.Images} onClick={handleClick} data-aos='fade-up'>
            {tabletMatch && <img src={fixedImg} alt="img"/>}
            {mobileMatch && !tabletMatch && <img src={fixedImgMobile} alt="img"/>}
        </div>
    )
}

export default FixedEmail
