import * as yup from "yup";
import i18n from '../../i18n';

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationsForm = {
  name: yup.string().required(i18n.t('form.errorName')),
  phone: yup.number().typeError(i18n.t('form.errorPhoneCorrect')).required(i18n.t('form.errorPhone')),
  selectClass: yup.string().required(i18n.t('form.errorSelect')),
  // district: yup.string().required(i18n.t('form.errorSelect')),
  // typeOfStudy: yup.string().required(i18n.t('form.errorSelect')),
};

export default validationsForm;
