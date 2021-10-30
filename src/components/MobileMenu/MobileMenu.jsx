import { MenuItem, Select } from '@material-ui/core';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom'
import { setLanguage, setRoutePathAction } from '../../store/actions/settingsActions';
import MyButton from '../UI/Button/MyButton';
import classes from './MobileMenu.module.scss'

const MobileMenu = ({mobileMenu, onToggle}) => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const router = useHistory()
    const routePath = useSelector((state) => state.settingsReducer.routePath)
    const handleClick = () => {
        onToggle()
        dispatch(setRoutePathAction(router.location.pathname))
    }
    const language = useSelector((state) => state.settingsReducer.language)
    const handleChangeLanguage = (e) => {
        dispatch(setLanguage(e.target.value))
    }
    return (
        <div className={mobileMenu ? classes.WrapperActive : classes.Wrapper}>
            <ul className={classes.List}>
                <li onClick={handleClick} className={classes.Item}>
                    <NavLink className={routePath === '/' ? classes.linkActive : classes.link} to='/'>
                        {t('menu.main')}
                    </NavLink>
                </li>
                <li onClick={handleClick} className={classes.Item}>
                    <NavLink className={routePath === '/teachers' ? classes.linkActive : classes.link} to='/teachers'>
                        {t('menu.teachers')}
                    </NavLink>
                </li>
                <li onClick={handleClick} className={classes.Item}>
                    < NavLink className={routePath === '/contacts' ? classes.linkActive : classes.link} to='/contacts'>
                        {t('menu.contacts')}
                    </NavLink>
                </li>
            </ul>
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
    )
}

export default MobileMenu
