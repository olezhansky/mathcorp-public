import React from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import images from '../../../assets/images/common/orderConfirm.png'
import classes from './ModalConfirm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { closeModalConfirmAction } from '../../../store/actions/settingsActions'
import { useTranslation } from 'react-i18next'

const ModalConfirm = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const isModalConfirmActive = useSelector((state) => state.settingsReducer.modalConfirm)
    const userName = useSelector((state) => state.settingsReducer.userName)
    const handleClick = () => {
        dispatch(closeModalConfirmAction())
    }
    return (
        <>
            <div className={isModalConfirmActive ? classes.ModalActive : classes.Modal}>
                <div className={classes.ModalBody}>
                    <div className={classes.Images}>
                        <img src={images} alt="img"/>
                    </div>
                    <div className={classes.Window}>
                        <p className={classes.Text}>{userName}, {t('modalConfirm.text')}</p>
                        <p className={classes.SubText}>{t('modalConfirm.subText')}</p>
                        <div className={classes.Line}/>
                        <div onClick={handleClick} className={classes.Button}>
                           ok
                        </div>
                    </div>  
                </div>
            </div>
            <Backdrop isOpen={isModalConfirmActive}/> 
        </>
    )
}

export default ModalConfirm
