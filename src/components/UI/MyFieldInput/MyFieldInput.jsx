import React from "react";
import { TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import classes from './MyFieldInput.module.scss'


const MyFieldInput = ({id, label, value, onChange, touched, error, children, ...props}) => {
    const { t } = useTranslation()
    return (
        <div className={classes.MyFieldInput}>
            <TextField
                {...props}
                id={id}
                label={label}
                value={value}
                onChange={onChange}
                margin="dense"
                variant="outlined"
                fullWidth
            >
                {children}
            </TextField >
            {touched ? (
                <div className={classes.TextFieldError}>{t(error)}</div>
            ) : null}
        </div>
    )
}

export default MyFieldInput;