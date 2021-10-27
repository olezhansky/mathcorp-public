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
import { closeModalAction, openModalConfirmAction, setUserNameAction } from '../../store/actions/settingsActions';
import store from '../../store/store'
import classes from './Form.module.scss'
import i18n from '../../i18n';


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
  
  const optionsDistrict = [
    {value: "Lukianivska", label: i18n.t('form.optionDistrictLukianivska')},
    {value: "Livoberezhna", label: i18n.t('form.optionDistrictLivoberezhna')},
  ];
  const optionsTypeOfStudy = [
    {value: "онлайн", label: "онлайн"},
    {value: "очні", label: "очні"},
  ];
  
  const { t } = useTranslation()
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
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
              // onBlur={handleBlur}
              // helperText={touched.name ? errors.name : ""}
              // error={touched.name && Boolean(errors.name)}
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
            placeholder='+380(067)2345678'
            value={values.phone}
            onChange={handleChange}
            // onBlur={handleBlur}
            // helperText={touched.phone ? errors.phone : ""}
            // error={touched.phone && Boolean(errors.phone)}
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
              // helperText={touched.selectClass ? errors.selectclass : ""}
              // error={touched.selectClass && Boolean(errors.selectClass)}
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
        <div className={classes.TextField} data-aos="fade-up" data-aos-duration="1900">
            <TextField
              SelectProps={{ MenuProps: { disableScrollLock: true } }}
              select
              id="district"
              label={t('form.district')}
              value={values.district}
              onChange={handleChange("district")}
              // helperText={touched.district ? errors.district : ""}
              // error={touched.district && Boolean(errors.district)}
              margin="dense"
              variant="outlined"
              fullWidth
            >
              {optionsDistrict.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {touched.district  ? (
            <div className={classes.TextFieldError}>{errors.district}</div>
          ) : null}
          </div>
          <div className={classes.TextField} data-aos="fade-up" data-aos-duration="2200">
            <TextField
              SelectProps={{ MenuProps: { disableScrollLock: true } }}
              select
              id="typeOfStudy"
              label={t('form.typeOfStudy')}
              value={values.typeOfStudy}
              onChange={handleChange("typeOfStudy")}
              // helperText={touched.typeOfStudy ? errors.typeOfStudy : ""}
              // error={touched.typeOfStudy && Boolean(errors.typeOfStudy)}
              margin="dense"
              variant="outlined"
              fullWidth
            >
              {optionsTypeOfStudy.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {touched.typeOfStudy  ? (
            <div className={classes.TextFieldError}>{errors.typeOfStudy}</div>
          ) : null}
          </div>
          <div className={classes.Button} data-aos="fade-up" data-aos-duration="2500">
            <Button variant="outlined" type="submit">{t('form.button')}</Button>
          </div>
      </form>
  );
};

const Form = withFormik({
  mapPropsToValues: ({
    name,
    phone,
    selectClass,
    district,
    typeOfStudy,
  }) => {
    return {
      name: name,
      phone: phone,
      selectClass: selectClass,
      district: district,
      typeOfStudy: typeOfStudy
    };
  },

  validationSchema: yup.object().shape(validationsForm),

  handleSubmit: (values, {resetForm}) => {
      sendMessageTotelegram(`Ім'я: ${values.name}, телефон: ${values.phone}, клас: ${values.selectClass}, район: ${values.district}, тип занять: ${values.typeOfStudy}`)
      store.dispatch(setUserNameAction(values.name))
      resetForm()
      store.dispatch(openModalConfirmAction())
      store.dispatch(closeModalAction())
  }
})(FormComponent);

export default Form;







