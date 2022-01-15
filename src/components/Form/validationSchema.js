import * as yup from 'yup'
import i18n from '../../i18n'

const validationsForm = yup.object({
  name: yup.string().required(i18n.t('form.errorName')),
  phone: yup
    .number()
    .typeError(i18n.t('form.errorPhoneCorrect'))
    .required(i18n.t('form.errorPhone')),
  selectClass: yup.string().required(i18n.t('form.errorSelect')),
})

export default validationsForm
