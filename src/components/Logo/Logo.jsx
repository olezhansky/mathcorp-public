import React from 'react'
import logo from '../../assets/images/common/logo.png'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setRoutePathAction } from '../../store/actions/settingsActions'
import classes from './Logo.module.scss'

const Logo = () => {
    const router = useHistory()
    const dispatch = useDispatch()
    const scrollToTopHandler = () => {
        router.push('/')
        window.scrollTo({
          behavior: 'smooth',
            top: 0,
        });
    };
    
    const handleClick = () => {
        dispatch(setRoutePathAction('/'))
        scrollToTopHandler()
    }
    return (
        <div className={classes.Logo} onClick={handleClick}>
            <img src={logo} alt="img"/>
        </div>
    )
}

export default Logo
