import React from 'react'
import classes from './Menu.module.scss'
import { NavLink, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux'
import { setRoutePathAction } from '../../store/actions/settingsActions';


const Menu = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const router = useHistory()
    const routePath = useSelector((state) => state.settingsReducer.routePath)
    const handleClick = () => {
        dispatch(setRoutePathAction(router.location.pathname))
    }
    return (
        <ul className={classes.list}>
            <li onClick={handleClick}>
                <NavLink className={routePath === '/' ? classes.itemActive : classes.item} to='/'>
                    {t('menu.main')}
                </NavLink>
            </li>
            <li onClick={handleClick}>
                <NavLink className={routePath === '/teachers' ? classes.itemActive : classes.item} to='/teachers'>
                    {t('menu.teachers')}
                </NavLink>
            </li>
            <li onClick={handleClick}>
                < NavLink className={routePath === '/contacts' ? classes.itemActive : classes.item} to='/contacts'>
                    {t('menu.contacts')}
                </NavLink>
            </li>
        </ul>
    )
}

export default Menu

