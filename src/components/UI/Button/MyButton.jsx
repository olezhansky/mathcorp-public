import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { openModalAction } from '../../../store/actions/settingsActions';

const MyButton = ({children}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(openModalAction())
    }
    return (
        <div>
            <Button onClick={handleClick} variant="contained">{children}</Button>
        </div>
    )
}

export default MyButton
