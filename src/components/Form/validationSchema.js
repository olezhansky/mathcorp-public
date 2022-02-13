import * as yup from 'yup'

const validationsForm = yup.object({
  name: yup.string().required('form.errorName'),
  phone: yup
    .number()
    .typeError('form.errorPhoneCorrect')
    .required('form.errorPhone'),
  selectClass: yup.string().required('form.errorSelect'),
})

export default validationsForm
