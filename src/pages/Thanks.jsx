import React from 'react'
import ModalConfirm from '../components/Modals/ModalConfirm/ModalConfirm'
import classes from './Pages.module.scss'

const Thanks = () => {
    return (
        <>
            <ModalConfirm />
            <div className={classes.Thanks} />
        </>
    )
}

export default Thanks
