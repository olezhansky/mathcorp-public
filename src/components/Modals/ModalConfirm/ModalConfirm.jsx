import React from 'react'
import images from '../../../assets/images/common/orderConfirm.png'
import classes from './ModalConfirm.module.scss'
import { useTranslation } from 'react-i18next'
import BackdropConfirm from '../../UI/BackdropConfirm/BackdropConfirm'
import { useHistory } from 'react-router-dom'

const ModalConfirm = () => {
    const { t } = useTranslation()
    const router = useHistory()
    const userName = sessionStorage.getItem('userName')
    const handleClick = () => {
            sessionStorage.removeItem('userName')
            router.push('/')
    }
    return (
        <>
            <div className={classes.Modal}>
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
            <BackdropConfirm isOpen={true}/> 
        </>
    )
}

export default ModalConfirm
