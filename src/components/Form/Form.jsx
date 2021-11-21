import React from "react";
import {
  TextField,
  MenuItem,
  Button
} from "@material-ui/core";
import { withFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from 'react-i18next';
import validationsForm from './validationSchema'
import sendMessageTotelegram from '../../api/telegram';
import { closeModalAction } from '../../store/actions/settingsActions';
import store from '../../store/store'
import classes from './Form.module.scss'
import history from '../../util/history'


const FormComponent = props => {
  const optionsClass = [
    {value: "5", label: "5"},
    {value: "6", label: "6"},
    {value: "7", label: "7"},
    {value: "8", label: "8"},
    {value: "9", label: "9"},
    {value: "10", label: "10"},
    {value: "11", label: "11"},
  ];
  
  const { t } = useTranslation()

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = props;

  return (
      <form onSubmit={handleSubmit} className={classes.Form}>
        <div className={classes.TextField} data-aos="fade-up" data-aos-duration="1000">
          <TextField
              id="name"
              label={t('form.name')} 
              value={values.name}
              onChange={handleChange}
              margin="dense"
              variant="outlined"
            />
             {touched.name  ? (
            <div className={classes.TextFieldError}>{errors.name}</div>
          ) : null}
        </div>
        <div className={classes.TextField} data-aos="fade-up" data-aos-duration="1300">
          <TextField
            id="phone"
            label={t('form.phone')} 
            type="phone"
            placeholder='+380672345678'
            value={values.phone}
            onChange={handleChange}
            margin="dense"
            variant="outlined"
            fullWidth
          />
           {touched.phone  ? (
            <div className={classes.TextFieldError}>{errors.phone}</div>
          ) : null}
        </div>
        <div className={classes.TextField} data-aos="fade-up" data-aos-duration="1600">
            <TextField
              SelectProps={{ MenuProps: { disableScrollLock: true } }}
              select
              id="selectClass"
              label={t('form.class')}
              value={values.selectClass}
              onChange={handleChange("selectClass")}
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
            {touched.selectClass  ? (
            <div className={classes.TextFieldError}>{errors.selectClass}</div>
          ) : null}
          </div>
          <div className={classes.Button} data-aos="fade-up" data-aos-duration="2500" >
            <Button variant="contained" type="submit">{t('form.button')}</Button>
          </div>
         { errors.name && console.log(errors.name )}
      </form>
      
  );

};

const Form = withFormik({
  mapPropsToValues: ({
    name,
    phone,
    selectClass,
  }) => {
    return {
      name: name || "",
      phone: phone || "",
      selectClass: selectClass || "",
    };
  
  },
  validationSchema: yup.object().shape(validationsForm),
  handleSubmit: (values, {resetForm}) => {
      sendMessageTotelegram(`Ім'я: ${values.name}, телефон: ${values.phone}, клас: ${values.selectClass}`)
      setTimeout(() => {
        store.dispatch(closeModalAction())
        sessionStorage.setItem('userName', values.name)
        resetForm()
        history.push('/thanks');
        window.location.reload()
      }, 1000)
  }
})(FormComponent);

export default Form;







