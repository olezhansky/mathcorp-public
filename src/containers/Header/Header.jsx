import React from 'react'
import Menu from '../../components/Menu/Menu'
import classes from './Header.module.scss'
import {MenuItem, Select  } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { closeMobileMenuAction, setLanguage, toggleMobileMenuAction } from '../../store/actions/settingsActions';
import { useTranslation } from 'react-i18next';
import MyButton from '../../components/UI/Button/MyButton';
import Logo from '../../components/Logo/Logo';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import flagImg from '../../assets/images/flag.png'

const Header = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {language, mobileMenu} = useSelector((state) => state.settingsReducer)
    const handleChangeLanguage = (e) => {
        dispatch(setLanguage(e.target.value))
    }
    const handleClick = () => {
        dispatch(toggleMobileMenuAction())
    }
    const handleCloseMobileMenu = () => {
        dispatch(closeMobileMenuAction())
    }
    return (
        <div className={classes.Wrapper} data-aos="fade-down">
            <div className={classes.TopLine}>
                <div>{t('header.text')}</div>
                <img src={flagImg} alt="img"/>
            </div>
            <div className="container">
                <div className={classes.Inner}>
                    <div onClick={handleCloseMobileMenu}>
                        <Logo/>
                    </div>
                    <div className={classes.MenuSelectButton}>
                        <Menu />
                        <div className={classes.Select}>
                            <Select
                                MenuProps={{
                                    disableScrollLock: true,
                                }}
                                value={language}
                                onChange={handleChangeLanguage}
                                >
                                <MenuItem value='UA'>UA</MenuItem>
                                <MenuItem value='RU'>RU</MenuItem>
                            </Select>
                        </div>
                        <div className={classes.Button}>
                            <MyButton variant="contained">{t('general.button')}</MyButton>
                        </div>
                    </div>
                    <div className={classes.MenuSelectButtonMobileWrapper}>
                        <div className={classes.MenuSelectButtonMobile} onClick={handleClick}>
                            <div className={mobileMenu ? classes.MenuLineTopTransform : classes.MenuLineTop}></div>
                            <div className={mobileMenu ? classes.MenuLineCenterTransform : classes.MenuLineCenter}></div>
                            <div className={mobileMenu ? classes.MenuLineBottomTransform : classes.MenuLineBottom}></div>
                        </div>
                    </div>
                    <MobileMenu mobileMenu={mobileMenu} onToggle={handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default Header

