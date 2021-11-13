import React from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import closeImg from '../../../assets/images/common/close.png'
import img from '../../../assets/images/feedback/feedback-img.svg'
import classes from './Modal.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { closeModalAction } from '../../../store/actions/settingsActions'
import Form from '../../Form/Form'
import { useTranslation } from 'react-i18next'

const Modal = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const isModalActive = useSelector((state) => state.settingsReducer.modal)
    const handleClick = () => {
        dispatch(closeModalAction())
    }
    return (
        <>
            <div className={isModalActive ? classes.ModalActive : classes.Modal}>
                <div className={classes.ModalBody}>
                    <div className={classes.ModalTop} >
                        <div onClick={handleClick} className={classes.CloseImg} >
                            <img src={closeImg} alt="close"/>
                        </div>
                    </div>
                    <div className={classes.Content}>
                        <div className={classes.ContentLeft}>
                            <p className={classes.Text}>
                                {t('form.text')} <span>{t('form.textBold')}</span> {t('form.text2')}
                            </p>
                            <div className={classes.Images}>
                                <img src={img} alt="img"/>
                            </div>
                        </div>
                        <div className={classes.Form}>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
            <Backdrop isOpen={isModalActive}/> 
        </>
    )
}

export default Modal
