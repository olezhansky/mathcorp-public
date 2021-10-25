import React from 'react'
import classes from './Teachers.module.scss'
import MyButton from '../../components/UI/Button/MyButton'
import Teachers from '../../components/Teachers/Teachers'
import { useHistory } from 'react-router-dom'
import { setRoutePathAction } from '../../store/actions/settingsActions'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

const TeachersContainer = () => {

    const { t } = useTranslation()
    const dispatch = useDispatch()

    const router = useHistory()

    const handleClick = () => {
        router.push('/teachers')
        dispatch(setRoutePathAction('/teachers'))
    }
    return (
        <div className={classes.Wrapper}>
            <div className="container">
                <div className={classes.Inner}>
                    <Teachers numSlice={3}/>
                    <div className={classes.Link} data-aos="fade-left">
                        <span onClick={handleClick}>{t('teachers.other_teacher')}</span>
                    </div>
                    <div className={classes.Button} data-aos="flip-left">
                        <MyButton variant="contained">{t('teachers.button')}</MyButton>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeachersContainer
