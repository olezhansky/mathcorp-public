import React, {useEffect, useCallback} from "react";
import {
  TextField,
  MenuItem,
  Button
} from "@material-ui/core";
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'
import validationsForm from './validationSchema'
import sendMessageTotelegram from '../../api/telegram';
import { closeModalAction } from '../../store/actions/settingsActions';
import { useDispatch } from 'react-redux'
import classes from './Form.module.scss'


const Form = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const router = useHistory()
  const optionsClass = [
    {value: "5", label: "5"},
    {value: "6", label: "6"},
    {value: "7", label: "7"},
    {value: "8", label: "8"},
    {value: "9", label: "9"},
    {value: "10", label: "10"},
    {value: "11", label: "11"},
  ];

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      selectClass: '',
    },
    validationSchema: validationsForm,
    onSubmit: (values, {resetForm}) => {
      sendMessageTotelegram(`Ім'я: ${values.name}, телефон: ${values.phone}, клас: ${values.selectClass}`)
      setTimeout(() => {
        dispatch(closeModalAction())
        sessionStorage.setItem('userName', values.name)
        resetForm()
        router.push('/thanks');
        window.location.reload()
      }, 1000)
    },
  });

  const handleSubmit = useCallback(() => {
    formik.handleSubmit();
  }, [formik]);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        handleSubmit();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [handleSubmit]);

  const myError = formik.errors.name || formik.errors.phone ||  formik.errors.selectClass || !formik.values.name

  return (
      <form className={classes.Form}>
        <div className={classes.TextField} data-aos="fade-up" data-aos-duration="1000">
          <TextField
              id="name"
              label={t('form.name')} 
              value={formik.values.name}
              onChange={formik.handleChange}
              margin="dense"
              variant="outlined"
            />
             {formik.touched.name  ? (
            <div className={classes.TextFieldError}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className={classes.TextField} data-aos="fade-up" data-aos-duration="1300">
          <TextField
            inputProps={{
              inputMode: 'numeric',
            }}
            id="phone"
            label={t('form.phone')} 
            type="phone"
            placeholder='0672345678'
            value={formik.values.phone}
            onChange={formik.handleChange}
            margin="dense"
            variant="outlined"
            fullWidth
          />
           {formik.touched.phone  ? (
            <div className={classes.TextFieldError}>{formik.errors.phone}</div>
          ) : null}
        </div>
        <div className={classes.TextField} data-aos="fade-up" data-aos-duration="1600">
            <TextField
              SelectProps={{ MenuProps: { disableScrollLock: true } }}
              select
              id="selectClass"
              label={t('form.class')}
              value={formik.values.selectClass}
              onChange={formik.handleChange("selectClass")}
              margin="dense"
              variant="outlined"
              fullWidth
            >
              {optionsClass.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {formik.touched.selectClass  ? (
            <div className={classes.TextFieldError}>{formik.errors.selectClass}</div>
          ) : null}
          </div>
          <div className={myError ? `${classes.Button} ${classes.ButtonDisabled}` : classes.Button}>
            <Button variant="contained" onClick={handleSubmit}>{t('form.button')}</Button>
          </div>
      </form>
      
  );
};

export default Form;















