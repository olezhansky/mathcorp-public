import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModalAction, closeModalConfirmAction } from '../../../store/actions/settingsActions'
import classes from './Backdrop.module.scss'

const Backdrop = ({isOpen}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(closeModalAction())
        dispatch(closeModalConfirmAction())
    }
    return (
        <div onClick={handleClick} className={isOpen ? classes.WrapperActive : classes.Wrapper} />
    )  
}
   
export default Backdrop
