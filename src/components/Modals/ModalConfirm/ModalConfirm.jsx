import React from 'react'
import images from '../../../assets/images/common/orderConfirm.png'
import classes from './ModalConfirm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { closeMobileMenuAction, closeModalConfirmAction } from '../../../store/actions/settingsActions'
import { useTranslation } from 'react-i18next'
import BackdropConfirm from '../../UI/BackdropConfirm/BackdropConfirm'

const ModalConfirm = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const isModalConfirmActive = useSelector((state) => state.settingsReducer.modalConfirm)
    const userName = useSelector((state) => state.settingsReducer.userName)
    const handleClick = () => {
        dispatch(closeModalConfirmAction())
        dispatch(closeMobileMenuAction())
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
            <BackdropConfirm isOpen={isModalConfirmActive}/> 
        </>
    )
}

export default ModalConfirm
