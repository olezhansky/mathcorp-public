import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModalAction, closeModalConfirmAction } from '../../../store/actions/settingsActions'
import { useHistory } from 'react-router-dom'
import classes from './Backdrop.module.scss'

const BackdropConfirm = ({isOpen}) => {
    const router = useHistory()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(closeModalAction())
        dispatch(closeModalConfirmAction())
        router.push('/')
    }
    return (
        <div onClick={handleClick} className={isOpen ? classes.WrapperActive : classes.Wrapper} />
    )  
}
   
export default BackdropConfirm
