import React from 'react'
import { useHistory } from 'react-router-dom'
import classes from './Backdrop.module.scss'

const BackdropConfirm = ({isOpen}) => {
    const router = useHistory()
    const handleClick = () => {
        router.push('/')
    }
    return (
        <div onClick={handleClick} className={isOpen ? classes.WrapperActive : classes.Wrapper} />
    )  
}
   
export default BackdropConfirm
