import React, { useState } from 'react'
import Menu from '../../components/Menu/Menu'
import classes from './Header.module.scss'
import {MenuItem, Select  } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../store/actions/settingsActions';
import { useTranslation } from 'react-i18next';
import MyButton from '../../components/UI/Button/MyButton';
import Logo from '../../components/Logo/Logo';
import MobileMenu from '../../components/MobileMenu/MobileMenu';

const Header = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [state, setState] = useState(false)
    const language = useSelector((state) => state.settingsReducer.language)
    const handleChangeLanguage = (e) => {
        dispatch(setLanguage(e.target.value))
    }

    const handleClick = () => {
        setState((state) => !state)
    }

    const handleCloseMobileMenu = () => {
        setState(false) 
    }

    return (
        <div className={classes.Wrapper} data-aos="fade-down">
            <div className="container">
                <div className={classes.Inner}>
                    <div>
                        <Logo closeMobileMenu={handleCloseMobileMenu}/>
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
                            <div className={state ? classes.MenuLineTopTransform : classes.MenuLineTop}></div>
                            <div className={state ? classes.MenuLineCenterTransform : classes.MenuLineCenter}></div>
                            <div className={state ? classes.MenuLineBottomTransform : classes.MenuLineBottom}></div>
                        </div>
                    </div>
                    <MobileMenu state={state} onToggle={handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default Header

